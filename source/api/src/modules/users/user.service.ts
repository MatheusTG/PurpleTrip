import { ServiceBase } from "../../shared/services/service.base";
import { UserRepository } from "./user.repository";
import { User } from "./user.types";
import bcrypt from "bcryptjs";
import { AppError } from "../../shared/errors/app-error";

export class UserService extends ServiceBase<User> {
  private readonly userRepository: UserRepository;

  constructor() {
    const repository = new UserRepository();
    super(repository);
    this.userRepository = repository;
  }

  override async createAsync(payload: User): Promise<User> {
    if (await this.userRepository.existsAsync({ email: payload.email })) {
      throw new AppError(`User with email ${payload.email} already exists.`, 409);
    }

    const passwordHash = await this.normalizePasswordHash(payload.passwordHash);
    const normalizedPayload = { ...payload, passwordHash };

    return this.userRepository.createAsync(normalizedPayload);
  }

  override async updateAsync(id: string, payload: User): Promise<User> {
    const exists = await this.userRepository.existsAsync({ id });
    if (!exists) {
      throw new AppError(`User with id ${id} does not exist.`, 404);
    }

    const updatedPayload = { ...payload };
    if (payload.passwordHash) {
      updatedPayload.passwordHash = await this.normalizePasswordHash(payload.passwordHash);
    }

    return this.userRepository.updateAsync(id, updatedPayload);
  }

  async validateCredentials(email: string, password: string): Promise<User> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new AppError("Credenciais inválidas", 401);
    }

    const isPasswordValid = await this.comparePassword(password, user.passwordHash);
    if (!isPasswordValid) {
      throw new AppError("Credenciais inválidas", 401);
    }

    return user;
  }

  private async normalizePasswordHash(passwordOrHash: string): Promise<string> {
    if (this.isHash(passwordOrHash)) {
      return passwordOrHash;
    }

    return bcrypt.hash(passwordOrHash, 10);
  }

  private async comparePassword(plain: string, hash: string): Promise<boolean> {
    if (this.isHash(hash)) {
      return bcrypt.compare(plain, hash);
    }

    // Support existing data that may still be stored as plain text.
    return plain === hash;
  }

  private isHash(value: string): boolean {
    return /^\$2[aby]\$/.test(value);
  }
}
