import { SpriteController } from '../ExpLaya';

export class Main extends SpriteController {
  constructor(superScene: Laya.Sprite) {
    super(superScene);

    const label = new Laya.Text();
    label.text = 'Hello LayaAir';
    label.color = '#000';
    label.pos(300, 500);
    label.fontSize = 50;
    this.sprite.addChild(label);

    const img = new Laya.Image();
    img.skin = 'comp/button.png';
    img.pos(250, 700);
    img.scale(2, 2);
    this.sprite.addChild(img);
  }
}
