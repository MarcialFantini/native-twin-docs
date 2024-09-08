import { HeaderDocsTop } from "@/feactures/docs/layout/HeaderDocsTop";
import tailwindClasses from "../../../../data";

export default function TransformationsPage() {
  return (
    <div>
      <HeaderDocsTop
        title="Transform"
        Data={tailwindClasses.transformations.transform}
      ></HeaderDocsTop>
    </div>
  );
}
