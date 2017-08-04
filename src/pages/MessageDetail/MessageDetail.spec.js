import React from "react";
import { mount, shallow } from "enzyme";
import { MessageDetailPageComponent } from "./MessageDetail";

test("It should render", () => {
  mount(<MessageDetailPageComponent />);
});

test("It should have the active class if show prop is true", () => {
  const component = shallow(<MessageDetailPageComponent show={true} />);
  const element = component.find(".message-detail-page").first();

  expect(element.hasClass("active")).toBe(true);
});
