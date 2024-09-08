import { HeaderDocsTop } from "@/feactures/docs/layout/HeaderDocsTop";
import tailwindClasses from "../../../../data";

export default function TextTypographyPage() {
  return (
    <div>
      <HeaderDocsTop
        title="Text Styles"
        id="textStyles"
        Data={tailwindClasses.textTypography.textStyles}
      ></HeaderDocsTop>
      <HeaderDocsTop
        title="Decoration And Color"
        id="decorationAndColor"
        Data={tailwindClasses.textTypography.decorationAndColor}
      ></HeaderDocsTop>
    </div>
  );
}
