import React from "react";
import { mount } from "enzyme";
import { MessageList } from "./MessageList";

test("It should render", () => {
  mount(<MessageList />);
});
