import { FastifyInstance } from "fastify";
import { UserController } from "./user.controller";
import { authenticate } from "../../shared/middlewares/authenticate";

const userController = new UserController();

export async function userRoutes(fastify: FastifyInstance) {
  fastify.get("/users", { preHandler: [authenticate] }, (request, reply) =>
    userController.getAsync(request, reply)
  );
  fastify.get("/users/:id", { preHandler: [authenticate] }, (request, reply) =>
    userController.getByIdAsync(request, reply)
  );
  fastify.delete("/users/:id", { preHandler: [authenticate] }, (request, reply) =>
    userController.deleteAsync(request, reply)
  );
  fastify.put("/users/:id", { preHandler: [authenticate] }, (request, reply) =>
    userController.updateAsync(request, reply)
  );
  fastify.post("/users", (request, reply) => userController.createAsync(request, reply));
}
