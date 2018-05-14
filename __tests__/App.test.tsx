import React from "react";
import renderer from "react-test-renderer";
import App from "../src/containers/App";

describe("Component: App", () => {
  it("should match its empty snapshot", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
