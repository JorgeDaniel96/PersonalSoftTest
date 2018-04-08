import React from "react";
import { View } from "react-native";
import Home from "~/src/components/home/home";
import renderer from "react-test-renderer";

it("Home render is correct", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
