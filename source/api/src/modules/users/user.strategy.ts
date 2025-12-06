import { RequestBodyDefault } from "fastify";
import { AppError } from "../../shared/errors/app-error";
import { StrategyBase } from "../../shared/strategies/strategy.base";
import { User } from "./user.types";

export class UserStrategy extends StrategyBase<User> {
  Validate(body: RequestBodyDefault): User {
    super.Validate(body);
    const b = body as Record<string, unknown>;

    // Name
    if (typeof b.name !== "string" || b.name.trim().length === 0) {
      throw new AppError("Property 'name' is required and must be a non-empty string");
    }

    // Email
    if (typeof b.email !== "string" || b.email.trim().length === 0) {
      throw new AppError("Property 'email' is required and must be a non-empty string");
    }

    // phone
    if (typeof b.phone !== "string" || b.phone.trim().length === 0) {
      throw new AppError("Property 'phone' must be a non-empty string");
    }

    // birthDate
    if (typeof b.birthDate !== "string" || b.birthDate.trim().length === 0) {
      throw new AppError("Property 'birthDate' must be a non-empty string");
    }

    // passwordHash
    if (typeof b.passwordHash !== "string" || b.passwordHash.trim().length === 0) {
      throw new AppError("Property 'passwordHash' is required and must be a non-empty string");
    }

    // isBanned
    if (b.isBanned && typeof b.isBanned !== "boolean") {
      throw new AppError("Property 'isBanned' must be a boolean");
    }

    // profileType
    if (b.profileType && typeof b.profileType !== "string") {
      throw new AppError("Property 'profileType' must be QUEST, HOST, or ADMIN");
    }

    return b as User;
  }
}
