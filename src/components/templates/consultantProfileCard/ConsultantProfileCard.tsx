import { ConsultantProfileTemplate, TemplateSection } from "@/types/template";
import { SectionRenderer } from "./SectionRenderer";

type Props = {
  template: ConsultantProfileTemplate;
};

export default function ConsultantProfileCard({ template }: Props) {
  const getColumnSections = (column: 1 | 2 | 3): TemplateSection[] =>
    template.sections
      .filter((section) => section.column === column)
      .sort((a, b) => a.order - b.order);

  const col1 = getColumnSections(1);
  const col2 = getColumnSections(2);
  const col3 = getColumnSections(3);

  return (
    <div className="w-full max-w-[1400px] mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
      <div className="grid grid-cols-12 min-h-[900px]">
        {/* Column 1 */}
        <div className="col-span-3 bg-[#f6ddd3] p-6 space-y-6 border-r border-gray-200">
          {col1.map((section) => (
            <SectionRenderer key={section.id} section={section} />
          ))}
        </div>

        {/* Column 2 */}
        <div className="col-span-4 p-6 space-y-6 border-r border-gray-200">
          {col2.map((section) => (
            <SectionRenderer key={section.id} section={section} />
          ))}
        </div>

        {/* Column 3 */}
        <div className="col-span-5 p-6 space-y-6">
          {col3.map((section) => (
            <SectionRenderer key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}