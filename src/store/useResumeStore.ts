import { create } from 'zustand'
import type { Resume } from '../types/resume'

interface ResumeState {
  resume: Resume
  updatePersonalInfo: (data: Partial<Resume['personalInfo']>) => void
}

export const useResumeStore = create<ResumeState>((set) => ({
  resume: {
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      linkedin: '',
      summary: ''
    },
    workExperiences: [],
    education: [],
    skills: []
  },
  updatePersonalInfo: (data) =>
    set((state) => ({
      resume: {
        ...state.resume,
        personalInfo: { ...state.resume.personalInfo, ...data }
      }
    }))
}))