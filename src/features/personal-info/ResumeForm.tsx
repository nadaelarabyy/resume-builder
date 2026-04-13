import { useResumeStore } from "../../store/useResumeStore.ts"

const ResumeForm = () => {
  const { resume, updatePersonalInfo } = useResumeStore()

  const personalInfo = resume.personalInfo

  return (
    <form className="resume-form" onSubmit={(e) => e.preventDefault()}>
      <h2>Personal Information</h2>

      <label>
        <div className="label">Full name</div>
        <input
          className="input"
          placeholder="Full name"
          value={personalInfo.fullName}
          onChange={(e) => updatePersonalInfo({ fullName: e.target.value })}
        />
      </label>

      <label>
        <div className="label">Email</div>
        <input
          className="input"
          type="email"
          placeholder="you@example.com"
          value={personalInfo.email}
          onChange={(e) => updatePersonalInfo({ email: e.target.value })}
        />
      </label>

      <label>
        <div className="label">Phone</div>
        <input
          className="input"
          placeholder="(555) 555-5555"
          value={personalInfo.phone}
          onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
        />
      </label>

      <label>
        <div className="label">LinkedIn</div>
        <input
          className="input"
          placeholder="https://linkedin.com/in/yourname"
          value={personalInfo.linkedin}
          onChange={(e) => updatePersonalInfo({ linkedin: e.target.value })}
        />
      </label>

      <label>
        <div className="label">Professional summary</div>
        <textarea
          className="input textarea"
          placeholder="A short summary about you"
          value={personalInfo.summary}
          onChange={(e) => updatePersonalInfo({ summary: e.target.value })}
        />
      </label>
    </form>
  )
}

export default ResumeForm