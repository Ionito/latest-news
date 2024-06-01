import { MainLayout } from '@/components';
import { Button } from '@/components/ui';
import { Outlet, createFileRoute, useRouter } from '@tanstack/react-router';

const PrevPageLink = () => {
  const { history } = useRouter();
  return <Button onClick={() => history.go(-1)}>{`< volver`}</Button>;
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
getSelection;
