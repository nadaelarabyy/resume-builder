export type SectionType =
  | "profile"
  | "summary"
  | "contact"
  | "list"
  | "engagements"
  | "experience"
  | "certifications"
  | "custom";

export type SubsectionType =
  | "text"
  | "bullet_list"
  | "key_value"
  | "tag_list"
  | "engagement_item"
  | "experience_item"
  | "certification_badge";

export type TemplateSubsection = {
  id: string;
  title?: string;
  type: SubsectionType;
  content: Record<string, any>;
};

export type TemplateSection = {
  id: string;
  title: string;
  type: SectionType;
  column: 1 | 2 | 3;
  order: number;
  icon?: string;
  content?: Record<string, any>;
  subsections?: TemplateSubsection[];
};

export type ConsultantProfileTemplate = {
  templateType: "consultant_profile_card";
  metadata: {
    lastUpdated: string;
    theme: string;
    companyLogo?: string;
    companyName?: string;
  };
  layout: {
    columns: 3;
    columnWidths: [number, number, number];
  };
  sections: TemplateSection[];
};