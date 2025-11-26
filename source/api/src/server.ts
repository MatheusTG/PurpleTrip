import * as schema from "./infra/db/schema";

import fastify from "fastify";
import { userRoutes } from "./modules/users/user.routes";

const server = fastify({ logger: true });

const port = 3333;

server.register(userRoutes);

server.listen({ port }, error => {
  if (error) {
    console.error("Erro ao iniciar o servidor:", error);
    process.exit(1);
  }
  console.log("Servidor executando na porta ", port);
});
