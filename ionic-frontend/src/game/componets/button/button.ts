import {GameButtons} from '../../consts/gameButtons/game-buttons'

interface objectScale{
    ratioWidth: number,
    ratioHeight: number,
    newObjectWidth: number,
    newObjectHeight: number,
    newObjectPositionX: number,
    newObjectPositionY: number,
}

export class Button {
    buttonBackground: Phaser.GameObjects.Image;
    buttonText: Phaser.GameObjects.Text;
    buttonBody: Phaser.GameObjects.Container;
    /*
    constructor(scene: Phaser.Scene, buttonId: number, xPosition: number, yPosition: number){
        let buttonDefinition = GameButtons.find((buttons)=>{
            return buttons.id === buttonId;
        });

        this.buttonBackground = scene.add.image(0,0,buttonDefinition.name);
        //this.buttonBackground.setScale(0.2);
        
        this.buttonText = scene.add.text(0, 0, buttonDefinition.text.content, buttonDefinition.text.style);
        this.buttonText.setOrigin (0.5)
        this.buttonText.setInteractive();
        
        this.buttonBody = scene.add.container(xPosition,yPosition,[this.buttonBackground, this.buttonText]);
        this.buttonBody.setSize(this.buttonBackground.width,this.buttonBackground.height);
        this.buttonBody.setInteractive();
    }*/

    constructor(scene: Phaser.Scene, boton:objectScale){
        this.buttonBackground = scene.add.image(0,0,"btnEPN");
        this.buttonBackground.displayWidth = boton.newObjectWidth;
        this.buttonBackground.displayHeight = boton.newObjectHeight;
        //this.buttonBackground.setScale(0.2);
        
        this.buttonText = scene.add.text(0, 0, "EPN");
        this.buttonText.setOrigin (0.5)
        this.buttonText.setInteractive();
        
        this.buttonBody = scene.add.container(boton.newObjectPositionX,boton.newObjectPositionY,[this.buttonBackground, this.buttonText]);
        this.buttonBody.setSize(boton.newObjectWidth, boton.newObjectHeight);
        this.buttonBody.setInteractive();
    }
}
