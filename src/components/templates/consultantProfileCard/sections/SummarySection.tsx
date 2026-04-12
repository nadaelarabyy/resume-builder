import { TemplateSection } from "@/types/template";

type Props = {
  section: TemplateSection;
};

export default function SummarySection({ section }: Props) {
  return (
    <div>
      <p className="text-sm leading-6 text-gray-800">
        {section.content?.text}
      </p>
    </div>
  );
}