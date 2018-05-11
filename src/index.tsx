import { create } from "mobx-persist";
import { Provider } from "mobx-react";
import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import Stores from "./stores/index";

// jsx way to use window object
(window as any).stores = new Stores();
const stores = (window as any).stores;

// mobx-persist: Creating local storage as the choice to persist.
const hydrate = create({
  storage: localStorage
});



// Hydrate all persistables in each store
hydrate("Config", stores.config).then(a => {
  console.log(a);
});
hydrate("Runes", stores.rune).then(a => {
  console.log(a);
});

stores.rune.parseJson();

const rootEl = document.getElementById("root");

const Loadable = require("react-loadable");

const LoadableApp = Loadable({
  loader: () => import("./containers/App"),
  loading() {
    return <div>loading.....</div>;
  }
});

render(
  <Provider {...stores}>
    <AppContainer>
      <LoadableApp />
    </AppContainer>
  </Provider>,
  rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept("./containers/App", () => {
    const NewApp = require("./containers/App").default;

    render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      rootEl
    );
  });
}
