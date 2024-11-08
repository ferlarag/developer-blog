# Developer Blog Template

## Table of contents

- [Getting started](#getting-started)
  - [Running this project](#running-development-servers)
  - [Quick Deployment](#quick-deployment)
- [File structure](#file-structure)
- [Tech stack](#tech-stack)
- [Customizing this project](#customizing-this-project)
  - [Schemas](#schemas)
  - [Stylizing](#stylizing)
- [Deploying this project](#deploying-this-project)
- [Resources](#resources)

## IMPORTANT: Live Editing

Live Editing is assembled but not working at the moment

## Getting started

Clone this repo and install the dependencies

```sh
git clone https://github.com/ferlarag/developer-blog.git
cd your-repo
npm install
npm run dev
```

### Running Development Servers

```
npm run dev
```

This command will start the development server for both the Sanity Studio (localhost:3333) and NextJS app (localhost:3000)

### Quick deployment

You can deploy the NextJS app on vercel. If you don't plan on collaborating with others using the Sanity Studio, there's no need to deploy it and you'll probably be fine making changes locally.

If you want others to access the Studio, then you'll need to deploy it.

## File Structure

This monorepo is using turbo and follows the following structure:

### Apps and Packages

- `apps/cms`: a [Sanity Studio](https://sanity.io/studio) app
- `apps/portfolio`: a [Next.js](https://nextjs.org/) app
- `packages/@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `packages/eslint-config`: `eslint` configurations (includes `packages/eslint-config-next` and `eslint-config-prettier`)
- `packages/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://typescriptlang.org/).

## Tech stack

- NextJS
- Sanity
- Typescript
- TailwindCSS
- Shadcn

## Customizing this project

### Schemas

There's two things you are going to change:

- **Schema**: the schemas are located in `apps/cms/schemas`. When you add/modify the shcema, you'll have to run the `npm run schema` (make sure you run it in the `app/cms` directory). This will grab the all the files that contain a Sanity schema object and it will generate a json file (it will be useful later for generating the types!).
- **Queries**: the queries are located in the `app/portfolio/src/sanity/lib/queries.ts` file. Every time you add/modify a query to the `queries.ts` file, you'll need to run the `npm run generate` command (make sure you are running this command in the `apps/portfolio` directory).

### Stylizing

This project uses [`tailwindcss`](https://tailwindcss.com/docs/installation), [`@portabletext/react`](https://npmjs.com/package/@portabletext/react), [`react-refractor`](https://npmjs.com/package/react-refractor).

This template is made with developers in mind. Sanity Studio is configured to used their [`@sanity/code-input`](https://sanity.io/plugins/code-input) plugin and on the Front-end the project uses [`@portabletext/react`](https://npmjs.com/package/@portabletext/react) to render the Portable Text content. [`@portabletext/react`](https://npmjs.com/package/@portabletext/react) uses [`react-refractor`](https://npmjs.com/package/react-refractor) to stylize the code in the blog (you can change the style and use a theme from [prism](https://github.com/PrismJS/prism/tree/gh-pages/themes) or other [community themes for prism](https://github.com/PrismJS/prism-themes))

Everything else is pretty standard. Basic knowlege of TailwindCSS and React will be enough to customize the Front-end.

## Deploying this project

Coming soon!

## Resources

This project followed the official documentation of each product

- [Visual Editing with Next.js App Router and Sanity Studio](https://sanity.io/guides/nextjs-app-router-live-preview)
- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
