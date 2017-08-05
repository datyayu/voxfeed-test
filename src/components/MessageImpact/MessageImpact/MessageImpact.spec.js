import React from "react";
import { mount, shallow } from "enzyme";
import { MockUser } from "../../../types";
import { MessageImpact } from "./MessageImpact";

test("It should render", () => {
  mount(<MessageImpact user={MockUser} retweets={10} replies={5} />);
});

test("It should render an image with the MockUser's avatar", () => {
  const component = shallow(
    <MessageImpact user={MockUser} retweets={10} replies={5} />
  );
  const image = component.find("img").first();

  expect(image.prop("src")).toBe(MockUser.avatarUrl);
  expect(image.prop("alt")).toBe(MockUser.name);
});
