import React from "react";
import { mount, shallow } from "enzyme";
import { MockMessage } from "../../../types";
import { MessageContent } from "./MessageContent";

const message = { image: "image.jpg", content: "test", date: "jun 2016" };

test("It should render", () => {
  mount(<MessageContent message={MockMessage} />);
});

test("It should render the avatar image", () => {
  const component = shallow(<MessageContent message={MockMessage} />);
  const image = component.find(".message-content__image").first();

  expect(image.prop("src")).toBe(MockMessage.image);
  expect(image.prop("alt")).toBe(MockMessage.content);
});
