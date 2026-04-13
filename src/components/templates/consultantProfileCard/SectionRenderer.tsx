import type { TemplateSection } from '../../../types/template'
import ProfileSection from "./sections/ProfileSection";
import SummarySection from "./sections/SummarySection";
import ContactSection from "./sections/ContactSection";
import ListSection from "./sections/ListSection";
import EngagementsSection from "./sections/EngagementSection";
import ExperienceSection from "./sections/ExperienceSection";

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