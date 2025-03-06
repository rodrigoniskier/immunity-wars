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
    this.load.image("background", "https://i.imgur.com/O7o2yWk.png"); // Fundo genérico
    this.load.image("neutrophil", "https://i.imgur.com/FLpQvys.png"); // Neutrófilo simples
}

function create() {
    this.add.image(400, 300, "background");
    player = this.physics.add.sprite(400, 300, "neutrophil");
    player.setCollideWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (this.cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (this.cursors.right.isDown) {
        player.setVelocityX(160);
    } else {
        player.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
        player.setVelocityY(-160);
    } else if (this.cursors.down.isDown) {
        player.setVelocityY(160);
    } else {
        player.setVelocityY(0);
    }
}

const game = new Phaser.Game(config);
