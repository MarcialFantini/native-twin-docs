import { TableCompatibility } from "@/components/TableCompatibility";

import { TailwindClass } from "../../../Interface/tailwindClass";

export const CategorySection = (Data: TailwindClass[]) => {
  return (
    <section>
      <TableCompatibility Data={Data}></TableCompatibility>{" "}
    </section>
  );
};
