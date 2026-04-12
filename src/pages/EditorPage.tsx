import ResumeForm from "../features/personal-info/ResumeForm"
import ResumePreview from "../features/preview/ResumePreview"

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
          <ResumePreview />
        </div>
      </section>
    </div>
  )
}