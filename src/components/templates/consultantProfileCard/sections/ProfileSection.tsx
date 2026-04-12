import { TemplateSection } from "@/types/template";

type Props = {
  section: TemplateSection;
};

export default function ProfileSection({ section }: Props) {
  const { profileImage, name, role, level } = section.content || {};

  return (
    <div className="space-y-4">
      <div className="flex justify-start">
        <img src="/logos/pwc.svg" alt="Company Logo" className="h-10 object-contain" />
      </div>

      <div className="flex justify-center">
        <img
          src={profileImage}
          alt={name}
          className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
        />
      </div>

      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#c04a2f]">{name}</h1>
        <p className="text-lg font-medium text-gray-800">{role}</p>
        <p className="text-md text-gray-600">{level}</p>
      </div>
    </div>
  );
}