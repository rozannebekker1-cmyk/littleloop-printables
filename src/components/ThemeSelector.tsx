import type { ThemeId, ThemeOption } from "@/lib/report-data";

type ThemeSelectorProps = {
  themes: ThemeOption[];
  selectedThemeId: ThemeId;
  onChange: (themeId: ThemeId) => void;
};

export function ThemeSelector({ themes, selectedThemeId, onChange }: ThemeSelectorProps) {
  return (
    <section className="controlGroup">
      <h2>Theme</h2>
      <select
        className="themeSelect"
        value={selectedThemeId}
        onChange={(event) => onChange(event.target.value as ThemeId)}
      >
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
    </section>
  );
}
