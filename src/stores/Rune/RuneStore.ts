import { action, observable } from "mobx";
import { persist } from "mobx-persist";
import { IRootStore } from "..";
//import { UnitList } from "../types";
import CalcModel from "./CalcModel";

class RuneList {
  rootStore: IRootStore;
  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
  }

  @persist("object")
  @observable
  Runes: CalcModel[] = [];

  @action.bound
  parseJson = (fileName: string) => {
    // empty Runes before starting
    this.Runes = [];
    debugger;
    const file = require("../../Utils/test.json");
    const unitList = file.unit_list;
    console.log(unitList);
    unitList.map(k => {
      console.log(k);
    });
    //  Object.values(unitList).map((k: UnitList) => {
    //  }
    //   if (k.runes.length > 0) {
    //     k.runes.map(a => {
    //       // Create instance of class CalcModel
    //       const calc = new CalcModel(
    //         a,
    //         this.rootStore.config,
    //         this.rootStore.debug("CalcModel")
    //       );
    //       // Add rune to the observable array Runes
    //       this.Runes.push(calc);
    //     });
    //   }
    // });
    // const runeList = file.runes;
    // Object.values(runeList).map((x: IUnparsedRune) => {
    //   const calc = new CalcModel(
    //     x,
    //     this.rootStore.config,
    //     this.rootStore.debug("CalcModel")
    //   );
    //   this.Runes.push(calc);
    // });
    // )
  };
}

export default RuneList;
