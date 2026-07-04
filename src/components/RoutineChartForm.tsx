import type { RoutineGroupId, RoutineValues } from "@/lib/report-data";
import { routineBlocks } from "@/lib/report-data";

type RoutineChartFormProps = {
  values: RoutineValues;
  onTitleChange: (value: string) => void;
  onDateChange: (value: string) => void;
  onBlockChange: (blockId: RoutineGroupId, value: string) => void;
};

export function RoutineChartForm({
  values,
  onTitleChange,
  onDateChange,
  onBlockChange,
}: RoutineChartFormProps) {
  return (
    <section className="controlGroup">
      <h2>Routine Blocks</h2>
      <div className="formGrid">
        <label className="fieldGroup">
          <span>Chart Title</span>
          <input value={values.title} onChange={(event) => onTitleChange(event.target.value)} />
        </label>
        <label className="fieldGroup">
          <span>Date</span>
          <input
            type="date"
            value={values.date}
            onChange={(event) => onDateChange(event.target.value)}
          />
        </label>
        {routineBlocks.map((block) => (
          <label className="fieldGroup" key={block.id}>
            <span>{block.label}</span>
            <textarea
              value={values.blocks[block.id]}
              placeholder={block.placeholder}
              onChange={(event) => onBlockChange(block.id, event.target.value)}
              rows={6}
            />
          </label>
        ))}
      </div>
    </section>
  );
}
