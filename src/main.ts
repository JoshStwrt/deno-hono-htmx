import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { app as index } from "~/controllers/index.ts";
import { app as users } from "~/controllers/users.ts";
import { env } from "~/utils/env.ts";

const app = new Hono();

app.use("/public/*", serveStatic({ root: "./" }));
app.route("/", index);
app.route("/users", users);

Deno.serve({ port: env.PORT }, app.fetch);
