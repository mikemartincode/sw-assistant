
export interface SummonerData {
  command: string;
  ret_code: number;
  unit_list: UnitList[];
  runes: Rune[];
}

export interface UnitList {
  unit_id: number;
  wizard_id: number;
  island_id: number;
  pos_x: number;
  pos_y: number;
  building_id: number;
  unit_master_id: number;
  unit_level: number;
  class: number;
  con: number;
  atk: number;
  def: number;
  spd: number;
  resist: number;
  accuracy: number;
  critical_rate: number;
  critical_damage: number;
  experience: number;
  exp_gained: number;
  exp_gain_rate: number;
  skills: number[][];
  runes: Rune[];
  costume_master_id: number;
  trans_items: any[] | TransItems<string>;
  attribute: number;
  create_time: string;
  source: number;
  homunculus: number;
  homunculus_name: string;
}

export interface TransItems<T> {
  T: Transmog;
}

export interface Transmog {
  wizard_id: number;
  trans_item_id: number;
  item_master_id: number;
  occupied_id: number;
  source: number;
}

export interface Rune {
  rune_id: number;
  wizard_id: number;
  occupied_type: number;
  occupied_id: number;
  slot_no: number;
  rank: number;
  class: number;
  set_id: number;
  upgrade_limit: number;
  upgrade_curr: number;
  base_value: number;
  sell_value: number;
  pri_eff: number[];
  prefix_eff: number[];
  sec_eff: number[][];
  extra: number;
}
