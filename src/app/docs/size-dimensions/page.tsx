import { HeaderDocsTop } from "@/feactures/docs/layout/HeaderDocsTop";
import tailwindClasses from "../../../../data";

export default function SizeDimensionsPage() {
  return (
    <div>
      <HeaderDocsTop
        title="Dimensions"
        Data={tailwindClasses.sizeDimensions.dimensions}
      ></HeaderDocsTop>

      <HeaderDocsTop
        title="Resize"
        Data={tailwindClasses.sizeDimensions.resize}
      ></HeaderDocsTop>
    </div>
  );
}
