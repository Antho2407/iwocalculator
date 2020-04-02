import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "./App";

describe("<App />", () => {
  let wrapper: ShallowWrapper;

  describe("When the component is mounted", () => {
    it("should render successfully", () => {
      wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
