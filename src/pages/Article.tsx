import { useParams } from "@tanstack/react-router";

interface Props {}

export const Article = ({}: Props): JSX.Element => {
  const { id } = useParams({ from: "/article/$id" });
  return <div>Article id {id}</div>;
};
