import React from "react";
import { MockMessage } from "../../../types";
import { mount, shallow } from "enzyme";
import { MessageDetailCampaign } from "./MessageDetailCampaign";

test("It should render", () => {
  mount(
    <MessageDetailCampaign
      campaignBrand="Test"
      campaignLogo="/src/logo.png"
      campaignName="test"
    />
  );
});

test("It should render the campaign logo as an image", () => {
  const component = shallow(
    <MessageDetailCampaign
      campaignBrand="Test"
      campaignLogo="/src/logo.png"
      campaignName="test"
    />
  );
  const image = component.find("img").first();

  expect(image.prop("src")).toBe("/src/logo.png");
  expect(image.prop("alt")).toBe("test logo");
});

test("It should render the campaign brand", () => {
  const component = shallow(
    <MessageDetailCampaign
      campaignBrand="Test"
      campaignLogo="/src/logo.png"
      campaignName="test"
    />
  );
  const element = component.find(".message-detail-campaign__brand").first();

  expect(element.text()).toBe("Test");
});

test("It should render the campaign name", () => {
  const component = shallow(
    <MessageDetailCampaign
      campaignBrand="Test"
      campaignLogo="/src/logo.png"
      campaignName="TEST"
    />
  );
  const element = component.find(".message-detail-campaign__name").first();

  expect(element.text()).toBe("Campaña TEST");
});
