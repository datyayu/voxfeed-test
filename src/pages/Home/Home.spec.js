import React from "react";
import { mount } from "enzyme";
import { HomePageComponent } from "./Home";

test("It should render", () => {
  mount(<HomePageComponent />);
});

test("It should include a loading animation if the application is fetching", () => {
  const component = mount(<HomePageComponent isFetchingData={true} />);
  const matches = component.find(".loading-animation").length;

  expect(matches).toBe(1);
});

test("It shouldn't include a loading animation if the application isn't fetching", () => {
  const component = mount(<HomePageComponent isFetchingData={false} />);
  const matches = component.find(".loading-animation").length;

  expect(matches).toBe(0);
});

test("It should include a loading error if the application has an error", () => {
  const component = mount(<HomePageComponent fetchingError={true} />);
  const matches = component.find(".loading-error").length;

  expect(matches).toBe(1);
});

test("It shouldn't include a loading error if the application has no error", () => {
  const component = mount(<HomePageComponent fetchingError={false} />);
  const matches = component.find(".loading-error").length;

  expect(matches).toBe(0);
});
