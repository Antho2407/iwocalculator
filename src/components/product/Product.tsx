import React, { useState } from "react";
import { ProductRoot, Label, Table } from "./Product.components";
import FieldRow from "../fieldRow/FieldRow";
import { Calculation, Tuple } from "./calculation";
import { Input } from "../input/Input.components";

export interface ProductProps {
  label: string;
  amount: number;
  duration: number;
  calculation: Calculation;
}

const Product: React.FC<ProductProps> = ({
  label,
  amount,
  duration,
  calculation,
}) => {
  const [rate, setRate] = useState(3);
  const handleRateChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRate(parseInt(e.target.value));
  };
  const tuples = calculation(amount, duration, rate);
  const getTotals = (tuples: Tuple[]) => {
    let principal = 0;
    let interest = 0;
    let total = 0;

    tuples.forEach((tuple) => {
      principal += tuple.principal;
      interest += tuple.interest;
      total += tuple.total;
    });

    return { principal, interest, total };
  };
  const totals = getTotals(tuples);
  const format = (number: number) => number.toFixed(2);

  return (
    <ProductRoot>
      <Label>{label}</Label>
      <FieldRow label="Interest rate" info="(in %)">
        <Input
          type="number"
          onChange={handleRateChanged}
          value={rate}
          min={0}
          max={100}
        />
      </FieldRow>
      <Table>
        <thead>
          <tr>
            <th>Repayment date</th>
            <th>Principal</th>
            <th>Interest</th>
            <th>Total repayment</th>
          </tr>
        </thead>
        <tbody>
          {tuples.map((tuple, index) => (
            <tr key={`tuple_${index}`}>
              <td>{tuple.repaymentDate}</td>
              <td>{format(tuple.principal)}</td>
              <td>{format(tuple.interest)}</td>
              <td>{format(tuple.total)}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{format(totals.principal)}</td>
            <td>{format(totals.interest)}</td>
            <td>{format(totals.total)}</td>
          </tr>
        </tbody>
      </Table>
    </ProductRoot>
  );
};

export default Product;
