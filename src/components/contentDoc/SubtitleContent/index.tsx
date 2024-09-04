import { SubtitleProps } from "../../../../data";

export const SubtitleContent = ({ props }: { props: SubtitleProps }) => {
  return <h3>{props.text}</h3>;
};
