import { FastifyInstance } from "fastify";
import { AuthController } from "./auth.controller";

const authController = new AuthController();

export async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/auth/login", (request, reply) => authController.loginAsync(request, reply));
}

