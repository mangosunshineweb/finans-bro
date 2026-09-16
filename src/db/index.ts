import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const connectionString = process.env.DATABASE_URL || "postgresql://finance:finance@localhost:5432/finance_ai";

const client = postgres(connectionString, { max: 10 });

export const db = drizzle(client);
