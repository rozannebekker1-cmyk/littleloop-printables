import type { ReportTemplate, ReportValues } from "@/lib/report-data";

type ReportFormProps = {
  template: ReportTemplate;
  values: ReportValues;
  onFieldChange: (fieldId: string, value: string) => void;
};

export function ReportForm({ template, values, onFieldChange }: ReportFormProps) {
  return (
    <section className="controlGroup">
      <h2>Report Details</h2>
      <div className="formGrid">
        {template.fields.map((field) => (
          <label className="fieldGroup" key={field.id}>
            <span>{field.label}</span>
            {field.type === "textarea" ? (
              <textarea
                value={values[field.id] ?? ""}
                placeholder={field.placeholder}
                onChange={(event) => onFieldChange(field.id, event.target.value)}
                rows={4}
              />
            ) : (
              <input
                type={field.type}
                value={values[field.id] ?? ""}
                placeholder={field.placeholder}
                onChange={(event) => onFieldChange(field.id, event.target.value)}
              />
            )}
          </label>
        ))}
      </div>
    </section>
  );
}
