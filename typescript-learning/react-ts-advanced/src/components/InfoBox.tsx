import { type ReactNode } from "react";

// interface InfoBoxProps {
//   mode: "hint" | "warning";
//   // If you have a component with a prop that isnt always required you can add a question mark after
//   // the prop in the interface and it will be regarded as undefined, and the error will go away
//   severity?: "low" | "medium" | "high";
//   children: ReactNode;
// }

// Below is an example of using discriminate unions within a component, condition on using two different
// sets of props based on the mode prop 'hint' or 'warning'
type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props;

  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
