import React from "react";
import { mount, shallow } from "enzyme";
import { MessageImpactPinLine } from "./MessageImpactPinLine";

test("It should render", () => {
  mount(<MessageImpactPinLine />);
});

test("It should use the className passed as a prop", () => {
  const component = shallow(<MessageImpactPinLine className="test-class" />);
  const element = component.find(".impact-pin-line").first();

  expect(element.hasClass("test-class")).toBe(true);
});

test("It should use the line className passed as a prop", () => {
  const component = shallow(
    <MessageImpactPinLine lineClassName="test-class" />
  );
  const element = component.find(".impact-pin-line__line").first();

  expect(element.hasClass("test-class")).toBe(true);
});
