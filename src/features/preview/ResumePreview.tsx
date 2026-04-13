import { useResumeStore } from "../../store/useResumeStore.ts"
import ModernTemplate from "../../templates/ModernTemplate.tsx"

const ResumePreview = () => {
  const { resume } = useResumeStore()

  return <ModernTemplate resume={resume} />
}

export default ResumePreview