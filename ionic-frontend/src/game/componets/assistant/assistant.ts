import {GameAssistant} from '../../consts/gameAssistant/game-assistant';

export class Assistant {
    assistantBackground: Phaser.GameObjects.Image;
    assistantText: Phaser.GameObjects.Text;
    textContainer: Phaser.GameObjects.Container;
    assistantBody: Phaser.GameObjects.Container;

    constructor(scene: Phaser.Scene, assistantId: number, xPosition: number, yPosition: number){
        let assistanType = GameAssistant.find((assistant)=>{
            return assistant.id === assistantId;
        });

        this.assistantBackground = scene.add.image(0,0,assistanType.name);

        this.assistantBackground.setScale(0.3);
        //this.assistantBackground.setDisplaySize(xPosition/5,xPosition/5);
        
        /*
        console.log(this.assistantBackground.setScale(0.5).getBottomCenter());
        if(assistanType.text !== null){
        */    //this.assistantText = scene.add.text(0,0, 'AYUDA', assistanType.text.style);
        /*    this.assistantText.setOrigin(0.5);
            //this.assistantText.setAlign('');
            this.textContainer = scene.add.container(xPosition,yPosition,
                                                [this.assistantBackground, this.assistantText]);
            this.assistantBody = scene.add.container(xPosition,yPosition,
                                                    [this.assistantBackground, this.assistantText]);
        }else{*/
            this.assistantBody = scene.add.container(xPosition,yPosition,[this.assistantBackground /*, this.assistantText*/]);
        //}    
        
        this.assistantBody.setSize(this.assistantBackground.width,this.assistantBackground.height);
        this.assistantBody.setInteractive();

    }
}
