import * as _ from "lodash";
import { action, observable } from "mobx";
import { persist } from "mobx-persist";
import * as maps from "../Utils/mappings";
import { IRootStore } from "./index";

export interface ConfigStore {
  defaultWeights: Config["defaultWeights"];
  runeTypes: Config["runeTypes"];
  setWeights: Config["setWeights"];
}

export interface SetWeights {
  [index: string]: Config["defaultWeights"];
}

class Config {
  rootStore: IRootStore;
  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
    this.setDefaults();
  }

  // default stat weights
  @persist("object")
  @observable
  public defaultWeights = {
    flat_ATK: 0,
    flat_DEF: 0,
    flat_HP: 0,
    pct_HP: 1,
    pct_ATK: 1,
    pct_DEF: 1,
    SPD: 1.5,
    RES: 0,
    ACC: 1,
    CRate: 1.5,
    CDmg: 1.1
  };

  @persist("object")
  @observable
  runeTypes = {
    // todo: get feedback on if these are the correct types
    debuffDD: ["pct_ATK", "CRate", "CDmg", "ACC", "SPD"],
    defDD: ["pct_DEF", "CRate", "CDmg"],
    hpDD: ["pct_HP", "CRate", "CDmg", "SPD"],
    raidDef: ["pct_DEF", "pct_HP", "RES", "SPD"],
    rawDD: ["pct_ATK", "CRate", "CDmg"],
    spdDD: ["SPD", "CRate", "CDmg", "pct_ATK"],
    support: ["SPD", "ACC", "pct_HP", "pct_DEF"]
  };

  @persist("object")
  @observable
  public setWeights: SetWeights = {};

  /**
   * Initiates the setWeights object with default values for each set
   */
  @action.bound
  public setDefaults() {
    _.forIn(maps.rune.sets, (x: string) => {
      this.setWeights[x] = this.defaultWeights;
    });
  }
}

export default Config;
