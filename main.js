class Scene1 extends Phaser.Scene {
    constructor() {
        super('Scene1');
    }

    preload() {
       
    }

    create() {
        
        const dialogue = "Você encontrou um livro antigo empoeirado na biblioteca.\n As páginas estão amareladas pelo tempo, mas algo brilha\n intensamente entre as palavras apagadas.\n\nQuando você toca o brilho, uma sensação estranha\n percorre seu corpo. Será que você deve continuar lendo?\n Clique para descobrir.";
        
        this.add.text(10, 10, dialogue, { 
            font: "12px Arial", 
            fill: "#fff", 
            wordWrap: { width: 700 }
        });

        document.getElementById('url-input').value = window.location.href;

        this.input.once('pointerdown', () => {
            this.scene.start('Scene2');
        });
    }
}

class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
    }

    preload() {
        
    }

    create() {
        
        const dialogue = "À medida que você continua a leitura, o brilho se intensifica e o chão\n começa a tremer. De repente, uma porta aparece na parede,\n brilhando com a mesma luz.\n\nCurioso e assustado, você se aproxima lentamente. O que estará\n além desse portal misterioso? Clique para entrar.";
        
        this.add.text(10, 10, dialogue, { 
            font: "12px Arial", 
            fill: "#fff", 
            wordWrap: { width: 700 }  
        });

        document.getElementById('url-input').value = window.location.href;

        this.input.once('pointerdown', () => {
            this.scene.start('Scene3');
        });
    }
}

class Scene3 extends Phaser.Scene {
    constructor() {
        super('Scene3');
    }

    preload() {
    
    }

    create() {
        
        const dialogue = "Ao atravessar o portal, você se vê em um mundo completamente\n diferente. Montanhas flutuam no céu, criaturas mágicas correm\n pelos campos, e um castelo reluzente se ergue à distância.\n\nEste novo mundo está cheio de aventuras e mistérios para desvendar.\n Fim... ou será apenas o começo?";
        
        this.add.text(10, 10, dialogue, { 
            font: "12px Arial", 
            fill: "#fff", 
            wordWrap: { width: 700 }  
        });

        document.getElementById('url-input').value = window.location.href;
    }
}

const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 400,
    parent: 'game-container',
    scene: [Scene1, Scene2, Scene3]
};

const game = new Phaser.Game(config);