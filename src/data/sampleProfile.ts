import type { ConsultantProfileTemplate } from "../types/template";

export const sampleProfile: ConsultantProfileTemplate = {
  templateType: "consultant_profile_card",
  metadata: {
    lastUpdated: "11/2025",
    theme: "pwc",
    companyLogo: "/logos/pwc.svg",
    companyName: "PwC",
  },
  layout: {
    columns: 3,
    columnWidths: [30, 30, 40],
  },
  sections: [
    {
      id: "profile-header",
      title: "Profile",
      type: "profile",
      column: 1,
      order: 1,
      content: {
        profileImage: "/profiles/nada.png",
        name: "Nada Mahmoud",
        role: "Custom Dev - Fullstack",
        level: "Senior Associate",
      },
    },
    {
      id: "professional-summary",
      title: "Summary",
      type: "summary",
      column: 1,
      order: 2,
      content: {
        text: "Results-driven full-stack software engineer with experience delivering scalable solutions across software, automotive, and logistics domains.",
      },
    },
    {
      id: "contact-details",
      title: "Contact Details",
      type: "contact",
      column: 1,
      order: 3,
      subsections: [
        {
          id: "email",
          type: "key_value",
          content: { label: "Email", value: "nada@example.com" },
        },
        {
          id: "phone",
          type: "key_value",
          content: { label: "Phone", value: "+20 1000000000" },
        },
      ],
    },
    {
      id: "areas-of-expertise",
      title: "Areas of Expertise",
      type: "list",
      column: 2,
      order: 1,
      subsections: [
        {
          id: "expertise-items",
          type: "bullet_list",
          content: {
            items: ["Backend", "Frontend", "System Design", "Optimization"],
          },
        },
      ],
    },
    {
      id: "primary-skills",
      title: "Primary Technical Skill Set",
      type: "list",
      column: 2,
      order: 2,
      subsections: [
        {
          id: "primary-skill-items",
          type: "bullet_list",
          content: {
            items: ["C", "Python", "Node.js"],
          },
        },
      ],
    },
    {
      id: "engagements",
      title: "Engagements",
      type: "engagements",
      column: 3,
      order: 1,
      subsections: [
        {
          id: "engagement-1",
          title: "PwC UK (Tax LoS)",
          type: "engagement_item",
          content: {
            descriptionBullets: [
              "Owned full-stack development for the Tax LoS Document Insights platform.",
              "Integrated document intelligence-based field extraction and surfaced insights.",
            ],
            techStack: ["Node.js", "React", "Python", "PostgreSQL"],
            startDate: "11/2025",
            endDate: "Current",
          },
        },
      ],
    },
    {
      id: "experience",
      title: "Experience",
      type: "experience",
      column: 3,
      order: 2,
      subsections: [
        {
          id: "exp-bosta",
          title: "Bosta",
          type: "experience_item",
          content: {
            descriptionBullets: [
              "Developed scalable backend services for shipment features.",
              "Optimized system performance and deployment flow.",
            ],
            techStack: ["Node.js", "Express", "Redis", "MongoDB", "MySQL", "GCP"],
          },
        },
      ],
    },
  ],
};