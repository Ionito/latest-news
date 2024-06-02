/* eslint-disable @typescript-eslint/ban-ts-comment */

import { render } from '@testing-library/react';
import {
  Outlet,
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';

function createTestRouter(component: () => JSX.Element) {
  const rootRoute = createRootRoute({
    component: Outlet,
  });

  const componentRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component,
  });

  const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/test',
    component,
  });

  const router = createRouter({
    routeTree: rootRoute.addChildren([componentRoute, testRoute]),
    history: createMemoryHistory({
      initialEntries: ['/test'],
    }),
  });

  return router;
}

export function renderWithRouter(component: () => JSX.Element) {
  const router = createTestRouter(component);
  return {
    /* @ts-ignore */
    render: render(<RouterProvider router={router} />),
    router,
  };
}
