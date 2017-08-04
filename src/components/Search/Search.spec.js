import React from "react";
import { mount, shallow } from "enzyme";
import { Search } from "./Search";

test("It should render", () => {
  mount(<Search />);
});

test("It should use the input value to the passed value as a prop", () => {
  const component = shallow(<Search value="test" />);
  const element = component.find("input").first();

  expect(element.prop("value")).toBe("test");
});

test("It should call the onChange prop when the input changes", () => {
  const spy = jest.fn();
  const component = mount(<Search onChange={spy} />);
  const element = component.find("input").first();

  element.simulate("change");

  expect(spy).toHaveBeenCalled();
});
