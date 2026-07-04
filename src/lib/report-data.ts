import type { ThemeName } from "@/components/graphics/ThemeDecorations";

export type TemplateId = "infant" | "toddler" | "preschool";
export type ThemeId = ThemeName;
export type PrintableType = "daily-report" | "routine-chart";
export type RoutineGroupId = "infant" | "toddler" | "preschool" | "aftercare";

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

export type RoutineBlock = {
  id: RoutineGroupId;
  label: string;
  placeholder: string;
};

export type RoutineValues = {
  title: string;
  date: string;
  blocks: Record<RoutineGroupId, string>;
};

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

export const routineBlocks: RoutineBlock[] = [
  {
    id: "infant",
    label: "Infant",
    placeholder: "Bottle, nappy, nap, tummy time, cuddle, outdoor stroll.",
  },
  {
    id: "toddler",
    label: "Toddler",
    placeholder: "Arrival, free play, snack, potty try, story, nap, art.",
  },
  {
    id: "preschool",
    label: "Preschool",
    placeholder: "Morning circle, learning focus, outdoor play, lunch, quiet time.",
  },
  {
    id: "aftercare",
    label: "Aftercare",
    placeholder: "Snack, homework or quiet activity, games, outdoor play, pickup.",
  },
];

export function createInitialRoutineValues(): RoutineValues {
  const today = new Date().toISOString().slice(0, 10);

  return {
    title: "Daily Routine Chart",
    date: today,
    blocks: {
      infant: "7:30 Arrival and cuddles\n8:00 Bottle or breakfast\n9:00 Nappy change and play\n10:00 Morning nap\n12:00 Lunch or bottle\n1:00 Rest and sensory play\n3:00 Snack, nappy check, and pickup notes",
      toddler: "7:30 Arrival and free play\n8:30 Breakfast or snack\n9:30 Potty try and outdoor play\n10:30 Story, music, or art\n12:00 Lunch\n1:00 Nap or quiet rest\n3:00 Snack, potty try, and pickup",
      preschool: "7:30 Arrival activities\n8:30 Morning circle\n9:00 Learning focus\n10:00 Outdoor play\n11:30 Lunch\n12:30 Rest or quiet time\n2:30 Creative play and story\n3:30 Pack up and pickup",
      aftercare: "2:30 Arrival from class\n3:00 Snack and check-in\n3:30 Homework or quiet table activity\n4:15 Group game or outdoor play\n5:00 Free play and pickup",
    },
  };
}
