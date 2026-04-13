import ResumeForm from "../features/personal-info/ResumeForm.tsx"
import ProfilePreviewPage from "./ProfilePreviewPage.tsx"

export const EditorPage = () => {
  return (
    <div className="editor-page">
      <aside className="editor-left">
        <div className="editor-left-inner">
          <ResumeForm />
        </div>
      </aside>

      <section className="editor-right">
        <div className="preview-frame">
          {/* <ResumePreview /> */}
          <ProfilePreviewPage />
        </div>
      </section>
    </div>
  )
}