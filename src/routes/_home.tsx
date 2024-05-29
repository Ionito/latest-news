import { MainLayout } from '@/components';
import { SearchInput } from '@/components/SearchInput';
import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_home')({
  component: () => (
    <MainLayout header={<SearchInput />}>
      <Outlet />
    </MainLayout>
  ),
});
