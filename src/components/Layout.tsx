interface Props extends React.PropsWithChildren {}

export const Layout = ({ children }: Props): JSX.Element => {
  return <main>{children}</main>;
};
