import React from "react";
import { mount, shallow } from "enzyme";
import { MessageTooltip } from "./MessageTooltip";

test("It should render", () => {
  mount(<MessageTooltip text="This is a test" />);
});

test("It shouldn't include the popup if it isn't being hovered", () => {
  const component = shallow(<MessageTooltip text="This is a test" />);
  const matches = component.find(".message-tooltip__popup");

  expect(matches.length).toBe(0);
});

test("It shouldn't include the popup if it is being hovered", () => {
  const component = shallow(<MessageTooltip text="This is a test" />);
  const qmark = component.find(".message-tooltip__qmark");

  qmark.simulate("mouseenter");

  const matches = component.find(".message-tooltip__popup");

  expect(matches.length).toBe(1);
});

test("It shouldn't close the popup after the mouse leaves the question mark", () => {
  const component = shallow(<MessageTooltip text="This is a test" />);
  const qmark = component.find(".message-tooltip__qmark");

  qmark.simulate("mouseenter");
  qmark.simulate("mouseleave");

  const matches = component.find(".message-tooltip__popup");

  expect(matches.length).toBe(0);
});

test("It shouldn't include the text passed as a prop", () => {
  const component = shallow(<MessageTooltip text="This is a test" />);
  const qmark = component.find(".message-tooltip__qmark");

  qmark.simulate("mouseenter");

  const element = component.find(".message-tooltip__popup").first();

  expect(element.text()).toBe("This is a test");
});
