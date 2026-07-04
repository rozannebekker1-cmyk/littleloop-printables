import type { ThemeName } from "@/components/graphics/ThemeDecorations";

export type TemplateId = "infant" | "toddler" | "preschool";
export type ThemeId = ThemeName;

export type ReportField = {
  id: string;
  label: string;
  type: "text" | "date" | "textarea";
  placeholder?: string;
};

export type ReportTemplate = {
  id: TemplateId;
  name: string;
  fields: ReportField[];
};

export type ThemeOption = {
  id: ThemeId;
  name: string;
};

export type ReportValues = Record<string, string>;

const sharedStartFields: ReportField[] = [
  { id: "date", label: "Date", type: "date" },
  { id: "childName", label: "Child Name", type: "text", placeholder: "Avery" },
  {
    id: "myDayToday",
    label: "My Day Today",
    type: "textarea",
    placeholder: "A short note about mood, play, and care.",
  },
];

const sharedEndFields: ReportField[] = [
  {
    id: "importantNotes",
    label: "Important Notes",
    type: "textarea",
    placeholder: "Reminders, supplies, or things to share.",
  },
  {
    id: "medicinesAndIncidents",
    label: "Medicines and Incidents",
    type: "textarea",
    placeholder: "Medicine given, incidents, or none today.",
  },
];

export const templates: ReportTemplate[] = [
  {
    id: "infant",
    name: "Infant Daily Report",
    fields: [
      ...sharedStartFields,
      { id: "nappyChanges", label: "Nappy Changes", type: "textarea" },
      { id: "myMeals", label: "My Meals", type: "textarea" },
      { id: "myNaps", label: "My Naps", type: "textarea" },
      ...sharedEndFields,
    ],
  },
  {
    id: "toddler",
    name: "Toddler Potty Training Daily Report",
    fields: [
      ...sharedStartFields,
      { id: "pottyTries", label: "Potty Tries", type: "textarea" },
      { id: "successfulPotty", label: "Successful Potty", type: "textarea" },
      { id: "accidents", label: "Accidents", type: "textarea" },
      { id: "myMeals", label: "My Meals", type: "textarea" },
      { id: "myNap", label: "My Nap", type: "textarea" },
      ...sharedEndFields,
    ],
  },
  {
    id: "preschool",
    name: "Preschool Daily Report",
    fields: [
      ...sharedStartFields,
      { id: "activitiesEnjoyed", label: "Activities I Enjoyed", type: "textarea" },
      { id: "myMeals", label: "My Meals", type: "textarea" },
      { id: "restOrQuietTime", label: "Rest or Quiet Time", type: "textarea" },
      { id: "learningFocus", label: "Learning Focus", type: "textarea" },
      ...sharedEndFields,
    ],
  },
];

export const themes: ThemeOption[] = [
  { id: "plain", name: "Plain" },
  { id: "rainbow", name: "Rainbow" },
  { id: "farm", name: "Farm" },
  { id: "ocean", name: "Ocean" },
  { id: "space", name: "Space" },
  { id: "jungle", name: "Jungle" },
  { id: "polka-dots", name: "Polka Dots" },
  { id: "stripes", name: "Stripes" },
];

export function createInitialReportValues(templateId: TemplateId): ReportValues {
  const template = templates.find((item) => item.id === templateId) ?? templates[0];
  const today = new Date().toISOString().slice(0, 10);

  return Object.fromEntries(
    template.fields.map((field) => [field.id, field.id === "date" ? today : ""]),
  );
}
