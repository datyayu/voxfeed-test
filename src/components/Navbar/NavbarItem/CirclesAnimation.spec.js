import React from "react";
import { mount, shallow } from "enzyme";
import { CirclesAnimation } from "./CirclesAnimation";

test("It should render", () => {
  mount(<CirclesAnimation />);
});

test("It should use the className passed as a prop", () => {
  const component = shallow(<CirclesAnimation className="test-class" />);
  const element = component.find("svg").first();

  expect(element.hasClass("test-class")).toBe(true);
});
