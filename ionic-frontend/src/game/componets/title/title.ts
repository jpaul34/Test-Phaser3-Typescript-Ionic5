import {GameTitles} from '../../consts/gameTitles/game-titles'

export class Title {

    //buttonBackground: Phaser.GameObjects.Image;
    titleText: Phaser.GameObjects.Text;
    textBody: Phaser.GameObjects.Container;

    constructor(scene: Phaser.Scene, titleId: number, xPosition: number, yPosition: number){
        let titleContent = GameTitles.find((title)=>{
            return title.id === titleId;
        });
        console.log('');
        this.titleText = scene.add.text(0, 0, titleContent.text.content, titleContent.text.style);
        //this.titleText = scene.add.text(0, 0, 'AAAAAAAAA');
        this.titleText.setOrigin (0.5)
        
        this.textBody = scene.add.container(xPosition,yPosition,
            [/*this.buttonBackground,*/ this.titleText]);
        this.textBody.setSize(this.titleText.width,this.titleText.height);
        this.textBody.setInteractive();
    }
}
