import game from "../kaplayCtx";
import { drawGrid } from "../utils";

export function onePlayer() {
  game.add([game.rect(20, 100), game.pos(20, game.height() / 2), "enemy"]);
  game.add([
    game.rect(20, 100),
    game.pos(game.width() - 40, game.height() / 2),
    "player",
  ]);

  drawGrid();
}
