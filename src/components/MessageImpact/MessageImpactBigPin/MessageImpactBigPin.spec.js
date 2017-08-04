import React from "react";
import { mount, shallow } from "enzyme";
import { MessageImpactBigPin } from "./MessageImpactBigPin";

test("It should render", () => {
  mount(<MessageImpactBigPin />);
});

test("It should use the className passed as a prop", () => {
  const component = shallow(<MessageImpactBigPin className="test-class" />);
  const element = component.find(".impact-big-pin").first();

  expect(element.hasClass("test-class")).toBe(true);
});

test("It should render the number passed as a prop", () => {
  const component = shallow(<MessageImpactBigPin number={3} />);
  const element = component.find(".impact-big-pin__number").first();

  expect(element.text()).toBe("3");
});

test("It should render the text passed as a prop", () => {
  const component = shallow(<MessageImpactBigPin text="test" />);
  const element = component.find(".impact-big-pin__text").first();

  expect(element.text()).toBe("test");
});
