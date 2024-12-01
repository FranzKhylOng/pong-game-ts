import game from "../kaplayCtx";

export function drawGrid() {
  for (let i = 0; i < game.height(); i += 80) {
    game.add([game.rect(10, 40), game.pos(game.width() / 2, i)]);
  }
}
