import { css } from "hono/css";

export const h2 = css`
	color: var(--color-sand-700);
	font-size: var(--size-5);
`;

export const row = css`
	display: flex;
	gap: var(--size-5);
	margin-top: var(--size-5);
`;

export const column = css`
	flex: 1;
`;

export const columnTitle = css`
	color: var(--color-sand-700);
	font-weight: bold;
`;

export const textInput = css`
	background-color: white;
	border: 1px solid var(--color-sand-300);
	border-radius: var(--size-3);
	padding: var(--size-4);
	width: 100%;

	&::placeholder {
		color: var(--color-sand-300);
	}
`;

export const button = css`
	background-color: var(--color-green-500);
	border-radius: var(--size-3);
	color: white;
	font-weight: bold;
	margin-top: var(--size-5);
	padding: var(--size-3) var(--size-4);
`;

export const userRow = css`
	margin-top: var(--size-5);
`;
