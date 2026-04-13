import type { TemplateSection } from "../../../../types/template";

type Props = {
  section: TemplateSection;
};

export default function ListSection({ section }: Props) {
  const bulletSubsection = section.subsections?.find(
    (sub) => sub.type === "bullet_list"
  );

  const items = bulletSubsection?.content?.items || [];

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-[#c04a2f] border-b border-gray-200 pb-1">
        {section.title}
      </h3>

      <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
        {items.map((item: string, idx: number) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}