import { Database } from "sqlite/mod.ts";
import { env } from "~/utils/env.ts";

export const db = new Database(`${env.DB_PATH}/${env.DB_NAME}.db`);
