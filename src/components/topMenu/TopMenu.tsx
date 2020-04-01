import React from "react";
import { TopMenuRoot } from "./TopMenu.components";
import FieldRow from "../fieldRow/FieldRow";
import { Input } from "../input/Input.components";

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
        <Input type="number" onChange={handleAmountChanged} value={amount} />
      </FieldRow>
      <FieldRow label="Amount requested" info="(in months)">
        <Input
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
