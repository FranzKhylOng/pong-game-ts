import { GameObj } from "kaplay";
import game from "../kaplayCtx";

export default class GameEntity {
  protected obj: GameObj;

  constructor(width: number, height: number, xPos: number, entityTag: string) {
    this.obj = game.add([
      game.rect(width, height),
      game.pos(xPos, game.height() / 2),
      game.area(),
      entityTag,
    ]);
  }

  getEntity() {
    return this.obj;
  }
}
