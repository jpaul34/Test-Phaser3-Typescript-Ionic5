import {GameTitles} from '../../consts/gameTitles/game-titles'
import { bindCallback } from 'rxjs';

interface scoreInterface {
    id: number,
    name: string,
    dependenci: string,
    acronym: string,
    score: string
}

export class ScoreTable {
    //scoreTable: Phaser.GameObjects.Grid;
    scoreTable: Phaser.GameObjects.GameObject;
    scoreText: Phaser.GameObjects.Text;
    scoreBody: Phaser.GameObjects.Container;

    constructor(scene: Phaser.Scene, scores: scoreInterface[] , titleId: number, 
        xPosition: number, yPosition: number, 
        width: number, height: number){

        let titleContent = GameTitles.find((title)=>{
            return title.id === titleId;
        });        
        
        let scoreContent: string = titleContent.name+"\n";

        scores.forEach(score => {
            let salida: string ='';
            if(titleContent.id == 4 || titleContent.id == 5){
                salida = '\n'+score.name + ' ('+
                        score.acronym +')        '+
                        score.score;
            }else{
                salida = '\n\n'+score.name + ' ('+
                        score.acronym +')        '+
                        score.score;
            }
            scoreContent = scoreContent.concat(salida);
        });
        

        this.scoreText = scene.add.text(0, 0, scoreContent, 
            {
                fontFamily:'Arial',
                fontSize:20,
                color:'#ffffff',
                align:'center'
            }
        );
        
        this.scoreText.setOrigin (0.5);


        this.scoreTable = scene.add.rectangle(0,0, this.scoreText.width+15, this.scoreText.height+15, 0xfff55, 1);
        /*
        graphics.lineStyle(5, 0xFF00FF, 1.0);
        graphics.fillStyle(0xFFFFFF, 1.0);
        graphics.fillRect(50, 50, 400, 200);
        graphics.strokeRect(50, 50, 400, 200);*/

        //this.scoreTable = scene.add.grid(0,0, width, height, 1, 1, 0x000000);
        //console.log(this.scoreTable.strokeColor);
        //this.scoreTable.setFillStyle(0x000000, 1.0);;
        //console.log(this.scoreTable.strokeColor);
        
        //this.scoreTable.setOrigin (0.5)
        //this.scoreBackground.setScale(0.2);
        
        //this.scoreText = scene.add.text(0, 0, buttonDefinition.text.content, scoreDefinition.text.style);
        
        //this.scoreText.setOrigin (0.5)
        //let scoreText = new Title(scene, 2, xPosition, yPosition);
        
        this.scoreBody = scene.add.container(xPosition,yPosition,[this.scoreTable, this.scoreText]);
        this.scoreBody.setSize(this.scoreText.width,this.scoreText.height);
        this.scoreBody.setInteractive();
    }
}
