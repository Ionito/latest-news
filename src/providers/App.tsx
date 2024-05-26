interface Props extends React.PropsWithChildren {}

export const AppProviders = ({ children }: Props): JSX.Element => {
  return <>{children}</>;
};
