export interface Resume {
  personalInfo: {
    fullName: string
    email: string
    phone: string
    linkedin: string
    summary: string
  }
  workExperiences: WorkExperience[]
  education: Education[]
  skills: Skill[]
}

export interface WorkExperience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string
  description: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  startDate: string
  endDate: string
}

export interface Skill {
  id: string
  name: string
  level: string
}