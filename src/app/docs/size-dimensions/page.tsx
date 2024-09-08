import { HeaderDocsTop } from "@/feactures/docs/layout/HeaderDocsTop";
import tailwindClasses from "../../../../data";

export default function SizeDimensionsPage() {
  return (
    <div>
      <HeaderDocsTop
        title="Dimensions"
        id="dimensions"
        Data={tailwindClasses.sizeDimensions.dimensions}
      ></HeaderDocsTop>

      <HeaderDocsTop
        title="Resize"
        id="resize"
        Data={tailwindClasses.sizeDimensions.resize}
      ></HeaderDocsTop>
    </div>
  );
}
