import React from "react";
import { mount, shallow } from "enzyme";
import { NavbarUser } from "./NavbarUser";

const mockUser = { name: "test", avatarUrl: "/assets/test.jpg" };

test("It should render", () => {
  mount(<NavbarUser user={mockUser} />);
});

test("It should use the input value to the passed value as a prop", () => {
  const component = shallow(<NavbarUser user={mockUser} />);
  const element = component.find(".navbar-user__image").first();

  expect(element.prop("alt")).toBe("test");
  expect(element.prop("src")).toBe("/assets/test.jpg");
});

test("It should set the number of notifications", () => {
  const component = shallow(<NavbarUser user={mockUser} notifications={10} />);
  const element = component.find(".navbar-user__badge").first();

  expect(element.text()).toBe("10");
});

test("It shouldn't show the notification badge if there's 0 notifications", () => {
  const component = shallow(<NavbarUser user={mockUser} notifications={0} />);
  const matches = component.find(".navbar-user__badge");

  expect(matches).toHaveLength(0);
});
