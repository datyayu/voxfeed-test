import React from "react";
import { mount, shallow } from "enzyme";
import { MobileHeader } from "./MobileHeader";

test("It should render", () => {
  mount(<MobileHeader />);
});

test("It should render the text passed as the title prop", () => {
  const component = shallow(<MobileHeader title="test" />);
  const element = component.find(".header__title").first();

  expect(element.text()).toBe("test");
});

test("It should add the menu icon if the hasBack prop is false", () => {
  const component = mount(<MobileHeader hasBack={false} />);
  const menuIconMatches = component.find(".menu-icon").length;
  const backIconMatches = component.find(".back-button").length;

  expect(menuIconMatches).toBe(1);
  expect(backIconMatches).toBe(0);
});

test("It should add the back icon if the hasBack prop is true", () => {
  const component = mount(<MobileHeader hasBack={true} />);
  const menuIconMatches = component.find(".menu-icon").length;
  const backIconMatches = component.find(".back-button").length;

  expect(menuIconMatches).toBe(0);
  expect(backIconMatches).toBe(1);
});
