import type { ReportTemplate, TemplateId } from "@/lib/report-data";

type TemplateSelectorProps = {
  templates: ReportTemplate[];
  selectedTemplateId: TemplateId;
  onChange: (templateId: TemplateId) => void;
};

export function TemplateSelector({
  templates,
  selectedTemplateId,
  onChange,
}: TemplateSelectorProps) {
  return (
    <section className="controlGroup">
      <h2>Template</h2>
      <div className="radioGrid">
        {templates.map((template) => (
          <label className="radioCard" key={template.id}>
            <input
              type="radio"
              name="template"
              value={template.id}
              checked={selectedTemplateId === template.id}
              onChange={() => onChange(template.id)}
            />
            <span>{template.name}</span>
          </label>
        ))}
      </div>
    </section>
  );
}
