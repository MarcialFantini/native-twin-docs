import { HeaderDocsTop } from "@/feactures/docs/layout/HeaderDocsTop";
import tailwindClasses from "../../../../data";

export default function ColorsBackgroundPage() {
  return (
    <div>
      <HeaderDocsTop
        title="Background and Border"
        Data={tailwindClasses.colorsBackground.background}
        id="background"
      ></HeaderDocsTop>
      <HeaderDocsTop
        title="Shadows and Z-index"
        id="shadowZIndex"
        Data={tailwindClasses.colorsBackground.shadowZIndex}
      ></HeaderDocsTop>
    </div>
  );
}
