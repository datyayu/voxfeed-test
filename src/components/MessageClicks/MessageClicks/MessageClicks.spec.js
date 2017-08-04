import React from "react";
import { mount, shallow } from "enzyme";
import { MessageClicks } from "./MessageClicks";

test("It should render", () => {
  mount(<MessageClicks />);
});

test("unique bar should have the proper height ratio", () => {
  const component = shallow(<MessageClicks total={10} unique={5} />);
  const uniqueBar = component.find(".message-clicks__unique").first();

  // Full size is 200px, so 50% should be 100px
  expect(uniqueBar.prop("style")).toEqual({ height: "100px" });
});

test("payed bar should have the proper height ratio", () => {
  const component = shallow(<MessageClicks total={10} payed={3} />);
  const payedBar = component.find(".message-clicks__payed").first();

  // Full size is 200px, so 30% should be 60px
  expect(payedBar.prop("style")).toEqual({ height: "60px" });
});
