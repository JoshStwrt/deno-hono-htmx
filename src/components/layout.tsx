import { Style } from "hono/css";
import { type PropsWithChildren } from "hono/jsx";
import * as styles from "~/components/layout.css.ts";

export function Layout({ children }: PropsWithChildren) {
	return (
		<>
			<html lang="en">
				<head>
					<meta charset="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<link rel="preload" href="/public/htmx.min.js" as="script" />
					<link rel="preload" href="/public/htmx.head-support.js" as="script" />
					<script src="/public/htmx.min.js"></script>
					<script src="/public/htmx.head-support.js"></script>
					<Style hx-head="re-eval">{styles.global}</Style>
				</head>
				<body hx-boost="true" hx-ext="head-support" class={styles.body}>
					<h1 class={styles.h1}>Deno Demo</h1>
					<nav class={styles.nav}>
						<a
							href="/"
							hx-swap="outerHTML"
							hx-select="#main"
							hx-target="#main"
							class={styles.a}
						>
							Home
						</a>
						<a
							href="/users"
							hx-swap="outerHTML"
							hx-select="#main"
							hx-target="#main"
							class={styles.a}
						>
							Users
						</a>
					</nav>
					<main id="main" class={styles.main}>
						{children}
					</main>
				</body>
			</html>
		</>
	);
}
