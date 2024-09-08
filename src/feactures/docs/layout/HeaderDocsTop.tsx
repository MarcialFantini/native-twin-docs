import { TailwindClass } from "../../../../data";
import { TableCompatibility } from "../components/TableCompatibility";
import { Title } from "../components/Title";

export const HeaderDocsTop = ({
  Data,
  title,
}: {
  Data: TailwindClass[];
  title: string;
}) => {
  return (
    <>
      <Title>{title}</Title>
      <TableCompatibility Data={Data}></TableCompatibility>
    </>
  );
};
