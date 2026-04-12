import type { Resume } from "../types/resume"

interface Props {
  resume: Resume
}

const ModernTemplate = ({ resume }: Props) => {
  const { personalInfo } = resume

  return (
    <div className="modern-template">
      <header className="mt-header">
        <h1 className="mt-name">{personalInfo.fullName || "Your Name"}</h1>

        <div className="mt-contacts">
          {personalInfo.email && (
            <span className="mt-contact">{personalInfo.email}</span>
          )}
          {personalInfo.phone && (
            <span className="mt-contact">{personalInfo.phone}</span>
          )}
          {personalInfo.linkedin && (
            <a
              className="mt-contact mt-link"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {personalInfo.linkedin.replace(/^https?:\/\//, "")}
            </a>
          )}
        </div>
      </header>

      <hr className="mt-sep" />

      <section className="mt-summary">
        <p>{personalInfo.summary}</p>
      </section>
    </div>
  )
}

export default ModernTemplate