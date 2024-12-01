import kaplay, { KAPLAYCtx } from "kaplay";
import { gameWidth, gameHeight } from "./config";

class Game {
  private game: KAPLAYCtx;

  constructor() {
    this.game = kaplay({
      width: gameWidth,
      height: gameHeight,
      letterbox: true, //scale the canvas to fit the window while maintaining aspect ratio
      background: [0, 0, 0],
      global: false,
      buttons: {
        jump: {
          keyboard: ["space"],
          mouse: "left",
        },
        player1Up: {
          keyboard: ["w"],
        },
        player2Up: {
          keyboard: ["up"],
        },
        player1Down: {
          keyboard: ["s"],
        },
        player2Down: {
          keyboard: ["down"],
        },
        one: {
          keyboard: ["1"],
        },
        two: {
          keyboard: ["2"],
        },
      },
      debugKey: "d",
      debug: true,
    });
  }

  getInstance(): KAPLAYCtx {
    return this.game;
  }

  // Add any additional methods to interact with the game instance if needed
}

const gameInstance = new Game().getInstance();
export default gameInstance;
