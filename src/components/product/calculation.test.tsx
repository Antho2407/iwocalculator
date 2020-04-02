import { RCF, BL } from "./calculation";

// This will ensure tests produce consistent current dates
jest.mock("moment", () => {
  return () => jest.requireActual("moment")("2020-04-01T00:00:00.000Z");
});

describe("Given some calculation utils", () => {
  afterAll(() => jest.resetAllMocks());

  describe("and an RCF calculation is used for repayment", () => {
    it("should return the expected tuples", () => {
      const expectedTuples = [
        {
          interest: 300,
          principal: 2500,
          repaymentDate: "04/01/2020",
          total: 2800,
        },
        {
          interest: 225,
          principal: 2500,
          repaymentDate: "05/01/2020",
          total: 2725,
        },
        {
          interest: 150,
          principal: 2500,
          repaymentDate: "06/01/2020",
          total: 2650,
        },
        {
          interest: 75,
          principal: 2500,
          repaymentDate: "07/01/2020",
          total: 2575,
        },
      ];
      expect(RCF(10000, 4, 3)).toEqual(expectedTuples);
    });

    describe("and a BL calculation is used for repayment", () => {
      it("should return the expected tuples", () => {
        const expectedTuples = [
          {
            interest: 1300,
            principal: 2500,
            repaymentDate: "04/01/2020",
            total: 3800,
          },
          {
            interest: 225,
            principal: 2500,
            repaymentDate: "05/01/2020",
            total: 2725,
          },
          {
            interest: 150,
            principal: 2500,
            repaymentDate: "06/01/2020",
            total: 2650,
          },
          {
            interest: 75,
            principal: 2500,
            repaymentDate: "07/01/2020",
            total: 2575,
          },
        ];
        expect(BL(10000, 4, 3)).toEqual(expectedTuples);
      });
    });
  });
});
