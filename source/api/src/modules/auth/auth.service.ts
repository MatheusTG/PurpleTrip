import jwt from "jsonwebtoken";
import { env } from "../../env";
import { UserService } from "../users/user.service";
import { AuthCredentials, AuthPayload } from "./auth.types";
import { User } from "../users/user.types";

export class AuthService {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async loginAsync({ email, password }: AuthCredentials): Promise<AuthPayload> {
    const user = await this.userService.validateCredentials(email, password);
    const token = this.generateToken(user);

    return {
      token,
      user: this.sanitizeUser(user),
    };
  }

  private generateToken(user: User): string {
    return jwt.sign(
      {
        sub: user.id,
        email: user.email,
        profileType: user.profileType,
      },
      env.JWT_SECRET,
      {
        expiresIn: env.JWT_EXPIRES_IN,
      }
    );
  }

  private sanitizeUser(user: User): Omit<User, "passwordHash"> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordHash, ...rest } = user;
    return rest;
  }
}

