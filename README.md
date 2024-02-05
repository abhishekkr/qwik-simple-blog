# Qwik Simple Blog ⚡️ Markdown with MDX

> For help on qwik, check [here](https://qwik.dev/); for info specific to MDX that enables Markdown rendering check [here](https://qwik.dev/docs/guides/mdx/) & [here](https://mdxjs.com/).

## Project Structure

Inside your project, you'll see the following directory structure:

```
└── src/
    └── routes/
        └── blogs
            └── Name of the Blog
                └── index.mdx
```

> just add new blog markdowns like [./src/routes/blogs/<blog-name-directory>/index.mdx](src/routes/blogs/first-blog/index.mdx)

* Blog Index will auto-create; item sorting is based on `created_at:` data field for MDX in `index.mdx` files. Can check [index.mdx](src/routes/blogs/blog-with-qwik/index.mdx) for Markdown data structure.


## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
npm start # or `yarn start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
npm run preview # or `yarn preview`
```

## Static Site Generator (Node.js)

```shell
npm run build.server
```

---

## Production

* Build Static Site & deploy it from `dist`. Update `origin` value in `./adapters/static/vite.config.ts` to your blog's URL.

**OR**

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
npm run build # or `yarn build`
```

---
