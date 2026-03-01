import type { Resume } from "../types/resume"

interface Props {
  resume: Resume
}

const ModernTemplate = ({ resume }: Props) => {
  const { personalInfo } = resume

  return (
    <div className="bg-white shadow-lg p-8 rounded-md">
      <h1 className="text-3xl font-bold">
        {personalInfo.fullName || "Your Name"}
      </h1>

      <p className="text-gray-600">
        {personalInfo.email}
      </p>

      <p className="mt-4">
        {personalInfo.summary}
      </p>
    </div>
  )
}

export default ModernTemplate