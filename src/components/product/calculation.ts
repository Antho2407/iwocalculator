import moment from "moment";

export interface Tuple {
  repaymentDate: string;
  principal: number;
  interest: number;
  total: number;
}

export type Calculation = (
  amount: number,
  duration: number,
  rate: number
) => Tuple[];

/* Decided to leave the two calculations as separated even if they very similar, because future other repayments could potentially be completely different.
With more use cases though, we could try to extract some of the common patterns into functions */
export const RCF: Calculation = (
  amount: number,
  duration: number,
  rate: number
) => {
  let currentDate = moment();

  return [...Array(duration)].map((_, index) => {
    const principal = amount / duration;
    const interest = (amount - index * principal) * rate;
    const tuple = {
      repaymentDate: moment().format("l"),
      principal,
      interest,
      total: principal + interest,
    };

    currentDate = moment(currentDate).add(1, "M");

    return tuple;
  });
};

export const BL: Calculation = (
  amount: number,
  duration: number,
  rate: number
) => {
  let currentDate = moment();

  return [...Array(duration)].map((_, index) => {
    const principal = amount / duration;
    const interest =
      (amount - index * principal) * rate + (index === 0 ? amount * 0.1 : 0);
    const tuple = {
      repaymentDate: moment().format("l"),
      principal,
      interest,
      total: principal + interest,
    };
    currentDate = moment(currentDate).add(1, "M");

    return tuple;
  });
};
