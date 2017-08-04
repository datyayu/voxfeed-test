import React from "react";
import { mount, shallow } from "enzyme";
import { DashboardIcon } from "./DashboardIcon";

test("It should render", () => {
  mount(<DashboardIcon />);
});

test("It should not include the .active class if isActive prop is false", () => {
  const component = shallow(<DashboardIcon isActive={false} />);
  const element = component.find("g").first();

  expect(element.hasClass("active")).toBe(false);
});

test("It should include the .active class if isActive prop is true", () => {
  const component = shallow(<DashboardIcon isActive />);
  const element = component.find("g").first();

  expect(element.hasClass("active")).toBe(true);
});
