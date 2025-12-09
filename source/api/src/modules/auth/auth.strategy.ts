import { RequestBodyDefault } from "fastify";
import { AppError } from "../../shared/errors/app-error";
import { StrategyBase } from "../../shared/strategies/strategy.base";
import { AuthCredentials } from "./auth.types";

export class AuthStrategy extends StrategyBase<AuthCredentials> {
  Validate(body: RequestBodyDefault): AuthCredentials {
    super.Validate(body);
    const b = body as Record<string, unknown>;

    if (typeof b.email !== "string" || b.email.trim().length === 0) {
      throw new AppError("Property 'email' is required and must be a non-empty string");
    }

    if (typeof b.password !== "string" || b.password.trim().length === 0) {
      throw new AppError("Property 'password' is required and must be a non-empty string");
    }

    return {
      email: b.email,
      password: b.password,
    } as AuthCredentials;
  }
}

