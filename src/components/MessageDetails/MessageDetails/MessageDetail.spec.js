import React from "react";
import { MockMessage } from "../../../types";
import { mount, shallow } from "enzyme";
import { MessageDetail } from "./MessageDetail";

test("It should render", () => {
  mount(<MessageDetail message={MockMessage} />);
});
