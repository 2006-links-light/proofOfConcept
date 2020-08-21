import Player from '../entity/player.js'
import Ground from '../entity/ground.js'
import Ball from '../entity/ball.js'
import Player2 from '../entity/player2.js'
import { db } from '../config/fire'


export default class FgScene extends Phaser.Scene {
  constructor() {
    super('FgScene');
  }

  preload() {
    // Preload Sprites
    // << LOAD SPRITES HERE >>
    this.load.image('ground', 'assets/sprites/ground.png');
    this.load.image('ball', 'assets/sprites/SoccerBall.png');

    this.load.spritesheet('josh', 'assets/sprites/red.png', {
      frameWidth: 340,
      frameHeight: 460,
    });
    this.load.spritesheet('jeff', 'assets/sprites/blue.png', {
      frameWidth: 340,
      frameHeight: 460,
    });

    // Preload Sounds
    // << LOAD SOUNDS HERE >>
  }

  createGround(x, y) {
    this.groundGroup.create(x, y, 'ground');
  }

  create() {
    var docRef = db.collection("test").doc("3oL8keTflsKEqgeGA5z7");

    docRef.get().then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });

    db.collection("test").doc("3oL8keTflsKEqgeGA5z7")
      .onSnapshot(function (doc) {
        console.log("Current data: ", doc.data());
      });

    // Create game entities
    // << CREATE GAME ENTITIES HERE >>
    this.player = new Player(this, 50, 325, 'josh').setScale(0.25);
    this.ball = new Ball(this, 400, 325, 'ball').setScale(0.25)
    this.player2 = new Player2(this, 750, 325, 'jeff').setScale(0.25);

    this.physics.add.collider(this.player, this.ball)
    this.physics.add.collider(this.player2, this.ball)
    this.physics.add.collider(this.player, this.player2)

    this.cursors = this.input.keyboard.createCursorKeys();
    this.createAnimations();
    this.ball.setBounce(.6)
    this.ball.setCollideWorldBounds(true)
    this.player.setCollideWorldBounds(true)
    this.player2.setCollideWorldBounds(true)


    // Create sounds
    // << CREATE SOUNDS HERE >>

    // Create collisions for all entities
    // << CREATE COLLISIONS HERE >>
  }

  createAnimations() {
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('josh', { start: 17, end: 20 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'jump',
      frames: [{ key: 'josh', frame: 17 }],
      frameRate: 20,
    });
    this.anims.create({
      key: 'idleUnarmed',
      frames: [{ key: 'josh', frame: 11 }],
      frameRate: 10,
    });
    this.anims.create({
      key: 'idleArmed',
      frames: [{ key: 'josh', frame: 6 }],
      frameRate: 10,
    });
  }

  // time: total time elapsed (ms)
  // delta: time elapsed (ms) since last update() call. 16.666 ms @ 60fps
  update(time, delta) {
    // << DO UPDATE LOGIC HERE >>
    this.player.update(this.cursors);
    // console.log('x axis ' + this.player.x)
    // console.log('y axis ' + this.player.y)

    // db.collection("cities").doc("SF")
    //   .onSnapshot(function (doc) {
    //     console.log("Current data: ", doc.data());
    //   });
  }

}
