import Image from "next/image";
import { config, ContentType } from "../../data";

export default function Home() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {config.map((section, index) => (
        <div key={index} className="mb-6 p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">{section.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Properties</h3>
              <ul className="list-disc pl-5">
                {section.properties.map((prop, idx) => (
                  <li key={idx} className="text-gray-700">
                    <span className="font-medium">{prop.name}:</span> Web -{" "}
                    {prop.web ? "✓" : "✗"}, Native - {prop.native ? "✓" : "✗"}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Content</h3>
              {section.content.map((item, idx) => (
                <div key={idx} className="mb-2">
                  {item.type === ContentType.Paragraph && (
                    <p className="text-gray-600">{item.content}</p>
                  )}
                  {/* Agrega otros tipos de contenido aquí si es necesario */}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
