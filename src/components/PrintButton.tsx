"use client";

export function PrintButton() {
  return (
    <button className="printButton" type="button" onClick={() => window.print()}>
      Print or Save PDF
    </button>
  );
}
