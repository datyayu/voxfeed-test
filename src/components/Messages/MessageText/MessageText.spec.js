import React from "react";
import { mount, shallow } from "enzyme";
import { MessageText } from "./MessageText";

test("It should render", () => {
  mount(<MessageText content="Hello world" />);
});

// Too many stuff to test on this component.
// Luckly this is a toy app so I don't need to do so ¯\_(ツ)_/¯.
