import type { PrintableType } from "@/lib/report-data";

type PrintableTypeSelectorProps = {
  selectedType: PrintableType;
  onChange: (type: PrintableType) => void;
};

const options: { id: PrintableType; name: string }[] = [
  { id: "daily-report", name: "Daily Report" },
  { id: "routine-chart", name: "Daily Routine Chart" },
];

export function PrintableTypeSelector({
  selectedType,
  onChange,
}: PrintableTypeSelectorProps) {
  return (
    <fieldset className="controlGroup">
      <legend>Printable Type</legend>
      <div className="radioGrid twoColumn">
        {options.map((option) => (
          <label className="radioCard" key={option.id}>
            <input
              type="radio"
              name="printable-type"
              value={option.id}
              checked={selectedType === option.id}
              onChange={() => onChange(option.id)}
            />
            <span>{option.name}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
