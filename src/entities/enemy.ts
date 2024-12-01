import GameEntity from "./entity";

export class Enemy extends GameEntity {
  constructor() {
    super(20, 150, 20, "enemy");
  }

  chaseBall(yPos: number) {
    if (this.obj.y < yPos) {
      this.obj.move(0, 500);
    } else if (this.obj.y > yPos) {
      this.obj.move(0, -500);
    }
  }
}
