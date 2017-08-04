import React from "react";
import { mount } from "enzyme";
import { MessagesPageComponent } from "./Messages";

test("It should render", () => {
  mount(<MessagesPageComponent />);
});
