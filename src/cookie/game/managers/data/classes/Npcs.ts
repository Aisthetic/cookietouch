import Data from "../Data";

export default class Npcs extends Data {
  public dialogMessages: number[][];
  public dialogReplies: number[][];
  public actions: number[];
  public actionsName: string[];
  public gender: number;
  public look: string;
  public animFunList: object[];
}
