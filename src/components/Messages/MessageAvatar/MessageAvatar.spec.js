import React from "react";
import { mount, shallow } from "enzyme";
import { MessageAvatar } from "./MessageAvatar";

test("It should render", () => {
  mount(<MessageAvatar username="test" avatar="/assets/avatar.jpg" />);
});

test("It should render the avatar image", () => {
  const component = shallow(
    <MessageAvatar username="test" avatar="/assets/avatar.jpg" />
  );
  const image = component.find(".message-avatar__image").first();

  expect(image.prop("src")).toBe("/assets/avatar.jpg");
  expect(image.prop("alt")).toBe("test");
});

test("It should render a badge if the message isn't read", () => {
  const component = shallow(
    <MessageAvatar username="test" avatar="/assets/avatar.jpg" read={false} />
  );
  const matches = component.find(".message-avatar__badge").length;

  expect(matches).toBe(1);
});

test("It shouldn't render a badge if the message was read", () => {
  const component = shallow(
    <MessageAvatar username="test" avatar="/assets/avatar.jpg" read={true} />
  );
  const matches = component.find(".message-avatar__badge").length;

  expect(matches).toBe(0);
});

test("It should render the campaign logo if a campaign is specified", () => {
  const component = shallow(
    <MessageAvatar
      username="test"
      avatar="/assets/avatar.jpg"
      campaign={{ name: "test campaign", logo: "logo.jpg" }}
    />
  );
  const element = component.find(".message-avatar__campaign").first();

  expect(element.prop("src")).toBe("logo.jpg");
  expect(element.prop("alt")).toBe("test campaign");
});
