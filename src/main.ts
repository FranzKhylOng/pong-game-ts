import game from "./kaplayCtx";
import { mainMenu, onePlayer } from "./scenes";

game.loadFont("mania", "../fonts/mania.ttf");
game.scene("mainMenu", mainMenu);
game.scene("onePlayer", onePlayer);

game.go("mainMenu");
