import { HeaderDocsTop } from "@/feactures/docs/layout/HeaderDocsTop";
import tailwindClasses from "../../../../data";

export default function AlignmentPosition() {
  return (
    <div className="flex flex-col gap-10">
      <HeaderDocsTop
        title="Alignment"
        id="alignment"
        Data={tailwindClasses.alignmentPositioning.alignment}
      ></HeaderDocsTop>
      <HeaderDocsTop
        title="Positioning"
        id="positioning"
        Data={tailwindClasses.alignmentPositioning.positioning}
      ></HeaderDocsTop>
    </div>
  );
}
