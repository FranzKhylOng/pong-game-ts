import game from "../kaplayCtx";
import GameEntity from "./entity";

export class Ball extends GameEntity {
  constructor() {
    super(20, 20, game.width() / 2, "ball");
  }
}
