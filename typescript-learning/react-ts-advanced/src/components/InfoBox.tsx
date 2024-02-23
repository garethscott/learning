import { type ReactNode } from "react";

interface InfoBoxProps {
  mode: "hint" | "warning";
  // If you have a component with a prop that isnt always required you can add a question mark after
  // the prop in the interface and it will be regarded as undefined, and the error will go away
  severity?: "low" | "medium" | "high";
  children: ReactNode;
}

export default function InfoBox({ mode, severity, children }: InfoBoxProps) {
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
