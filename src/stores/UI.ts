import { action, observable, toJS } from "mobx";
import CalcModel from "./Rune/CalcModel";
import { IRootStore } from "./index";

class UIStore {
  rootStore: IRootStore;
  @observable selectedRow: number | undefined;
  @observable selectedRune: CalcModel | undefined;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
  }

  @action.bound
  changeRow(index: number) {
    this.selectedRow = index;
  }

  @action.bound
  changeRune(rune) {
    this.selectedRune = toJS(rune);
  }
}

export default UIStore;
