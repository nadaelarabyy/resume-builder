import ConsultantProfileCard from "../components/templates/consultantProfileCard/ConsultantProfileCard";
import { sampleProfile } from "../data/sampleProfile";

export default function ProfilePreviewPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <ConsultantProfileCard template={sampleProfile} />
    </div>
  );
}