var config = {
//La typepropriété peut être Phaser.CANVAS, Phaser.WEBGLou Phaser.AUTO. Il s'agit du contexte de rendu que vous souhaitez utiliser pour votre jeu. 
    type: Phaser.AUTO,
// Largeur de 800 px -
    width: 800,
// Hauteur de 600 px |
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
/*game = 

Une instance d'un objet Phaser.Game est 
affectée à une variable locale appelée game et 
l'objet de configuration lui est transmis. 
Cela commencera le processus de donner vie 
à Phaser.

*/
var game = new Phaser.Game(config);

/*

Chargeons les ressources dont nous avons 
besoin pour notre jeu. Pour ce faire, 
placez des appels au Phaser Loader dans une 
fonction Scene appelée preload. 
Phaser recherchera automatiquement cette 
fonction au démarrage 
et chargera tout ce qui y est défini. 

*/
function preload ()
{
    this.load.image('sky', '../assets/sky.png');
    this.load.image('ground', '../assets/platform.png');
    this.load.image('star', '../assets/star.png');
    this.load.image('bomb', '../assets/bomb.png');
    this.load.spritesheet('dude', 
        '../assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

function create (){
    this.add.image(0,0, 'sky').setOrigin(0, 0);

    this.add.image(400, 300, 'star');
}

function update (){
}
