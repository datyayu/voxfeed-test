import React from "react";
import { mount } from "enzyme";
import { HomePageComponent } from "./Home";

test("It should render", () => {
  mount(<HomePageComponent />);
});
