# Latest news

Latest news is a simple site for showing and searching the news get from [News Api](https://newsapi.org/)

## Running Locally

```bash
pnpm i
pnpm dev
```

## Using

- Vite + React + Typescript
- TanStack Router
- MSW
- React testing library

## Vercel

Seted Vercel to build on push to main
[Demo](https://latest-news-m9u2bv091-ioni-scheines-projects.vercel.app/)

## Building and running in Docker

```bash
docker build -t vite-app .
docker run -p 80:80 vite-app
```

## Msw

Mock service worker is installed just if you want to test and the api is failing (I found api is caped to 100 request per day per user).
You can enable in the browser setting env ´VITE_ENABLE_API_MOCKING´ to ´true´

## Husky

Pre-commit hook set to run commitlint messages. Also it runs test before pushing.
