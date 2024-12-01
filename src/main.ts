import game from "./kaplayCtx";
import { mainMenu } from "./scenes";

game.loadFont("mania", "../fonts/mania.ttf");
game.scene("mainMenu", mainMenu);

game.go("mainMenu");
