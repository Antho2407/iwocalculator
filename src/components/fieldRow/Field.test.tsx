import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import FieldRow, { FieldRowProps } from "./FieldRow";

describe("<Field />", () => {
  let wrapper: ShallowWrapper<FieldRowProps>;

  describe("When the component is mounted", () => {
    it("should render successfully", () => {
      wrapper = shallow(<FieldRow label="test-label" info="test-info" />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
