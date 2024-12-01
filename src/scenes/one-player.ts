import game from "../kaplayCtx";
import { drawGrid } from "../utils";
import { Player, Enemy, Ball } from "../entities";

export function onePlayer() {
  const player = new Player(game.width() - 40, "player");
  const enemy = new Enemy();
  const ball = new Ball();

  drawGrid();
}
