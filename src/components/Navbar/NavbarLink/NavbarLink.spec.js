import React from "react";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import { NavbarLink } from "./NavbarLink";

test("It should render", () => {
  mount(
    <MemoryRouter>
      <NavbarLink to="/test" />
    </MemoryRouter>
  );
});

test("It should use the url passed as a prop as a link", () => {
  const component = mount(
    <MemoryRouter>
      <NavbarLink to="/test" />
    </MemoryRouter>
  );
  const element = component.find(".navbar-link").first();

  expect(element.prop("href")).toBe("/test");
});

test("It should use the text passed as a prop as the label", () => {
  const component = mount(
    <MemoryRouter>
      <NavbarLink to="/test" text="test" />
    </MemoryRouter>
  );
  const element = component.find(".navbar-link__label").first();

  expect(element.text()).toBe("test");
});

test("It should render the child components", () => {
  const component = mount(
    <MemoryRouter>
      <NavbarLink to="/test">
        <div className="test-div" />
      </NavbarLink>
    </MemoryRouter>
  );
  const matches = component.find(".test-div");

  expect(matches).toHaveLength(1);
});
