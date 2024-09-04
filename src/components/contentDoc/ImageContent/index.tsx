import Image from "next/image";
import { ImageProps } from "../../../../data";

export const ImageContent = ({ props }: { props: ImageProps }) => {
  return <Image src={props.src} alt={props.alt}></Image>;
};
