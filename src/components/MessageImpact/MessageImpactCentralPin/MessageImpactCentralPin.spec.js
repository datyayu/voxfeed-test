import React from "react";
import { mount, shallow } from "enzyme";
import { MessageImpactCentralPin } from "./MessageImpactCentralPin";

test("It should render", () => {
  mount(<MessageImpactCentralPin />);
});

test("It should use the className passed as a prop", () => {
  const component = shallow(<MessageImpactCentralPin className="test-class" />);
  const element = component.find(".impact-central-pin").first();

  expect(element.hasClass("test-class")).toBe(true);
});

test("It should render the number passed as a prop", () => {
  const component = shallow(<MessageImpactCentralPin number={3} />);
  const element = component.find(".impact-central-pin__number").first();

  expect(element.text()).toBe("3");
});

test("It should render the text passed as a prop", () => {
  const component = shallow(<MessageImpactCentralPin text="test" />);
  const element = component.find(".impact-central-pin__text").first();

  expect(element.text()).toBe("test");
});
