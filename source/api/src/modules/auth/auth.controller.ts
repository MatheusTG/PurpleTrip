import { FastifyReply, FastifyRequest } from "fastify";
import { AuthService } from "./auth.service";
import { AuthStrategy } from "./auth.strategy";

export class AuthController {
  private readonly service: AuthService;
  private readonly strategy: AuthStrategy;

  constructor() {
    this.service = new AuthService();
    this.strategy = new AuthStrategy();
  }

  async loginAsync(req: FastifyRequest, reply: FastifyReply) {
    const payload = this.strategy.Validate(req.body);
    const data = await this.service.loginAsync(payload);

    reply.status(200).send({ ok: true, data });
  }
}

