import { FastifyInstance } from "fastify";
import { RoomController } from "./room.controller";

const roomController = new RoomController();

export async function roomRoutes(fastify: FastifyInstance) {
  fastify.get("/room", (request, reply) => roomController.getAsync(request, reply));
  fastify.get("/room/:id", (request, reply) => roomController.getByIdAsync(request, reply));
  fastify.delete("/room/:id", (request, reply) => roomController.deleteAsync(request, reply));
  fastify.put("/room/:id", (request, reply) => roomController.updateAsync(request, reply));
  fastify.post("/room", (request, reply) => roomController.createAsync(request, reply));
}
