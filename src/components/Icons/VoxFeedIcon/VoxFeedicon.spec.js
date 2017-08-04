import React from "react";
import { mount, shallow } from "enzyme";
import { VoxFeedIcon } from "./VoxFeedIcon";

test("It should render", () => {
  mount(<VoxFeedIcon />);
});

test("It should not include the .active class if isActive prop is false", () => {
  const component = shallow(<VoxFeedIcon isActive={false} />);
  const element = component.find("path").first();

  expect(element.hasClass("active")).toBe(false);
});

test("It should include the .active class if isActive prop is true", () => {
  const component = shallow(<VoxFeedIcon isActive />);
  const element = component.find("path").first();

  expect(element.hasClass("active")).toBe(true);
});
