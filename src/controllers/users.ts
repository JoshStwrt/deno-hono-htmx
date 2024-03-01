import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import * as users from "~/models/users.ts";
import { AddUserComponent, Component, Layout } from "~/views/users.tsx";

export const app = new Hono();

app.use(Layout());

app.get("/", (c) => {
	return c.render(Component());
});

const schema = users.user.pick({ email: true });

app.post("/", zValidator("form", schema), (c) => {
	const body = c.req.valid("form");

	users.create(body.email);
	const data = users.getAll();

	return c.html(AddUserComponent({ data }));
});
