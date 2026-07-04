import { ThemeDecorations } from "@/components/graphics/ThemeDecorations";
import type { RoutineValues, ThemeOption } from "@/lib/report-data";
import { routineBlocks } from "@/lib/report-data";

type RoutineChartPreviewProps = {
  theme: ThemeOption;
  values: RoutineValues;
};

function formatRoutine(value: string) {
  return value.trim().length > 0 ? value : "\u00a0";
}

export function RoutineChartPreview({ theme, values }: RoutineChartPreviewProps) {
  return (
    <article className={`printablePage previewTheme-${theme.id}`}>
      <ThemeDecorations theme={theme.id} />
      <div className="printableContent">
        <header className="reportHeader">
          <p>LittleLoop Printables</p>
          <h2>{values.title || "Daily Routine Chart"}</h2>
          <span>{values.date || "Date"} · {theme.name} Theme</span>
        </header>

        <div className="routineGrid">
          {routineBlocks.map((block) => (
            <section className="routineBlock" key={block.id}>
              <h3>{block.label}</h3>
              <p>{formatRoutine(values.blocks[block.id])}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
