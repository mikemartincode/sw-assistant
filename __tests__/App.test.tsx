import App from "../src/containers/App";
import React from "react";
import renderer from "react-test-renderer";

describe("Component: App", () => {
  it("should match its empty snapshot", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
