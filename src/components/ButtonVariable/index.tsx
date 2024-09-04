import { Button } from "../ui/button";

export const ButtonVariable = ({ text }: { text: string }) => {
  return <Button className=" bg-primary">{text}</Button>;
};
