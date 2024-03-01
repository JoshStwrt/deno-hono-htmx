import { type PropsWithChildren } from "hono/jsx";
import { jsxRenderer } from "hono/jsx-renderer";
import { Layout as AppLayout } from "~/components/layout.tsx";
import * as users from "~/models/users.ts";
import * as styles from "~/views/users.css.ts";
import { Form } from "~/views/users.form.tsx";

export function Layout() {
	return jsxRenderer(({ children }) => <AppLayout>{children}</AppLayout>);
}

export function Component() {
	const data = users.getAll();

	return (
		<>
			<h2 class={styles.h2}>New user form demo with HTMX</h2>
			<div class={styles.row}>
				<Form />
				<div class={styles.column}>
					<p class={styles.columnTitle}>List of users</p>
					<div id="users">
						{data.map((user) => {
							return <p class={styles.userRow}>{user.email}</p>;
						})}
					</div>
				</div>
			</div>
		</>
	);
}

type Props = {
	data: users.User[];
};

export function AddUserComponent({ data }: PropsWithChildren<Props>) {
	return (
		<>
			<Form />
			{data.map((user) => {
				return <p class={styles.userRow}>{user.email}</p>;
			})}
		</>
	);
}
