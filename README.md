# Niyass Holdings website

Rebuild of niyassholdings.com (previously WordPress + Elementor) on:

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Neon** Postgres via Drizzle ORM (`@neondatabase/serverless` HTTP driver)
- **Better Auth** (email + password) for the admin area

## Pages

| Route | Source page on the old site |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services` | What We Do (`/services`) |
| `/retail` | Work With Us (`/retail`) |
| `/contact` | New: contact form (old site had phone + email only) |
| `/sign-in`, `/admin` | New: admin sign-in and inquiry inbox |

All copy lives in `src/content/site.ts`, taken from the old WordPress database export. A few edits are marked `EDITED` in that file.

## Setup

```bash
cp .env.example .env.local   # fill in DATABASE_URL, BETTER_AUTH_SECRET, ADMIN_EMAILS
npm install
npm run db:migrate           # creates auth + inquiry tables in Neon
npm run dev
```

Then open `/sign-in`, choose "Create the admin account" with an email listed in `ADMIN_EMAILS`. Sign-up is refused for any other email.

## Database

The production database is the Neon project **niyass-holdings** (`delicate-art-54479423`, AWS us-east-2). Migration `0000_init` has already been applied there. Copy the pooled connection string from the Neon console (project → Connect) into `DATABASE_URL` on your host.

## Scripts

- `npm run db:generate` – generate a migration after editing `src/db/schema.ts`
- `npm run db:migrate` – apply migrations to the database in `DATABASE_URL`
- `npm run db:studio` – browse the database
