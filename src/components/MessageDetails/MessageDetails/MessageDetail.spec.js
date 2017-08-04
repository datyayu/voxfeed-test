import React from "react";
import { mount, shallow } from "enzyme";
import { MessageDetail } from "./MessageDetail";

test("It should render", () => {
  mount(<MessageDetail />);
});
