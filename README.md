# ERP System Skeleton

This repository provides a basic structure for an ERP application using React, Tailwind CSS, Express and Prisma with a MySQL database.

## Prerequisites
- Node.js
- MySQL server

## Setup
1. Install server dependencies:
   ```bash
   cd server && npm install
   ```

2. Configure environment variables by copying `.env.example` to `.env` and editing the values.

3. Run Prisma migrations (after setting up your database):
   ```bash
   npx prisma migrate dev --name init
   ```
4. Start the Express server:
   ```bash
   npm run dev
   ```
5. Install client dependencies and start the React app:
   ```bash
   cd ../client && npm install && npm start
   ```
