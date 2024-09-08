import { SearchButton } from "@/components/SearchButton";
import tailwindClasses, { tailwindGlossary } from "../../../data";
import { SubTitle } from "@/feactures/docs/components/SubTitle";
import { Text } from "@/feactures/docs/components/Text";
import Link from "next/link";

export default function DocsPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const codeString = `
  interface Props {
    name: string;
  }

  const Greeting: React.FC<Props> = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
  };

  export default Greeting;
  `;

  return (
    <section className="py-[0px] grid grid-cols-4 gap-5">
      <div className=" col-span-1">
        <SearchButton></SearchButton>
        {Object.entries(tailwindGlossary).map(([key, item]) => {
          return (
            <div className="mb-5" key={key}>
              {/* Título principal de cada tema */}
              <SubTitle>{item.title}</SubTitle>
              <ul>
                {item.categories.map((category, index) => (
                  <li key={index}>
                    {/* Nombre de la categoría con la ruta correspondiente */}
                    <Link href={"/docs/" + category.route}>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className=" col-span-3">{children}</div>
    </section>
  );
}
