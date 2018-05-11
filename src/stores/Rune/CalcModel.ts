import { IDebugger } from "debug";
//import * as _ from "lodash";
import { ConfigStore } from "../Config";
import { Rune } from "../types";
import RuneModel from "./RuneModel";

export interface TypeValues {
  total: number;
}

class CalcModel extends RuneModel {
  log: IDebugger;
  // maxWeightValue: number;
  // maxWeightKey: string;
  logger: IDebugger;
  runeTypeValues: TypeValues | void;
  constructor(rune: Rune, configStore: ConfigStore, logger: IDebugger) {
    super(rune);
    this.log = logger;
    const { runeTypes, setWeights } = configStore;
    const objTypes = runeTypes;
    this.runeTypeValues = this.CalculateWeights(this, objTypes, setWeights);
    //  this.maxWeightValue = _.max(_.valuesIn(this.runeTypeValues.total));
    //  this.maxWeightKey = _.max(_.keysIn(this.runeTypeValues.total));
  }

  CalculateWeights = (
    data: RuneModel,
    types: ConfigStore["runeTypes"],
    setWeights: ConfigStore["setWeights"]
  ) => {};
  //     const obj = {}; // create return object
  //     // loop through each stat on the runeInstance
  //     data.sec_eff.map(runeInstance => {
  //       const calc = runeInstance;
  //       _.forEach(types, (value, key) => {
  //         const stat = calc.sec_stat;
  //         const match = _.indexOf(value, stat); //
  //         // if it didnt return -1 (no match)
  //         if (match >= 0) {
  //           // Get the current setWeights for the set of the rune
  //           const currentWeights = setWeights[data.set_id];
  //           if (!obj.total) obj.total = {};
  //           if (!obj[key]) {
  //             obj[key] = {}; // initialize obj[key] to also be an object;
  //             obj.total[key] = 0; // initialize total and its type into a number to perform math +=
  //           }
  //           const calculation = _.round(
  //             calc.base_value * currentWeights[stat],
  //             1
  //           );
  //           obj[key][stat] = calculation; // set the runes weight score
  //           obj.total[key] += calculation; // add the runes weight score to the type total
  //         }
  //         return obj;
  //       });
  //       return obj;
  //     });
  //     return obj;
  //   };

  //   GetMatches = Stats => {
  //     const matches = {};
  //     _.keys(this.types).map(x => {
  //       if (x !== "matches") {
  //         matches[x] = _.intersection(Stats, this.types[x]).length;
  //       }
  //     });
  //     return matches;
  //   };
}

export default CalcModel;


