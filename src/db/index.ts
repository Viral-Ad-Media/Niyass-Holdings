import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const url = process.env.DATABASE_URL;

// Optional override for local testing against a Neon-compatible HTTP endpoint.
if (process.env.NEON_FETCH_ENDPOINT) neonConfig.fetchEndpoint = process.env.NEON_FETCH_ENDPOINT;

/**
 * Drizzle client over Neon's HTTP driver. DATABASE_URL must be set at runtime;
 * we fall back to a dummy URL so `next build` can run without credentials.
 */
export const db = drizzle(
  neon(url ?? "postgresql://build:build@localhost/build"),
  { schema },
);

export const hasDatabase = Boolean(url);
