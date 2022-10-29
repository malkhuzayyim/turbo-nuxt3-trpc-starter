# Turborepo starter

This is a personal turborepo starter.

It's a work in progress, where I experiment with new tooling & workflows.

Credit to: https://github.com/omar-dulaimi for the submodules `trpc-shield` and `prisma-trpc-generator`, the versions implemented here as local submodules are pretty much forks from his open source packages that go by the same name.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `main`: a [Nuxt.js] app, using a trpc client setup
- `api`: A typescript express trpc prisma api server

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

Make sure to only use the recommended VSCode extensions in this workspace to ensure ESLint tooling works correctly.

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
