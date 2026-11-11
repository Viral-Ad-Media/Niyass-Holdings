import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { APIError } from "better-auth/api";
import { db } from "@/db";
import * as schema from "@/db/schema";

/** Only these emails may create an account (comma-separated in ADMIN_EMAILS). */
const adminEmails = (process.env.ADMIN_EMAILS ?? "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "pg", schema }),
  emailAndPassword: { enabled: true, minPasswordLength: 10 },
  user: {
    additionalFields: {
      role: { type: "string", defaultValue: "admin", input: false },
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          if (!adminEmails.includes(user.email.toLowerCase())) {
            throw new APIError("FORBIDDEN", {
              message: "Sign-up is limited to site administrators.",
            });
          }
          return { data: user };
        },
      },
    },
  },
  plugins: [nextCookies()],
});

export type Session = typeof auth.$Infer.Session;
