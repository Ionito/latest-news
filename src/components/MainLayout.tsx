import { Footer, Header } from "@/components";

interface Props extends React.PropsWithChildren {}

export const MainLayout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
