import * as Debug from "debug";
import Config from "./Config";
import RuneList from "./Rune/RuneStore";
import UI from "./UI";

export interface IRootStore {
  rune: RuneList;
  ui: UI;
  config: Config;
  debug: any;
}

class RootStore implements IRootStore {
  rune: RuneList;
  ui: UI;
  config: Config;
  constructor() {
    this.debug = this.debug;
    this.rune = new RuneList(this);
    this.ui = new UI(this);
    this.config = new Config(this);
  }

  debug(text: string) {
    const tmp = Debug(text);
    Debug.enable(text);
    return tmp;
  }

  isDev = process.env.NODE_ENV === "development";
}

export default RootStore;
