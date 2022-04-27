import { FastifyInstance, FastifyReply, FastifyRequest, FastifyServerOptions } from "fastify";

export let v1_router = async (instance: FastifyInstance, optns: FastifyServerOptions) => {
    instance.get("/ping", async (req: FastifyRequest, rep: FastifyReply) => {
        return {message: "Hello, World!"}
    })
}