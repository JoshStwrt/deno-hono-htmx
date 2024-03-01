import "npm:typed-htmx@0.2.1";

declare global {
	namespace Hono {
		// deno-lint-ignore no-empty-interface
		interface HTMLAttributes extends HtmxAttributes {}
	}
}
