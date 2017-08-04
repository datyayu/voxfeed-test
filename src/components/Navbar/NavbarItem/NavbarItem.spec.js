import React from "react";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import { NavbarItem } from "./NavbarItem";

const TestIcon = () => <div />;

test("It should render", () => {
  mount(
    <MemoryRouter>
      <NavbarItem Icon={TestIcon} linkTo="/test" text="test" />
    </MemoryRouter>
  );
});
