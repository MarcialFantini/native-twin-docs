import { HeaderDocsTop } from "@/feactures/docs/layout/HeaderDocsTop";
import tailwindClasses from "../../../../data";

export default function AlignmentPosition() {
  return (
    <div className="flex flex-col gap-10">
      <HeaderDocsTop
        title="Align"
        Data={tailwindClasses.alignmentPositioning.alignment}
      ></HeaderDocsTop>
      <HeaderDocsTop
        title="Positioning"
        Data={tailwindClasses.alignmentPositioning.positioning}
      ></HeaderDocsTop>
    </div>
  );
}
