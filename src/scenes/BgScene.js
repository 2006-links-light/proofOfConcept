import 'phaser';

export default class BgScene extends Phaser.Scene {
  constructor() {
    super('BgScene');
  }

  preload() {
    // Preload Sprites
    this.load.image('sky', 'assets/sprites/football-pitch.png');
    // << LOAD SPRITE HERE >>
  }

  create() {
    // Create Sprites
    this.add.image(0, 0, 'sky').setOrigin(0).setScale(.8);
    // << CREATE SPRITE HERE >>
  }
}
