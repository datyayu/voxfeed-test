import React from "react";
import { mount, shallow } from "enzyme";
import { MessageImpactSmallPin } from "./MessageImpactSmallPin";

test("It should render", () => {
  mount(
    <MessageImpactSmallPin className="test-class" number={3} text="test" />
  );
});

test("It should use the className passed as a prop", () => {
  const component = shallow(
    <MessageImpactSmallPin className="test-class" number={3} text="test" />
  );
  const element = component.find(".impact-small-pin").first();

  expect(element.hasClass("test-class")).toBe(true);
});

test("It should render the number passed as a prop", () => {
  const component = shallow(
    <MessageImpactSmallPin className="test-class" number={3} text="test" />
  );
  const element = component.find(".impact-small-pin__number").first();

  expect(element.text()).toBe("3");
});

test("It should render the text passed as a prop", () => {
  const component = shallow(
    <MessageImpactSmallPin className="test-class" number={3} text="test" />
  );
  const element = component.find(".impact-small-pin__text").first();

  expect(element.text()).toBe("test");
});
