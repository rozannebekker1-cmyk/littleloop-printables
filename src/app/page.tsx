"use client";

import { useMemo, useState } from "react";
import { PrintButton } from "@/components/PrintButton";
import { PrintableTypeSelector } from "@/components/PrintableTypeSelector";
import { ReportForm } from "@/components/ReportForm";
import { ReportPreview } from "@/components/ReportPreview";
import { RoutineChartForm } from "@/components/RoutineChartForm";
import { RoutineChartPreview } from "@/components/RoutineChartPreview";
import { TemplateSelector } from "@/components/TemplateSelector";
import { ThemeSelector } from "@/components/ThemeSelector";
import {
  createInitialRoutineValues,
  createInitialReportValues,
  templates,
  themes,
  type PrintableType,
  type ReportValues,
  type RoutineGroupId,
  type RoutineValues,
  type TemplateId,
  type ThemeId,
} from "@/lib/report-data";

export default function Home() {
  const [printableType, setPrintableType] = useState<PrintableType>("daily-report");
  const [templateId, setTemplateId] = useState<TemplateId>("infant");
  const [theme, setTheme] = useState<ThemeId>("plain");
  const [reports, setReports] = useState<Record<TemplateId, ReportValues>>({
    infant: createInitialReportValues("infant"),
    toddler: createInitialReportValues("toddler"),
    preschool: createInitialReportValues("preschool"),
  });
  const [routine, setRoutine] = useState<RoutineValues>(createInitialRoutineValues);

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

  function updateRoutineBlock(blockId: RoutineGroupId, value: string) {
    setRoutine((currentRoutine) => ({
      ...currentRoutine,
      blocks: {
        ...currentRoutine.blocks,
        [blockId]: value,
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
          <PrintableTypeSelector selectedType={printableType} onChange={setPrintableType} />
          {printableType === "daily-report" ? (
            <TemplateSelector
              templates={templates}
              selectedTemplateId={templateId}
              onChange={setTemplateId}
            />
          ) : null}
          <ThemeSelector themes={themes} selectedThemeId={theme} onChange={setTheme} />
          {printableType === "daily-report" ? (
            <ReportForm
              template={selectedTemplate}
              values={values}
              onFieldChange={updateField}
            />
          ) : (
            <RoutineChartForm
              values={routine}
              onTitleChange={(title) =>
                setRoutine((currentRoutine) => ({ ...currentRoutine, title }))
              }
              onDateChange={(date) =>
                setRoutine((currentRoutine) => ({ ...currentRoutine, date }))
              }
              onBlockChange={updateRoutineBlock}
            />
          )}
        </aside>

        <section className="previewPanel" aria-label="A4 report preview">
          {printableType === "daily-report" ? (
            <ReportPreview
              template={selectedTemplate}
              theme={selectedTheme}
              values={values}
            />
          ) : (
            <RoutineChartPreview theme={selectedTheme} values={routine} />
          )}
        </section>
      </section>
    </main>
  );
}
