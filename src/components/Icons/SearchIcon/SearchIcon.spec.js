import React from "react";
import { mount, shallow } from "enzyme";
import { SearchIcon } from "./SearchIcon";

test("It should render", () => {
  mount(<SearchIcon />);
});

test("It should use the className passed as a prop", () => {
  const component = shallow(<SearchIcon className="test" />);
  const element = component.find("svg").first();

  expect(element.hasClass("test")).toBe(true);
});
