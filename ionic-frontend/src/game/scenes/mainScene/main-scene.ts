import { Button } from 'src/game/componets/button/button'
import { Assistant } from 'src/game/componets/assistant/assistant';
import { Title } from 'src/game/componets/title/title';
import { ScoreTable } from 'src/game/componets/scoreTable/score-table';
import { enableProdMode } from '@angular/core';
import { PlayerId } from 'src/game/componets/playerId/player-id';
import { StartScene } from '../startScene/start-scene';

const width = window.innerWidth;
const height = window.innerHeight;

interface playerInterface{
    id: number,
    name: string,
    emailAddress:string, 
    memberOf: string, 
    relationshipEPN: string,
    avatarName:string
}

let players: playerInterface[]=[
    {
        id: 1,
        name: 'Jonathan Caiza',
        emailAddress: 'jonathan.caiza@epn.edu.ec',
        memberOf: 'Ingeneria en Sistemas', 
        relationshipEPN: 'Estudiante',
        avatarName:'Chico'
    },
    {
        id: 2,
        name: 'Paul Llumitaxi',
        emailAddress: 'paul.llumitaxi@epn.edu.ec',
        memberOf: 'Ingeneria en Sistemas', 
        relationshipEPN: 'Estudiante',
        avatarName:'Chico'
    },
    {
        id: 3,
        name: 'Jonathan Caiza',
        emailAddress: 'jonathan.caiza@epn.edu.ec',
        memberOf: 'Ingeneria en Sistemas', 
        relationshipEPN: 'Estudiante',
        avatarName:'Chico'
    }
]

interface scoreInterface {
    id: number,
    name: string,
    dependenci: string,
    acronym: string,
    score: string
}


let scoreTableContent:scoreInterface[] =[
    {
        id: 1,
        name: 'Jonathan Caiza',
        dependenci: 'Ingenieria en Sistemas',
        acronym: 'FIS',
        score: '1111'
    },
    {
        id: 2,
        name: 'Paul Llumitaxi',
        dependenci: 'Ingenieria en Sistemas',
        acronym: 'FIS',
        score: '1100'
    },
    {
        id: 3,
        name: 'Jonathan Caiza',
        dependenci: 'Ingenieria en Sistemas',
        acronym: 'FIS',
        score: '1050'
    },
    {
        id: 4,
        name: 'Paul Llumitaxi',
        dependenci: 'Ingenieria en Sistemas',
        acronym: 'FIS',
        score: '1025'
    },
    {
        id: 5,
        name: 'Jonathan Caiza',
        dependenci: 'Ingenieria en Sistemas',
        acronym: 'FIS',
        score: '1000'
    }
]

export class MainScene extends Phaser.Scene {
   
    preload() {
        //console.log('preload');
        this.load.image('btnPlay', '../../assets/buttons/startButton.png');
        this.load.image('btnOptions', '../../assets/buttons/startButton.png');
        this.load.image('btnAboutOf', '../../assets/buttons/startButton.png');
        this.load.image('polibuho1', '../../assets/assistant/polibuho1.png');
        this.load.image('avatar1', '../../assets/avatar/avatar1.png');
    }

    create() {
        
        let widthDivision:number = width/32;
        let heightDivision:number = height/16;

        this.add.line(
            widthDivision*5,0,
            0, (heightDivision*3)+(3*heightDivision)/4,
            widthDivision*9, (heightDivision*3) + (3*heightDivision)/4, 0xfff55);
        this.add.line(
            0,heightDivision*8,
            widthDivision*10, 0,
            widthDivision*10, heightDivision*14, 0xfff55);
            
            console.log(width );
            console.log( widthDivision);
            console.log( widthDivision-(widthDivision/2),heightDivision-(heightDivision/2));
        //let playerId = new PlayerId(this, players[0], 1, widthDivision-(widthDivision/2),heightDivision-(heightDivision/2));
        let playerId = new PlayerId(this, players[0], 1, widthDivision*5,heightDivision*2);
        console.log(playerId.playerNameText.x, playerId.playerNameText.y );

        let scoreTable = new ScoreTable(this, scoreTableContent, 4, widthDivision*5, heightDivision*7, widthDivision, heightDivision);
        let scoreTable2 = new ScoreTable(this, scoreTableContent, 5, widthDivision*5, (heightDivision*12)+heightDivision/2, widthDivision, heightDivision);

        let titleGame = new Title(this, 6, widthDivision*21, heightDivision*3 );
       /*
        let jugarButton = new Button(this, 3, widthDivision*21, heightDivision*7);
        let opcionesButton = new Button(this, 4, widthDivision*21, heightDivision*10);
        let acerdaDeButton = new Button(this, 5, widthDivision*21, heightDivision*13);*/

        let polibuho = new Assistant(this, 1, widthDivision*12, heightDivision*2);
        let titlePolibuho = new Title(this, 2, widthDivision*12, (heightDivision*3)+heightDivision/2);

        
        let titleText: Phaser.GameObjects.Text = this.add.text(widthDivision*14, (heightDivision*15), "CREADO POR: JONATHAN CAIZA");
        titleText.setOrigin (0.5);

        let titleText2: Phaser.GameObjects.Text = this.add.text(widthDivision*30, (heightDivision*15), "FIS-EPN");
        titleText2.setOrigin (0.5);

        playerId.endSessionBody.setInteractive().on('pointerdown', () => {
            //Chanche de scene
            //this.scene.start('StartScene');
            console.log('cerrar sesion');
        });

        playerId.playerIdBody.setInteractive().on('pointerdown', () => {
            //Chanche de scene
            this.scene.start('StartScene');
        });
                
    }


    update(){
 
    }
}
