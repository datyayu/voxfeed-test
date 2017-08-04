import React from "react";
import { mount, shallow } from "enzyme";
import { MenuIcon } from "./MenuIcon";

test("It should render", () => {
  mount(<MenuIcon />);
});

test("It should use the className passed as a prop", () => {
  const component = shallow(<MenuIcon className="test" />);
  const element = component.find("svg").first();

  expect(element.hasClass("test")).toBe(true);
});

test("It should call the onClick prop when clicked", () => {
  const spy = jest.fn();
  const component = shallow(<MenuIcon onClick={spy} />);
  component.simulate("click");

  expect(spy).toHaveBeenCalled();
});
