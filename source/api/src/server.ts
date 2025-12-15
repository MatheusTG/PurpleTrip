import cors from "@fastify/cors";
import fastify from "fastify";
import { env } from "./env";
import { authRoutes } from "./modules/auth/auth.routes";
import { userRoutes } from "./modules/users/user.routes";
import { setupErrorHandler } from "./shared/handlers/error-handler";
import { addressRoutes } from "./modules/address/address.route";
import { roomRoutes } from "./modules/room/room.routes";
import { policiesRoutes } from "./modules/policies/policies.routes";

const server = fastify();
server.register(cors, {
  origin: "*",
});

const port = env.PORT || 3333;

server.register(userRoutes, { prefix: "/api" });
server.register(authRoutes, { prefix: "/api" });
server.register(addressRoutes, { prefix: "/api" });
server.register(roomRoutes, { prefix: "api" });
server.register(policiesRoutes, { prefix: "api" });

setupErrorHandler(server);

server.listen({ port, host: "0.0.0.0" }, error => {
  if (error) {
    console.error("Erro ao iniciar o servidor:", error);
    process.exit(1);
  }
  console.log("Servidor executando na porta", port);
});
