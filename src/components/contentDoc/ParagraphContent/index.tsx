import { ParagraphProps } from "../../../../data";

export const ParagraphContent = ({ props }: { props: ParagraphProps }) => {
  return <p>{props.text}</p>;
};
