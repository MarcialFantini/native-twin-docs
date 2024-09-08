import { HeaderDocsTop } from "@/feactures/docs/layout/HeaderDocsTop";
import tailwindClasses from "../../../../data";

export default function TextTypographyPage() {
  return (
    <div>
      <HeaderDocsTop
        title="Text Styles"
        Data={tailwindClasses.textTypography.textStyles}
      ></HeaderDocsTop>
      <HeaderDocsTop
        title="Decoration And Color"
        Data={tailwindClasses.textTypography.decorationAndColor}
      ></HeaderDocsTop>
    </div>
  );
}
