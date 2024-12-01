import game from "../kaplayCtx";

export function mainMenu() {
  game.add([
    game.text("PONG", { font: "mania", size: 172 }),
    game.pos(game.center().x, 300),
    game.anchor("center"),
  ]);

  game.add([
    game.text("(1) One Player", { font: "mania", size: 64 }),
    game.pos(game.center().x, 450),
    game.anchor("center"),
  ]);

  game.add([
    game.text("(2) Two Players", { font: "mania", size: 64 }),
    game.pos(game.center().x, 550),
    game.anchor("center"),
  ]);
}
