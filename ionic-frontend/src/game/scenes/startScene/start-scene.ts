import { Button } from 'src/game/componets/button/button'
import { Assistant } from 'src/game/componets/assistant/assistant';
import { Title } from 'src/game/componets/title/title';
import { ScoreTable } from 'src/game/componets/scoreTable/score-table';
import { ResizeGame } from 'src/game/functions/resizeGame/resize-game';

//import { HomePage } from 'src/app/home/home.page';


const canvas = document.querySelector('canvas');
/*const width = window.innerWidth;
const height = window.innerHeight;*/

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
        name: 'Jonathan Caiza',
        dependenci: 'Ingenieria en Sistemas',
        acronym: 'FIS',
        score: '1111'
    },
    {
        id: 3,
        name: 'Jonathan Caiza',
        dependenci: 'Ingenieria en Sistemas',
        acronym: 'FIS',
        score: '1111'
    },
    {
        id: 4,
        name: 'Jonathan Caiza',
        dependenci: 'Ingenieria en Sistemas',
        acronym: 'FIS',
        score: '1111'
    },
    {
        id: 5,
        name: 'Jonathan Caiza',
        dependenci: 'Ingenieria en Sistemas',
        acronym: 'FIS',
        score: '1111'
    }
]

interface objectScale{
    ratioWidth: number,
    ratioHeight: number,
    newObjectWidth: number,
    newObjectHeight: number,
    newObjectPositionX: number,
    newObjectPositionY: number,
}

export class StartScene extends Phaser.Scene {
    
    constructor(){
        super({key:'StartScene'});
    }

    preload() {
        console.log('preload');
        this.load.image('btnEPN', '../../assets/buttons/startButton.png');
        this.load.image('btnGuest', '../../assets/buttons/startButton.png');
        this.load.image('polibuho1', '../../assets/assistant/polibuho1.png');
        
    }
    
    create() {
        /* 
            let widthDivision:number = width/8;
            let heightDivision:number = height/14;
        */
        // this.
        let titleGame;
        let epnButton;
        let guestButton;
        let polibuho;
        let titlePolibuho;
        let scoreTable;

        let title:objectScale = ResizeGame(this,88,219, 683, 153);
        titleGame = new Title(this, 1, title.newObjectPositionX, title.newObjectPositionY);

        let boton:objectScale = ResizeGame(this,422,118, 683, 371);
        //epnButton = new Button(this, 1, boton.newObjectPositionX, boton.newObjectPositionY);
        epnButton = new Button(this, boton);

  //      guestButton = new Button(this, 2, 683, 539);

        /* polibuho = new Assistant(this, 1, 1183, 443);
         titlePolibuho = new Title(this, 2, 1130, 592);
         scoreTable = new ScoreTable(this, scoreTableContent, 3, 213, 457, 84, 319);
*/
        //resize(this)();
       // window.addEventListener('loadScene', loadScene(), false);
       //canvas.addEventListener('loadScene', this.loadScene);
       //canvas.
       //this.loadScene();
        
    }

    update(){
        
    }

    loadScene(){
        
        //let titleGame = new Title(this, 1, 683, 153);
       
        /*let epnButton = new Button(this, 1, 683, 371);
        let guestButton = new Button(this, 2, 683, 539);

        let polibuho = new Assistant(this, 1, 1183, 443);
        //let titlePolibuho = new Title(this, 2, 1130, 592);
        let scoreTable = new ScoreTable(this, scoreTableContent, 3, 213, 457, 84, 319);
        /*new Title(this, 1, 683, 153);
        
        new Button(this, 1, 683, 371);
        new Button(this, 2, 683, 539);

        new Assistant(this, 1, 1183, 443);
        new Title(this, 2, 1130, 592);
        new ScoreTable(this, scoreTableContent, 3, 213, 457, 84, 319);*/

    }

    escucharCambiosEnPantalla() {
        setTimeout(
          () => {
            window.addEventListener('resize', this.create, false);
            
            //window.addEventListener('resize', ()=>{ console.log('Pantalla Cambio'); }, false);
            //console.log('Pantalla cambio de tamaño');
          },
          1
        );
    }
      
}
