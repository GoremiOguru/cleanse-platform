# Cleanse Platform

A premium, therapeutic addiction recovery platform built with Next.js 16, Prisma, and Turso.

## 🚀 Production Readiness
This project is architected for scalability and high privacy. It uses:
- **NextAuth.js (v5 Beta)**: JWT-based sessions for stateless scalability.
- **Turso (libSQL)**: Distributed SQLite for ultra-low latency.
- **Tailwind CSS 4**: Modern, high-performance styling.
- **Framer Motion**: Premium micro-animations for an elite UX.

## 🛠️ Deployment Checklist

### 1. Database Setup (Turso)
- Create a new database on [Turso](https://turso.tech).
- Note your **DATABASE_URL** (starts with `libsql://`) and **TURSO_AUTH_TOKEN**.

### 2. Environment Variables
Set the following variables in your Vercel project settings:
- `DATABASE_URL`: Your Turso DB URL.
- `TURSO_AUTH_TOKEN`: Your Turso Auth Token.
- `AUTH_SECRET`: A secure random string (generate one with `openssl rand -base64 32`).
- `NEXT_PUBLIC_APP_URL`: Your production domain (e.g., `https://cleanse-platform.vercel.app`).

### 3. Database Migrations
Prisma's standard `db push` may have compatibility issues with Turso's specific protocol in some environments. We use a custom migration script:
1. Ensure your `.env` has production credentials.
2. Run `node migrate.mjs` to apply the latest schema changes to your production database.

### 4. Build & Deployment
The project is configured with a `postinstall` script in `package.json` to ensure the Prisma Client is always up-to-date on Vercel:
```bash
"postinstall": "prisma generate"
```

## 📂 Project Structure
- `/app`: Next.js App Router (Pages & API Routes).
- `/components`: Reusable UI components (CounselorCard, PersonalityCard, etc.).
- `/lib`: Database and Auth utility singletons.
- `/prisma`: Schema definition.
- `/public`: Static assets including counselor bios and images.

## 🛡️ Privacy & Security
- All sensitive data is handled with `bcryptjs`.
- Session management is JWT-based to ensure privacy and performance.
- Authentication redirects are handled both at the component level and during the onboarding flow.
