import React from "react";
import { mount } from "enzyme";
import { MessagesPageComponent } from "./Messages";

test("It should render", () => {
  mount(<MessagesPageComponent />);
});

test("It should include a loading animation if the application is fetching", () => {
  const component = mount(<MessagesPageComponent isFetchingData={true} />);
  const matches = component.find(".loading-animation").length;

  expect(matches).toBe(1);
});

test("It shouldn't include a loading animation if the application isn't fetching", () => {
  const component = mount(<MessagesPageComponent isFetchingData={false} />);
  const matches = component.find(".loading-animation").length;

  expect(matches).toBe(0);
});

test("It should include a loading error if the application has an error", () => {
  const component = mount(<MessagesPageComponent fetchingError={true} />);
  const matches = component.find(".loading-error").length;

  expect(matches).toBe(1);
});

test("It shouldn't include a loading error if the application has no error", () => {
  const component = mount(<MessagesPageComponent fetchingError={false} />);
  const matches = component.find(".loading-error").length;

  expect(matches).toBe(0);
});
