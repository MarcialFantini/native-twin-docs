import { TextProps } from "../../../../data";

export const TextContent = ({ props }: { props: TextProps }) => {
  return <p>{props.content}</p>;
};
