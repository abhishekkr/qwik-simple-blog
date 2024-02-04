import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div class="container mx-auto max-w-5xl flex flex-col min-h-screen px-2">
      <header>
        <div class="fle flex-wrap items-center justfy-between w-full mx-auto p-2 text-amber-600 text-3xl">
          <a href="/">Simple Blog</a>
        </div>
      </header>
      <main class="m-2 px-4">
        <Slot />
      </main>
      <footer class="flex bg-yellow-100 text-amber-800">
        <span class="flex text-amber-800">
          (c) 2024 <a href="/">Simple Blog</a>
        </span>
        <span class="text-amber-600">
          <a href="/about">About</a>
        </span>
      </footer>
    </div>
  );
});
