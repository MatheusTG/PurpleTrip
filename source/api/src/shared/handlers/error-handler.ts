import { FastifyError, FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { AppError } from "../errors/app-error";

/**
 * Configura o manipulador global de erros do Fastify. Trata erros do fastify, da classe AppError e erros genéricos.
 * @param server Instância do servidor Fastify.
 */
export function setupErrorHandler(server: FastifyInstance) {
  server.setErrorHandler(
    async (error: FastifyError | AppError | Error, request: FastifyRequest, reply: FastifyReply) => {
      console.error(error);

      if ("validation" in error && error.validation) {
        return reply.status(400).send({
          ok: false,
          error: "Validation Error",
          message: "Dados inválidos fornecidos",
        });
      }

      if (error instanceof AppError) {
        return reply.status(error.statusCode).send({
          ok: false,
          error: error.name,
          message: error.message,
        });
      }

      if (error instanceof Error) {
        const errorWithStatus = error as Error & { statusCode?: number };
        if (errorWithStatus.statusCode) {
          return reply.status(errorWithStatus.statusCode).send({
            ok: false,
            error: error.name || "Error",
            message: error.message,
          });
        }

        return reply.status(500).send({
          ok: false,
          error: "Application Error",
          message: error.message || "Ocorreu um erro na aplicação",
        });
      }

      const fastifyError = error as FastifyError;
      if (fastifyError.statusCode) {
        return reply.status(fastifyError.statusCode).send({
          ok: false,
          error: fastifyError.name || "Error",
          message: fastifyError.message,
        });
      }

      return reply.status(500).send({
        ok: false,
        error: "Internal Server Error",
        message: "Ocorreu um erro interno no servidor",
      });
    }
  );
}
