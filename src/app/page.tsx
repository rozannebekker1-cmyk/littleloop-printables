"use client";

import { useMemo, useState } from "react";
import { PrintButton } from "@/components/PrintButton";
import { ReportForm } from "@/components/ReportForm";
import { ReportPreview } from "@/components/ReportPreview";
import { TemplateSelector } from "@/components/TemplateSelector";
import { ThemeSelector } from "@/components/ThemeSelector";
import {
  createInitialReportValues,
  templates,
  themes,
  type ReportValues,
  type TemplateId,
  type ThemeId,
} from "@/lib/report-data";

export default function Home() {
  const [templateId, setTemplateId] = useState<TemplateId>("infant");
  const [theme, setTheme] = useState<ThemeId>("plain");
  const [reports, setReports] = useState<Record<TemplateId, ReportValues>>({
    infant: createInitialReportValues("infant"),
    toddler: createInitialReportValues("toddler"),
    preschool: createInitialReportValues("preschool"),
  });

  const selectedTemplate = useMemo(
    () => templates.find((template) => template.id === templateId) ?? templates[0],
    [templateId],
  );

  const selectedTheme = useMemo(
    () => themes.find((themeOption) => themeOption.id === theme) ?? themes[0],
    [theme],
  );

  const values = reports[templateId];

  function updateField(fieldId: string, value: string) {
    setReports((currentReports) => ({
      ...currentReports,
      [templateId]: {
        ...currentReports[templateId],
        [fieldId]: value,
      },
    }));
  }

  return (
    <main className="appShell">
      <section className="hero">
        <div>
          <p className="eyebrow">Open-source preschool printables</p>
          <h1>LittleLoop Printables</h1>
          <p className="tagline">Printable daily reports for little learners.</p>
        </div>
        <PrintButton />
      </section>

      <section className="workspace">
        <aside className="controlsPanel" aria-label="Report settings">
          <TemplateSelector
            templates={templates}
            selectedTemplateId={templateId}
            onChange={setTemplateId}
          />
          <ThemeSelector themes={themes} selectedThemeId={theme} onChange={setTheme} />
          <ReportForm
            template={selectedTemplate}
            values={values}
            onFieldChange={updateField}
          />
        </aside>

        <section className="previewPanel" aria-label="A4 report preview">
          <ReportPreview
            template={selectedTemplate}
            theme={selectedTheme}
            values={values}
          />
        </section>
      </section>
    </main>
  );
}
