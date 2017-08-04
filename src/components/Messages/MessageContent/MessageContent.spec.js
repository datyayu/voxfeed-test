import React from "react";
import { mount, shallow } from "enzyme";
import { MessageContent } from "./MessageContent";

const message = { image: "image.jpg", content: "test", date: "jun 2016" };

test("It should render", () => {
  mount(<MessageContent message={message} />);
});

test("It should render the avatar image", () => {
  const component = shallow(<MessageContent message={message} />);
  const image = component.find(".message-content__image").first();

  expect(image.prop("src")).toBe("image.jpg");
  expect(image.prop("alt")).toBe("test");
});
