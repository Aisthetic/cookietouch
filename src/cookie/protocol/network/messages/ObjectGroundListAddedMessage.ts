import Message from "./Message";

export default class ObjectGroundListAddedMessage extends Message {
  public cells: number[];
  public referenceIds: number[];

  constructor(cells: number[], referenceIds: number[]) {
    super();
    this.cells = cells;
    this.referenceIds = referenceIds;

  }
}
