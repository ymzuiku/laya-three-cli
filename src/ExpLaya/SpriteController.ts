export class SpriteController {
  sprite: Laya.Sprite;
  superSprite: Laya.Sprite;
  constructor(superSprite: Laya.Sprite) {
    this.superSprite = superSprite;
    this.sprite = new Laya.Sprite();
    this.superSprite.addChild(this.sprite);
  }
  public dispose() {
    this.sprite.removeChildren(0, this.sprite.numChildren);
    this.sprite.removeSelf();
    this.superSprite = undefined;
  }
}
