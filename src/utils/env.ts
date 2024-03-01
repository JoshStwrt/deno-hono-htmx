import { load } from "dotenv/mod.ts";
import { z } from "zod";

const EnvSchema = z.object({
	DB_NAME: z.string(),
	DB_PATH: z.string(),
	PORT: z.coerce.number(),
});

await load({ export: true });
const parsedEnv = await EnvSchema.safeParseAsync({
	DB_NAME: Deno.env.get("DB_NAME"),
	DB_PATH: Deno.env.get("DB_PATH"),
	PORT: Deno.env.get("PORT"),
});

if (!parsedEnv.success) {
	const errors = parsedEnv.error.flatten();
	console.error("⛔️");
	console.error("Invalid or missing environment variables:");
	for (const [key, value] of Object.entries(errors.fieldErrors)) {
		console.error(key, ":", value.join(", "));
	}
	console.error("\n");
	Deno.exit(1);
}

export const env = { ...parsedEnv.data };
