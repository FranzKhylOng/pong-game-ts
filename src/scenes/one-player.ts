import game from "../kaplayCtx";
import { drawGrid } from "../utils";
import { Player, Ball } from "../entities";

export function onePlayer() {
  game.add([game.rect(20, 100), game.pos(20, game.height() / 2), "enemy"]);

  const player = new Player(game.width() - 40, "player");
  const ball = new Ball();

  drawGrid();
}
