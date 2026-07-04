# LittleLoop Printables

LittleLoop Printables is a small open-source MVP for creating printable A4 daily reports and routine charts for preschools and childcare centres.

It includes three simple templates:

- Infant Daily Report
- Toddler Potty Training Daily Report
- Preschool Daily Report

Users can fill in the report, choose a friendly local theme, preview the A4 page, and print it or save it as a PDF from the browser print dialog.

The Daily Routine Chart includes editable blocks for:

- Infant
- Toddler
- Preschool
- Aftercare

## Tech Stack

- Next.js App Router
- TypeScript
- React local state
- Local SVG graphics

There is no database, authentication, paid API, or external image dependency.

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Then open the local URL shown in your terminal, usually:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

## Print or Save as PDF

1. Select Daily Report or Daily Routine Chart.
2. Fill in the editable fields or routine blocks.
3. Choose a theme.
4. Use the live A4 preview to check the layout.
5. Click **Print or Save PDF**.
6. In the browser print dialog, choose your printer or select **Save as PDF**.

The app includes print-safe CSS with an A4 page size and hides the editor controls during printing.

## Open-Source MVP

This project is intentionally small and beginner-friendly. It is designed as an open-source MVP that can be extended with more printable templates, themes, and layout options later.
