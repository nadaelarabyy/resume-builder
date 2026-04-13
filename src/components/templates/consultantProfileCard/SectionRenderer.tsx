import type { TemplateSection } from '../../../types/template.ts'
import ProfileSection from "./sections/ProfileSection.tsx";
import SummarySection from "./sections/SummarySection.tsx";
import ContactSection from "./sections/ContactSection.tsx";
import ListSection from "./sections/ListSection.tsx";
import EngagementsSection from "./sections/EngagementSection.tsx";
import ExperienceSection from "./sections/ExperienceSection.tsx";

type Props = {
  section: TemplateSection;
};

export function SectionRenderer({ section }: Props) {
  switch (section.type) {
    case "profile":
      return <ProfileSection section={section} />;
    case "summary":
      return <SummarySection section={section} />;
    case "contact":
      return <ContactSection section={section} />;
    case "list":
      return <ListSection section={section} />;
    case "engagements":
      return <EngagementsSection section={section} />;
    case "experience":
      return <ExperienceSection section={section} />;
    default:
      return null;
  }
}