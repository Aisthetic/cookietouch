import Account from "@account";
import { sleep } from "@utils/Time";
import ScriptAction, { ScriptActionResults } from "../ScriptAction";

export default class NpcAction extends ScriptAction {
  public npcId: number;
  public actionIndex: number;

  constructor(npcId: number, actionIndex: number) {
    super();
    this.npcId = npcId;
    this.actionIndex = actionIndex;
  }

  public async process(account: Account): Promise<ScriptActionResults> {
    if (!account.game.npcs.useNpc(this.npcId, this.actionIndex)) {
      account.scripts.stopScript(`Error during a conversation with an NPC (npcId: ${this.npcId}, actionIndex: ${this.actionIndex})`);
      return ScriptAction.failedResult();
    }
    return ScriptAction.processingResult();
  }
}
