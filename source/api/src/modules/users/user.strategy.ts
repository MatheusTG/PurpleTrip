import { RequestBodyDefault } from "fastify";
import { AppError } from "../../shared/errors/app-error";
import { StrategyBase } from "../../shared/strategies/strategy.base";
import { User } from "./user.types";

export class UserStrategy extends StrategyBase<User> {
  Validate(body: RequestBodyDefault, isUpdate?: boolean): User {
    super.Validate(body);
    const b = body as Record<string, unknown>;

    // Name
    if (!isUpdate && (typeof b.name !== "string" || b.name.trim().length === 0)) {
      throw new AppError("Property 'name' is required and must be a non-empty string");
    }

    // Email
    if (!isUpdate && (typeof b.email !== "string" || b.email.trim().length === 0)) {
      throw new AppError("Property 'email' is required and must be a non-empty string");
    }

    // phone
    if (b.phone !== undefined && (typeof b.phone !== "string" || b.phone.trim().length === 0)) {
      throw new AppError("Property 'phone' must be a non-empty string");
    }

    // birthDate
    if (b.birthDate !== undefined && (typeof b.birthDate !== "string" || b.birthDate.trim().length === 0)) {
      throw new AppError("Property 'birthDate' must be a non-empty string");
    }

    // password or passwordHash
    const passwordOrHash = b.password ?? b.passwordHash;
    if (!isUpdate && (typeof passwordOrHash !== "string" || passwordOrHash.trim().length === 0)) {
      throw new AppError("Property 'password' is required and must be a non-empty string");
    }

    const passwordHash = typeof passwordOrHash === "string" ? passwordOrHash : undefined;
    if (!isUpdate && !passwordHash) {
      throw new AppError("Property 'password' is required and must be a non-empty string");
    }

    // isBanned
    if (b.isBanned && typeof b.isBanned !== "boolean") {
      throw new AppError("Property 'isBanned' must be a boolean");
    }

    // profileType
    if (b.profileType && typeof b.profileType !== "string") {
      throw new AppError("Property 'profileType' must be QUEST, HOST, or ADMIN");
    }

    const payload = { ...b } as Record<string, unknown>;
    if (passwordHash) {
      payload.passwordHash = passwordHash;
    }

    if (typeof b.birthDate === "string") {
      payload.birthDate = new Date(b.birthDate);
    }

    return payload as User;
  }
}
