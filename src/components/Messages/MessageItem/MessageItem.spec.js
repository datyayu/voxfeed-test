import React from "react";
import { mount, shallow } from "enzyme";
import { MockMessage } from "../../../types";
import { MemoryRouter } from "react-router";
import { MessageItem } from "./MessageItem";

const message = {
  id: 2,
  image: "image.jpg",
  content: "test",
  date: "jun 2016"
};

test("It should render", () => {
  mount(
    <MemoryRouter>
      <MessageItem message={MockMessage} />
    </MemoryRouter>
  );
});

test("It should link to /messages/:id", () => {
  const component = mount(
    <MemoryRouter>
      <MessageItem message={MockMessage} />
    </MemoryRouter>
  );
  const element = component.find("a").first();

  expect(element.prop("href")).toBe(`/messages/${MockMessage.id}`);
});
