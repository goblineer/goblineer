import 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.createTitle();
    this.createPlayButton();
  }

  createTitle() {
    this.titleImage = this.add.image(100, 100, 'title');
    this.centerObject(this.titleImage, 0.5);
  }

  createPlayButton() {
    this.gameButton = this.add.sprite(0, 0, 'button1').setInteractive();
    this.centerObject(this.gameButton, -2.5);
    this.gameButton.setScale(2);

    this.gameText = this.add.text(0, 0, 'Play', {
      fontSize: '32px',
      fill: '#000'
    });

    Phaser.Display.Align.In.Center(this.gameText, this.gameButton);

    this.gameButton.on(
      'pointerdown',
      function(pointer) {
        this.scene.start('Game');
      }.bind(this)
    );

    this.gameButton.on(
      'pointerover',
      function(pointer) {
        this.gameButton.setTexture('button2');
      }.bind(this)
    );

    this.gameButton.on(
      'pointerout',
      function(pointer) {
        this.gameButton.setTexture('button1');
      }.bind(this)
    );
  }

  centerObject(gameObject, offset = 0) {
    var width = this.cameras.main.width;
    var height = this.cameras.main.height;

    gameObject.x = width / 2;
    gameObject.y = height / 2 - offset * 100;
  }
}
