import fastify from "fastify";
import { env } from "./env";
import { userRoutes } from "./modules/users/user.routes";
import { setupErrorHandler } from "./shared/handlers/error-handler";

const server = fastify();

const port = env.PORT || 3333;

server.register(userRoutes, { prefix: "/api" });

setupErrorHandler(server);

server.listen({ port }, error => {
  if (error) {
    console.error("Erro ao iniciar o servidor:", error);
    process.exit(1);
  }
  console.log("Servidor executando na porta ", port);
});
