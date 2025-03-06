const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: { gravity: { y: 0 }, debug: false }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let player;

function preload() {
    this.load.image("background", "background.png");
    this.load.image("neutrophil", "neutrophil.png");
}

function create() {
    this.add.image(400, 300, "background");
    player = this.physics.add.sprite(400, 300, "neutrophil");
    player.setCollideWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    let velocityX = 0;
    let velocityY = 0;

    if (this.cursors.left.isDown) {
        velocityX = -160;
    } else if (this.cursors.right.isDown) {
        velocityX = 160;
    }

    if (this.cursors.up.isDown) {
        velocityY = -160;
    } else if (this.cursors.down.isDown) {
        velocityY = 160;
    }

    player.setVelocity(velocityX, velocityY);
}


const game = new Phaser.Game(config);
