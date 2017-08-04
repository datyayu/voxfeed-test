import React from "react";
import { mount, shallow } from "enzyme";
import { MessageClicksDescription } from "./MessageClicksDescription";

test("It should render", () => {
  mount(<MessageClicksDescription />);
});

test("It should include the .align-left class if alignLeft prop is true", () => {
  const component = shallow(<MessageClicksDescription alignLeft />);
  const element = component.find(".click-description").first();

  expect(element.hasClass("align-left")).toBe(true);
});

test("It should include the .top-on-mobile class if topOnMobile prop is true", () => {
  const component = shallow(<MessageClicksDescription topOnMobile />);
  const element = component.find(".click-description").first();

  expect(element.hasClass("top-on-mobile")).toBe(true);
});

test("It should include the number of clicks", () => {
  const component = shallow(<MessageClicksDescription clicks={42} />);

  expect(component.text()).toBe("42 ");
});

test("It should include the given text", () => {
  const component = shallow(<MessageClicksDescription text="Hello test" />);

  expect(component.text()).toBe(" Hello test");
});
