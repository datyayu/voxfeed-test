import React from "react";
import { mount, shallow } from "enzyme";
import { MessageDetailTitle } from "./MessageDetailTitle";

test("It should render", () => {
  mount(<MessageDetailTitle title="test" />);
});

test("It should include the title given as a prop", () => {
  const component = shallow(<MessageDetailTitle title="test" />);

  expect(component.text()).toBe("test");
});
