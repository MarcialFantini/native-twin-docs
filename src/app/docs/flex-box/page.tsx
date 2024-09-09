import { HeaderDocsTop } from "@/feactures/docs/layout/HeaderDocsTop";
import tailwindClasses from "../../../../data";
import { SubTitle } from "@/feactures/docs/components/SubTitle";
import { Text } from "@/feactures/docs/components/Text";
import { Code } from "@/feactures/docs/components/Code";

export default function FlexboxPage() {
  return (
    <div className="flex flex-col gap-5">
      <HeaderDocsTop
        title="Flex"
        Data={tailwindClasses.flexbox.flexProperties}
        id="flexProperties"
      ></HeaderDocsTop>
      <SubTitle>Flex</SubTitle>
      <Text>
        Use flex-initial to allow a flex item to shrink but not grow, taking
        into account its initial size:
      </Text>
      <SubTitle>Flex-1</SubTitle>
      <Text>
        Use flex-1 to allow a flex item to grow and shrink as needed, ignoring
        its initial size:
      </Text>
      <Code
        codeString={`<div class="flex">
  <div class="flex-none w-14 ...">
    01
  </div>
  <div class="flex-1 w-64 ...">
    02
  </div>
  <div class="flex-1 w-32 ...">
    03
  </div>
</div>`}
      ></Code>
      <SubTitle>{`Flex-{cols}`}</SubTitle>
      <Text>
        Use flex-1 to allow a flex item to grow and shrink as needed, ignoring
        its initial size:
      </Text>
      <Code
        codeString={`<div class="flex">
  <div class="flex-none w-14 ...">
    01
  </div>
  <div class="flex-1 w-64 ...">
    02
  </div>
  <div class="flex-1 w-32 ...">
    03
  </div>
</div>`}
      ></Code>

      <SubTitle>{`flex-{direction}`}</SubTitle>
      <Code
        codeString={`<div class="flex flex-row ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>`}
      ></Code>
    </div>
  );
}
