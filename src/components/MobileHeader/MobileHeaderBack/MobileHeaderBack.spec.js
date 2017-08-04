import React from "react";
import { mount, shallow } from "enzyme";
import { MobileHeaderBack } from "./MobileHeaderBack";

test("It should render", () => {
  mount(<MobileHeaderBack />);
});

test("It should add the className passed as a prop", () => {
  const component = shallow(<MobileHeaderBack className="test-class" />);
  const element = component.find(".back-button").first();

  expect(element.hasClass("test-class")).toBe(true);
});

test("It should call the onClick prop when clicked", () => {
  const spy = jest.fn();
  const component = shallow(<MobileHeaderBack onClick={spy} />);
  const element = component.find(".back-button").first();

  element.simulate("click");

  expect(spy).toHaveBeenCalled();
});
