import React from "react";
import { mount, shallow } from "enzyme";
import { LoadingError } from "./LoadingError";

test("It should render", () => {
  mount(<LoadingError />);
});
