/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as HomeImport } from './routes/_home'
import { Route as HomeIndexImport } from './routes/_home/index'
import { Route as ArticleArticleImport } from './routes/article/_article'

// Create Virtual Routes

const ArticleImport = createFileRoute('/article')()
const ArticleArticleIndexLazyImport = createFileRoute('/article/_article/')()

// Create/Update Routes

const ArticleRoute = ArticleImport.update({
  path: '/article',
  getParentRoute: () => rootRoute,
} as any)

const HomeRoute = HomeImport.update({
  id: '/_home',
  getParentRoute: () => rootRoute,
} as any)

const HomeIndexRoute = HomeIndexImport.update({
  path: '/',
  getParentRoute: () => HomeRoute,
} as any)

const ArticleArticleRoute = ArticleArticleImport.update({
  id: '/_article',
  getParentRoute: () => ArticleRoute,
} as any)

const ArticleArticleIndexLazyRoute = ArticleArticleIndexLazyImport.update({
  path: '/',
  getParentRoute: () => ArticleArticleRoute,
} as any).lazy(() =>
  import('./routes/article/_article.index.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_home': {
      id: '/_home'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof HomeImport
      parentRoute: typeof rootRoute
    }
    '/article': {
      id: '/article'
      path: '/article'
      fullPath: '/article'
      preLoaderRoute: typeof ArticleImport
      parentRoute: typeof rootRoute
    }
    '/article/_article': {
      id: '/article/_article'
      path: '/article'
      fullPath: '/article'
      preLoaderRoute: typeof ArticleArticleImport
      parentRoute: typeof ArticleRoute
    }
    '/_home/': {
      id: '/_home/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof HomeIndexImport
      parentRoute: typeof HomeImport
    }
    '/article/_article/': {
      id: '/article/_article/'
      path: '/'
      fullPath: '/article/'
      preLoaderRoute: typeof ArticleArticleIndexLazyImport
      parentRoute: typeof ArticleArticleImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  HomeRoute: HomeRoute.addChildren({ HomeIndexRoute }),
  ArticleRoute: ArticleRoute.addChildren({
    ArticleArticleRoute: ArticleArticleRoute.addChildren({
      ArticleArticleIndexLazyRoute,
    }),
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_home",
        "/article"
      ]
    },
    "/_home": {
      "filePath": "_home.tsx",
      "children": [
        "/_home/"
      ]
    },
    "/article": {
      "filePath": "article",
      "children": [
        "/article/_article"
      ]
    },
    "/article/_article": {
      "filePath": "article/_article.tsx",
      "parent": "/article",
      "children": [
        "/article/_article/"
      ]
    },
    "/_home/": {
      "filePath": "_home/index.tsx",
      "parent": "/_home"
    },
    "/article/_article/": {
      "filePath": "article/_article.index.lazy.tsx",
      "parent": "/article/_article"
    }
  }
}
ROUTE_MANIFEST_END */
