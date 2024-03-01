import { z } from "zod";
import { db } from "~/utils/db.ts";

export function getAll() {
	return db.sql<User>`
		SELECT
			*
		FROM
			users
	`;
}

export function create(email: string) {
	const id = crypto.randomUUID();

	db.sql<User>`
		INSERT INTO
			users (id, email)
		VALUES
			(${id}, ${email})
	`;
}

export const user = z.object({
	id: z.string().uuid(),
	email: z.string().email(),
});

export type User = z.infer<typeof user>;
