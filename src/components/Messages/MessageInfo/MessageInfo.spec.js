import React from "react";
import { mount, shallow } from "enzyme";
import { MessageInfo } from "./MessageInfo";

test("It should render", () => {
  mount(<MessageInfo />);
});

test("It should render the date", () => {
  const component = shallow(<MessageInfo date="20 jun" />);
  const text = component.text();

  expect(text).toMatch("20 jun");
});

test("It should render the username", () => {
  const component = shallow(<MessageInfo username="test user" />);
  const text = component.text();

  expect(text).toMatch("test user");
});

test("It should render the campaign name", () => {
  const component = shallow(<MessageInfo campaignName="test campaign" />);
  const text = component.text();

  expect(text).toMatch("test campaign");
});
