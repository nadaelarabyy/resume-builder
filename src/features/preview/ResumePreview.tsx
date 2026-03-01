import { useResumeStore } from "../../store/useResumeStore"
import ModernTemplate from "../../templates/ModernTemplate"

const ResumePreview = () => {
  const { resume } = useResumeStore()

  return <ModernTemplate resume={resume} />
}

export default ResumePreview