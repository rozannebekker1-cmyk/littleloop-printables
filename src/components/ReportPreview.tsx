import { ThemeDecorations } from "@/components/graphics/ThemeDecorations";
import type { ReportTemplate, ReportValues, ThemeOption } from "@/lib/report-data";

type ReportPreviewProps = {
  template: ReportTemplate;
  theme: ThemeOption;
  values: ReportValues;
};

function formatPreviewValue(value: string) {
  return value.trim().length > 0 ? value : "\u00a0";
}

export function ReportPreview({ template, theme, values }: ReportPreviewProps) {
  return (
    <article className={`printablePage previewTheme-${theme.id}`}>
      <ThemeDecorations theme={theme.id} />
      <div className="printableContent">
        <header className="reportHeader">
          <p>LittleLoop Printables</p>
          <h2>{template.name}</h2>
          <span>{theme.name} Theme</span>
        </header>

        <div className="reportFields">
          {template.fields.map((field) => (
            <section
              className={field.type === "textarea" ? "previewField large" : "previewField"}
              key={field.id}
            >
              <h3>{field.label}</h3>
              <p>{formatPreviewValue(values[field.id] ?? "")}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
