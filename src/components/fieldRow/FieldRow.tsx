import React from "react";
import { FieldRowRoot } from "./FieldRow.components";

export interface FieldRowProps {
  label: string;
  info: string;
}

const FieldRow: React.FC<FieldRowProps> = ({ label, info, children }) => {
  return (
    <FieldRowRoot>
      {label}
      {children}
      {info}
    </FieldRowRoot>
  );
};

export default FieldRow;
