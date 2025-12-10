import { FastifyInstance } from "fastify";
import { PoliciesController } from "./policies.controller";

const policiesController = new PoliciesController();

export async function policiesRoutes(fastify: FastifyInstance) {
  fastify.get("/policies", (request, reply) => policiesController.getAsync(request, reply));
  fastify.get("/policies/:id", (request, reply) => policiesController.getByIdAsync(request, reply));
  fastify.delete("/policies/:id", (request, reply) => policiesController.deleteAsync(request, reply));
  fastify.put("/policies/:id", (request, reply) => policiesController.updateAsync(request, reply));
  fastify.post("/policies", (request, reply) => policiesController.createAsync(request, reply));
}
