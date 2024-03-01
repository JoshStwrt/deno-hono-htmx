import * as styles from "~/views/users.css.ts";

export function Form() {
	return (
		<form
			method="POST"
			hx-target="#users"
			hx-swap-oob="true"
			id="users-form"
			class={styles.column}
		>
			<input
				type="email"
				name="email"
				placeholder="bobby@example.com"
				class={styles.textInput}
				autofocus
			/>
			<button type="submit" class={styles.button}>
				Add
			</button>
		</form>
	);
}
