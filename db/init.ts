import { db } from "~/utils/db.ts";

db.sql`
	CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, email TEXT UNIQUE)
`;

db.close();
