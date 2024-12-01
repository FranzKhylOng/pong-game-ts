import game from "../kaplayCtx";
import GameEntity from "./entity";

export class Player extends GameEntity {
  constructor(xPos: number, entityTag: string) {
    super(20, 150, xPos, entityTag);
    this.setControls();
  }

  setControls() {
    game.onButtonDown("player2Up", () => {
      this.obj.move(0, -500);
    });

    game.onButtonDown("player2Down", () => {
      this.obj.move(0, 500);
    });
  }
}
