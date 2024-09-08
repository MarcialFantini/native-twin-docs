import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Code = ({ codeString }: { codeString: string }) => {
  return (
    <div className=" rounded-lg overflow-hidden">
      <SyntaxHighlighter language="tsx" style={darcula}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};
