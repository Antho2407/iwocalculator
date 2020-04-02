import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import TopMenu, { TopMenuProps } from "./TopMenu";

describe("<TopMenu />", () => {
  let wrapper: ShallowWrapper<TopMenuProps>;

  describe("When the component is mounted", () => {
    it("should render successfully", () => {
      wrapper = shallow(
        <TopMenu
          onAmountChanged={() => {}}
          onDurationChanged={() => {}}
          amount={1000}
          duration={4}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
