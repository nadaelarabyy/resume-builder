import type { TemplateSection } from "../../../../types/template";

type Props = {
  section: TemplateSection;
};

export default function ExperienceSection({ section }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#c04a2f] border-b border-gray-200 pb-1">
        {section.title}
      </h3>

      {section.subsections?.map((exp) => (
        <div key={exp.id} className="space-y-2">
          <h4 className="font-semibold text-gray-900">{exp.title}</h4>

          <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
            {exp.content.descriptionBullets?.map((bullet: string, idx: number) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>

          <p className="text-sm">
            <span className="font-semibold">Tech Stack:</span>{" "}
            {exp.content.techStack?.join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}