import { HeaderDocsTop } from "@/feactures/docs/layout/HeaderDocsTop";
import tailwindClasses from "../../../../data";
import { ClassToRenderer } from "@/feactures/docs/layout/ClassToRederer";
import { dataResize, dataSize } from "./dataSize";

export default function SizeDimensionsPage() {
  return (
    <div className="flex flex-col gap-5">
      <HeaderDocsTop
        title="Dimensions"
        id="dimensions"
        Data={tailwindClasses.sizeDimensions.dimensions}
      ></HeaderDocsTop>
      <ClassToRenderer list={dataSize}></ClassToRenderer>

    


     
      <HeaderDocsTop
        title="Resize"
        id="resize"
        Data={tailwindClasses.sizeDimensions.resize}
      ></HeaderDocsTop>
      <ClassToRenderer list={dataResize}></ClassToRenderer>
    </div>
  );
}
