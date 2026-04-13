import type { TemplateSection } from "../../../../types/template.ts";

type Props = {
  section: TemplateSection;
};

export default function EngagementsSection({ section }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#c04a2f] border-b border-gray-200 pb-1">
        {section.title}
      </h3>

      {section.subsections?.map((engagement) => (
        <div key={engagement.id} className="space-y-2">
          <h4 className="font-semibold text-gray-900">{engagement.title}</h4>

          <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
            {engagement.content.descriptionBullets?.map((bullet: string, idx: number) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>

          <p className="text-sm">
            <span className="font-semibold">Tech Stack:</span>{" "}
            {engagement.content.techStack?.join(", ")}
          </p>

          <p className="text-sm text-gray-600">
            {engagement.content.startDate} - {engagement.content.endDate}
          </p>
        </div>
      ))}
    </div>
  );
}