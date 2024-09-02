import { serve } from "bun";

serve({
  fetch(requeset) {
    const url = new URL(requeset.url);
    if (url.pathname === "/") {
      return new Response("HELLO WORLD", { status: 200 });
    } else if (url.pathname === "/ice-tea") {
      return new Response("Ice tea is a good option", { status: 200 });
    } else {
      return new Response("404 Not found", { status: 404 });
    }
  },
});
