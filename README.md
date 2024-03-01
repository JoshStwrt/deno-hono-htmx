# Deno, Hono, & HTMX demo

**⚠️ Serves as an experiment, and I probably didn't think everything through.**

## What is this?

This demo explored how Deno, Hono, HTMX, and various other technologies could be combined to create hypermedia-driven applications in a relatively short period of time.

## Things I played with while building it

- 🦕 **Deno:** A modern and secure JavaScript runtime.
- 🔥 **Hono:** Fast, lightweight, and designed for the web's edge.
- 🥒 **HTMX:** Simplifies building dynamic hypermedia-driven apps. Who loves AJAX?
- 🎈 **Fly.io:** A platform for deploying apps close to users.
- 🪶 **SQLite:** A surprisingly capable embedded database.
- 🧢 **TypeScript:** Types just make everything a little bit easier, okay.

## Key things to note

- **Page navigations:** Switching between pages with partial HTML updates (HTMX)
- **Progressively-enhanced forms:** Uses HTMX to streamline form submission and interaction
- **Hono `css` helper:** Simplifies the integration of CSS styling
- **JSX templating:** Provides a familiar and expressive way to generate HTML
- **No build step:** No additional bundling or building is required

## Out-of-scope (but for investigation!)

- **Client-side interations:** When handling something client-side, I'd likely use plain ol'
  JavaScript.
- **Distributed SQLite with LiteFS:** Scalable data storage with global replication
- **Tigris Global Object Storage:** Global assets with flexible caching control
