import { HeaderDocsTop } from "@/feactures/docs/layout/HeaderDocsTop";
import tailwindClasses from "../../../../data";

export default function FlexboxPage() {
  return (
    <div className="flex flex-col gap-5">
      <HeaderDocsTop
        title="Flex"
        Data={tailwindClasses.flexbox.flexProperties}
      ></HeaderDocsTop>
    </div>
  );
}
