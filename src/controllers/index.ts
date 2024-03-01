import { Hono } from "hono";
import { Component, Layout } from "~/views/index.tsx";

export const app = new Hono();

app.use(Layout());
app.get("/", (c) => c.render(Component()));
