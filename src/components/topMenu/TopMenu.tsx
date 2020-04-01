import React from "react";
import { TopMenuRoot } from "./TopMenu.components";
import FieldRow from "../fieldRow/FieldRow";

export interface TopMenuProps {
  onAmountChanged: (value: number) => void;
  onDurationChanged: (value: number) => void;
  amount: number;
  duration: number;
}

const TopMenu: React.FC<TopMenuProps> = ({
  onAmountChanged,
  onDurationChanged,
  amount,
  duration,
}) => {
  const handleAmountChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    onAmountChanged(parseInt(e.target.value));
  };
  const handleDurationChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDurationChanged(parseInt(e.target.value));
  };

  return (
    <TopMenuRoot>
      <FieldRow label="Amount requested" info="(in £)">
        <input type="number" onChange={handleAmountChanged} value={amount} />
      </FieldRow>
      <FieldRow label="Amount requested" info="(in months)">
        <input
          type="number"
          min={0}
          step={1}
          onChange={handleDurationChanged}
          value={duration}
        />
      </FieldRow>
    </TopMenuRoot>
  );
};

export default TopMenu;
