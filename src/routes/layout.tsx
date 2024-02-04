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
      <header class=" rounded-lg">
        <div class="flex flex-wrap items-center justfy-between w-full mx-auto p-3 text-amber-600 text-3xl">
          <a class="-skew-y-3 outline outline-offset-2 outline-lime-300 px-5 rounded-lg"  href="/">Simple Blog</a>
        </div>
      </header>
      <main class="m-2 px-4">
        <Slot />
      </main>
      <footer class="fixed bottom-2 w-3/4 grid grid-cols-5 rounded-lg py-1 bg-yellow-100 text-amber-800">
        <span class="col-span-3 justify-self-start mx-3 text-amber-800">
          (c) 2024 <a href="/">Simple Blog</a>
        </span>
        <div class="col-span-2 justify-self-end mx-2">
          <span class="text-amber-600">
            <a href="/about">About</a>
          </span>
        </div>
      </footer>
    </div>
  );
});
