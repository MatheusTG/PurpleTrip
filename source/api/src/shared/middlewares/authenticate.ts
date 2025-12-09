import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";
import { env } from "../../env";
import { AppError } from "../errors/app-error";

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  const authHeader = request.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return reply.status(401).send({
      ok: false,
      error: "Unauthorized",
      message: "Token não fornecido",
    });
  }

  const token = authHeader.replace("Bearer ", "").trim();

  try {
    const payload = jwt.verify(token, env.JWT_SECRET);
    request.user = payload as jwt.JwtPayload & { sub: string; email: string; profileType?: string };
  } catch (error) {
    const message = error instanceof AppError ? error.message : "Token inválido ou expirado";
    return reply.status(401).send({
      ok: false,
      error: "Unauthorized",
      message,
    });
  }
}
