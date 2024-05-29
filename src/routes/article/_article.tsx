import { MainLayout } from '@/components';
import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/article/_article')({
  component: () => (
    <MainLayout header={<button>back</button>}>
      <Outlet />
    </MainLayout>
  ),
});
