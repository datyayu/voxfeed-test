import React from "react";
import { mount, shallow } from "enzyme";
import { LoadingAnimation } from "./LoadingAnimation";

test("It should render", () => {
  mount(<LoadingAnimation />);
});
