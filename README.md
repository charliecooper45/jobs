# Jobs

A simple app for helping document and track the job search process.

## Why?

Fortunately, I haven't had to search for jobs often in recent times. In the past however, I always ended up with an unwieldy spreadsheet for tracking my job applications. This app helps to manage this process (and also is a nice excuse to use a few technologies I've been excited about recently).

## Tech Stack

### Frontend

- TypeScript
- Next.js
- Chakra UI
- React Query
- React Hook Form

### Backend

- TypeScript
- Next.js API Routes (Serverless functions)
- Prisma

### Deployment

- Github
  - `create-issue-branch` for automated branch management
- Vercel
- Prisma Data Platform
- Heroku Postgres

## Getting Started

1. Install Node.js, Yarn and a local copy of Postgres
2. Create a db `jobs`
3. Add a `.env` file to the repo and insert the database URL (for example `DATABASE_URL="postgresql://user:password@localhost:5432/jobs?schema=public"`)

Next, inside the repo directory run the following commands:

1. `yarn install` -> installs all dependencies
1. `npx prisma db push` -> pushes the DB schema to your local database
1. `npx prisma db seed` -> checks the DB connection and then seeds the DB with initial test data
1. `npx prisma studio` -> runs a simple database editor in the browser for checking the results of the above steps
1. `yarn dev` -> spins up Next.js locally in dev mode
