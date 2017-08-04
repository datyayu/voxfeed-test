import React from "react";
import { mount, shallow } from "enzyme";
import { MessageImpact } from "./MessageImpact";

test("It should render", () => {
  const user = { name: "test", avatarUrl: "/assets/test.jpg" };
  mount(<MessageImpact user={user} />);
});

test("It should render an image with the user's avatar", () => {
  const user = { name: "test", avatarUrl: "/assets/test.jpg" };
  const component = shallow(<MessageImpact user={user} />);
  const image = component.find("img").first();

  expect(image.prop("src")).toBe("/assets/test.jpg");
  expect(image.prop("alt")).toBe("test");
});
