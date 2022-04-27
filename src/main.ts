// - IMPORTS: LIBRARIES

// NodeJS Process Import
import process from "process";

// Fastify Imports
import Fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from "fastify";

// - IMPORTS: SELF

// API Router Import
import { api_router } from "./api/mod";

// Initialize Application
let app: FastifyInstance = Fastify({ logger: true });

// Register API Route
app.register(api_router, { prefix: "/api" });

// Start Function
let start = async () => {
  try {
    await app.listen(8000);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

// Run Application
start();
