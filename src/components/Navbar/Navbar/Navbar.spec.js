import React from "react";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import { Navbar } from "./Navbar";

const mockUser = { name: "test", avatarUrl: "/assets/test.jpg" };

test("It should render", () => {
  mount(
    <MemoryRouter>
      <Navbar user={mockUser} />
    </MemoryRouter>
  );
});

test("It should render even without a user", () => {
  mount(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
});

test("it should add the show-mobile class if the showOnMobile prop is true", () => {
  const component = mount(
    <MemoryRouter>
      <Navbar showOnMobile />
    </MemoryRouter>
  );
  const element = component.find(".navbar").first();

  expect(element.hasClass("show-mobile")).toBe(true);
});
