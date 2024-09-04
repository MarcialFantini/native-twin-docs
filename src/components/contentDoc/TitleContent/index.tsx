import { TitleProps } from "../../../../data";

export const TitleContent = ({ props }: { props: TitleProps }) => {
  return <h2>{props.text}</h2>;
};
