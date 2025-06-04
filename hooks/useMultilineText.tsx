import React, { useMemo } from "react";

type MultilineInput = string | string[] | undefined | null;

export function useMultilineText(
  textArray: MultilineInput[],
): React.JSX.Element[] {
  return useMemo(() => {
    return textArray.map((text, fieldIndex) => {
      const lines = Array.isArray(text) ? text : text?.split("\n") || [];

      return (
        <React.Fragment key={fieldIndex}>
          {lines.map((line, lineIndex) => (
            <React.Fragment key={lineIndex}>
              {line}
              {lineIndex < lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </React.Fragment>
      );
    });
  }, [textArray]);
}
