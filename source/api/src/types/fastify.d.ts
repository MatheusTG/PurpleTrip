import "fastify";
import { JwtPayload } from "jsonwebtoken";

declare module "fastify" {
  interface FastifyRequest {
    user?: JwtPayload & {
      sub: string;
      email: string;
      profileType?: string;
    };
  }
}
