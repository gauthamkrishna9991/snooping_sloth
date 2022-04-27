
// -- IMPORTS: LIBRARIES

// - Fastify
import {
  FastifyInstance,
  FastifyServerOptions,
} from "fastify";

// -- IMPORTS: SELF
// - API v1 Router
import { v1_router } from "./v1/mod";

// API Router Create
export let api_router = async (
  instance: FastifyInstance,
  optns: FastifyServerOptions
) => {
  // Include v1 APIs
  instance.register(v1_router, { prefix: "/v1" });
};
