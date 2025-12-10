import { FastifyInstance } from "fastify";
import { AddressController } from "./address.controller";

const addressController = new AddressController();

export async function addressRoutes(fastify: FastifyInstance) {
  fastify.get("/address", (request, reply) => addressController.getAsync(request, reply));
  fastify.get("/address/:id", (request, reply) => addressController.getByIdAsync(request, reply));
  fastify.delete("/address/:id", (request, reply) => addressController.deleteAsync(request, reply));
  fastify.put("/address/:id", (request, reply) => addressController.updateAsync(request, reply));
  fastify.post("/address", (request, reply) => addressController.createAsync(request, reply));
}
