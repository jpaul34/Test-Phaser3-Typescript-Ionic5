import { Button } from 'src/game/componets/button/button'
import { Assistant } from 'src/game/componets/assistant/assistant';
import { Title } from 'src/game/componets/title/title';

const canvas = document.querySelector('canvas');
const width = window.innerWidth;
const height = window.innerHeight;

export class EpnMapScene extends Phaser.Scene {
    
    constructor(){
        super({key:'EpnMapScene'});
    }

    preload() {
        //console.log('preload');
        this.load.image('btnHome', '../../assets/buttons/home.png');
        this.load.image('btnPlay', '../../assets/buttons/startButton.png');
        this.load.image('polibuho1', '../../assets/assistant/polibuho1.png');

        this.load.image('area1', '../../assets/areas/area1.png');
        this.load.image('area2', '../../assets/areas/area2.png');
        this.load.image('area3', '../../assets/areas/area3.png');
        this.load.image('area4', '../../assets/areas/area4.png');
        this.load.image('area5', '../../assets/areas/area5.png');
        this.load.image('area6', '../../assets/areas/area6.png');
        
    }

    create() {
        
        let buttonArea1: Phaser.GameObjects.Image;
        let buttonArea2: Phaser.GameObjects.Image;
        let buttonArea3: Phaser.GameObjects.Image;
        let buttonArea4: Phaser.GameObjects.Image;
        let buttonArea5: Phaser.GameObjects.Image;
        let buttonArea6: Phaser.GameObjects.Image;

        let widthDivision:number = width/16;
        let heightDivision:number = height/8;

       // let btnHome = new Button(this, 6, widthDivision*2, heightDivision);        
        let titleGame = new Title(this, 7, widthDivision*8, heightDivision );
        let puntaje = this.add.text(widthDivision*12, heightDivision*2/3, 'POLIPUNTOS: 5555', {
            fontFamily:'Arial',
            fontSize:30,
            color:'#ffffff',
            align:'center'
        });
    
        buttonArea1 = this.add.image(widthDivision*6, heightDivision*6, 'area1');
        buttonArea1.setScale(0.7);
        buttonArea2 = this.add.image(widthDivision*8-widthDivision/10, heightDivision*7- heightDivision*8/11, 'area2');
        buttonArea2.setScale(0.7);
        buttonArea3 = this.add.image(widthDivision*4+widthDivision*2/4, heightDivision*6, 'area3');
        buttonArea3.setScale(0.7);
        buttonArea4 = this.add.image(widthDivision*8+widthDivision*1/5, heightDivision*4 + heightDivision/5, 'area4');
        buttonArea4.setScale(0.7);
        buttonArea5 = this.add.image(widthDivision*10+widthDivision*5/6, heightDivision*2+heightDivision*4/5, 'area5');
        buttonArea5.setScale(0.7);
        buttonArea6 = this.add.image(widthDivision*7+widthDivision/2, heightDivision*3+heightDivision/5, 'area6');
        buttonArea6.setScale(0.7);
        
        let polibuho = new Assistant(this, 1, widthDivision*13, heightDivision*6-heightDivision/2);
        let titlePolibuho = new Title(this, 2, widthDivision*13, heightDivision*19/3);
        
       // let btnPlay = new Button(this, 3, widthDivision*13, heightDivision*7);


        
        //let scoreTable = new ScoreTable(this, scoreTableContent, 3, widthDivision+15, heightDivision*9, widthDivision, heightDivision);


        buttonArea1.setInteractive().on('pointerdown', () => {
            //Chanche de scene
            //this.scene.start('StartScene');
            console.log('Zona 1');
        });

    }

    update(){
        
    }

}
