import type { TemplateSection } from "../../../../types/template.ts";

type Props = {
  section: TemplateSection;
};

export default function ContactSection({ section }: Props) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-[#c04a2f]">{section.title}</h3>

      {section.subsections?.map((item) => (
        <div key={item.id} className="text-sm">
          <span className="font-medium">{item.content.label}: </span>
          <span className="text-gray-700">{item.content.value}</span>
        </div>
      ))}
    </div>
  );
}