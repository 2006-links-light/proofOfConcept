import 'phaser'

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  create() {
    this.scene.launch('BgScene');
    this.scene.launch('FgScene');
    // << LOAD BACKGROUND AND FOREGROUND SCENES IN PARALLEL HERE >>
  }
}
