import * as _ from "lodash";
import * as maps from "../../Utils/mappings";
import { Rune } from "../types";

const uuid = require("uuid/v4");

let runeID = 0;


class RuneModel {
  prefix_eff_string: any;
  prefix_eff_value: any;
  upgrade_curr: number;
  sec_eff: _.Dictionary<number>[];
  pri_eff_value: number;
  location: string;
  id: number;
  extra: string;
  key: number;
  slot: number;
  rank: string;
  set_id: string;
  pri_eff_string: string;

  constructor(rune: Rune) {
    // Todo: find the current quality
    this.location = maps.rune.occupied[rune.occupied_type];
    this.id = runeID;
    this.extra = maps.rune.quality[rune.extra];
    this.key = uuid();
    this.slot = rune.slot_no;
    this.rank = maps.rune.quality[rune.class];
    this.set_id = maps.rune.sets[rune.set_id];
    this.pri_eff_string = maps.rune.effectTypes[rune.pri_eff[0]];
    this.pri_eff_value = rune.pri_eff[1];
    // If there is a prefix map it otherwise return null
    this.prefix_eff_string =
      rune.prefix_eff.length > 0
        ? maps.rune.effectTypes[rune.prefix_eff[0]]
        : null;
    this.prefix_eff_value =
      rune.prefix_eff.length > 0
        ? maps.rune.effectTypes[rune.prefix_eff[1]]
        : null;
    this.set_id = maps.rune.sets[rune.set_id];
    this.upgrade_curr = rune.upgrade_curr;
    this.sec_eff = rune.sec_eff.map(x => {
      const statRef = x;
      statRef[0] = maps.rune.effectTypes[x[0]];
      // Convert each array into an object
      const statObj = _.zipObject(
        [
          "sec_stat",
          "base_value",
          "enchanted",
          "grindstone_value",
          "total_value"
        ],
        [
          statRef[0],
          statRef[1],
          statRef[2],
          statRef[3],
          statRef[1] + statRef[3] // total value is the base value plus the grinded value
        ]
      );
      return statObj;
    });
    // Increase the index by 1
    runeID += 1;
  }
}

export default RuneModel;
