import React from "react";
import { FieldRowRoot, Label, Info } from "./FieldRow.components";

export interface FieldRowProps {
  label: string;
  info: string;
}

const FieldRow: React.FC<FieldRowProps> = ({ label, info, children }) => {
  return (
    <FieldRowRoot>
      <Label>{label}</Label>
      {children}
      <Info>{info}</Info>
    </FieldRowRoot>
  );
};

export default FieldRow;
