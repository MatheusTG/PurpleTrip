import { FastifyInstance } from "fastify";
import { UserController } from "./user.controller";

const userController = new UserController();

export async function userRoutes(fastify: FastifyInstance) {
  fastify.get("/users", (request, reply) => userController.getAsync(request, reply));
  fastify.get("/users/:id", (request, reply) => userController.getByIdAsync(request, reply));
  fastify.delete("/users/:id", (request, reply) => userController.deleteAsync(request, reply));
  fastify.put("/users/:id", (request, reply) => userController.updateAsync(request, reply));
  fastify.post("/users", (request, reply) => userController.createAsync(request, reply));
}
