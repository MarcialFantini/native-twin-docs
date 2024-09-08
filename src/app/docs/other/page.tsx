import { HeaderDocsTop } from "@/feactures/docs/layout/HeaderDocsTop";
import tailwindClasses from "../../../../data";

export default function OtherPage() {
  return (
    <div>
      <HeaderDocsTop
        title="Visibility"
        Data={tailwindClasses.others.visibility}
        id="visibility"
      ></HeaderDocsTop>
      <HeaderDocsTop
        title="Object Properties"
        Data={tailwindClasses.others.objectProperties}
        id="objectProperties"
      ></HeaderDocsTop>
    </div>
  );
}
