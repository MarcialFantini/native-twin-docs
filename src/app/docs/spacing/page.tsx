import { HeaderDocsTop } from "@/feactures/docs/layout/HeaderDocsTop";
import tailwindClasses from "../../../../data";

export default function SpacingPage() {
  return (
    <div className="flex flex-col gap-5">
      <HeaderDocsTop
        title="Padding and Margin"
        id="paddingMargin"
        Data={tailwindClasses.spacing.paddingMargin}
      ></HeaderDocsTop>

      <HeaderDocsTop
        title="Gap"
        id="gap"
        Data={tailwindClasses.spacing.gap}
      ></HeaderDocsTop>
    </div>
  );
}
