import { css } from "hono/css";

export const global = css`
	:-hono-global {
		@layer properties, unset, revert, reset;
		@layer properties {
			:root {
				--color-green-500: oklch(60% 0.27 157);
				--color-sand-100: oklch(97% 0.02 77);
				--color-sand-300: oklch(80% 0.12 77);
				--color-sand-500: oklch(60% 0.27 77);
				--color-sand-700: oklch(38% 0.12 77);

				--size-1: 4px;
				--size-2: 8px;
				--size-3: 12px;
				--size-4: 16px;
				--size-5: 24px;
				--size-6: 32px;
				--size-7: 48px;
			}
		}

		@layer unset {
			* {
				all: unset;
			}

			::placeholder {
				all: unset;
			}
		}

		@layer revert {
			* {
				display: revert;
			}

			audio,
			canvas,
			html,
			iframe,
			img,
			video {
				all: revert;
			}

			pre {
				font-family: revert;
				white-space: revert;
			}

			svg,
			svg *,
			symbol * {
				all: revert;
			}
		}

		@layer reset {
			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			html {
				overscroll-behavior: none;
				text-size-adjust: none;
			}

			body {
				overscroll-behavior: none;
			}

			a,
			button {
				cursor: pointer;
			}

			img {
				max-block-size: 100%;
				max-inline-size: 100%;
			}

			ol,
			ul {
				list-style: none;
			}

			table {
				border-collapse: collapse;
			}

			:where([hidden]) {
				display: none;
			}
		}
	}
`;

export const body = css`
	margin: 0 auto;
	max-width: 960px;
	padding-top: var(--size-5);
	width: 100%;
`;

export const h1 = css`
	color: var(--color-green-500);
	font-size: var(--size-6);
	font-weight: bold;
`;

export const nav = css`
	display: flex;
	gap: var(--size-3);
	margin-top: var(--size-5);
`;

export const a = css`
	color: var(--color-sand-500);
	text-decoration: underline;
	&:hover {
		color: var(--color-sand-300);
	}
`;

export const main = css`
	background-color: var(--color-sand-100);
	border-radius: var(--size-1);
	margin-top: var(--size-5);
	padding: var(--size-5);
`;
