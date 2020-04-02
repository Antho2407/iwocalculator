import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Product, { ProductProps } from "./Product";
import { BL } from "./calculation";

describe("<Product />", () => {
  let wrapper: ShallowWrapper<ProductProps>;

  describe("When the component is mounted", () => {
    it("should render successfully", () => {
      wrapper = shallow(
        <Product
          label="test-label"
          amount={10000}
          duration={4}
          calculation={BL}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
