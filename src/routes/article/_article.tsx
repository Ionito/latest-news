import { MainLayout } from '@/components';
import { Outlet, createFileRoute, useRouter } from '@tanstack/react-router';

const PrevPageLink = () => {
  const { history } = useRouter();
  return <button onClick={() => history.go(-1)}>back</button>;
};

export const Route = createFileRoute('/article/_article')({
  component: () => {
    return (
      <MainLayout header={<PrevPageLink />}>
        <Outlet />
      </MainLayout>
    );
  },
});
