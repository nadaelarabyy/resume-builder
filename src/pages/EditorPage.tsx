import ResumeForm from "../features/personal-info/ResumeForm"
import ResumePreview from "../features/preview/ResumePreview"

export const EditorPage = () => {
  return (
    <div className="flex h-screen">
        <div className="w-1/2 overflow-y-auto p-6">
            <ResumeForm />
        </div>
        <div className="w-1/2 bg-gray-100 p-6">
            <ResumePreview />
        </div>
    </div>
  )
}