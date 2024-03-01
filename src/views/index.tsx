import { jsxRenderer } from "hono/jsx-renderer";
import { Layout as AppLayout } from "~/components/layout.tsx";
import * as styles from "~/views/index.css.ts";

export function Layout() {
	return jsxRenderer(({ children }) => <AppLayout>{children}</AppLayout>);
}

export function Component() {
	return (
		<>
			<h2 class={styles.h2}>Some example list</h2>
			<ul class={styles.ul}>
				<li>🦕 Deno</li>
				<li>🔥 Hono</li>
				<li>🥒 HTMX</li>
				<li>🎈 Fly.io</li>
				<li>🪶 SQLite</li>
				<li>🧢 TypeScript</li>
			</ul>
		</>
	);
}
