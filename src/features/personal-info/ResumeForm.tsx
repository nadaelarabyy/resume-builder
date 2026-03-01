import { useResumeStore } from "../../store/useResumeStore"

const ResumeForm = () => {
  const { resume, updatePersonalInfo } = useResumeStore()

  const personalInfo = resume.personalInfo

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Personal Information</h2>

      <input
        className="border p-2 w-full"
        placeholder="Full Name"
        value={personalInfo.fullName}
        onChange={(e) =>
          updatePersonalInfo({ fullName: e.target.value })
        }
      />

      <input
        className="border p-2 w-full"
        placeholder="Email"
        value={personalInfo.email}
        onChange={(e) =>
          updatePersonalInfo({ email: e.target.value })
        }
      />

      <input
        className="border p-2 w-full"
        placeholder="Phone"
        value={personalInfo.phone}
        onChange={(e) =>
          updatePersonalInfo({ phone: e.target.value })
        }
      />

      <textarea
        className="border p-2 w-full"
        placeholder="Professional Summary"
        value={personalInfo.summary}
        onChange={(e) =>
          updatePersonalInfo({ summary: e.target.value })
        }
      />
    </div>
  )
}

export default ResumeForm