import { Button } from 'src/game/componets/button/button'
import { Assistant } from 'src/game/componets/assistant/assistant';
import { Title } from 'src/game/componets/title/title';
import { GameAreas } from 'src/game/consts/gameAreas/game-areas';

const canvas = document.querySelector('canvas');
const width = window.innerWidth;
const height = window.innerHeight;

let nameArea: String = 'area1';

interface area{
    id: number,
    name: string,
    title: string,
    style: {}  
}


interface locationsArea{
    id: number,
    name: string,
    title: string,
    x: number,
    y: number,
    style: {}  
}


export class MapSelectedAreaScene extends Phaser.Scene {

    constructor(){
        super({key:'MapSelectedAreaScene'});
    }

    preload() {
        //console.log('preload');


        this.load.image('mapArea1', '../../assets/worldEPN/'+nameArea+'/map.png');

        this.load.image('btnWorld', '../../assets/buttons/world.png');
        this.load.image('btnPlay', '../../assets/buttons/start.png');
        this.load.image('polibuho1', '../../assets/assistant/polibuho1.png');
        
    }

    create() {
        let widthDivision:number = width/16;
        let heightDivision:number = height/16;
        
        let imageBackground = this.add.image(width/2,height/2,'mapArea1');
        imageBackground.setScale(0.8);


        
        /* imagen.displayWidth */ // sacar el ancho de una imagen rescalada.


        // imageBackground.add.circle(x, y, 15, 0x000000);
        // let buttonArea1: Phaser.GameObjects.Image;
        /*
        let btnHome = new Button(this, 6, widthDivision*2, heightDivision);        
        let titleGame = new Title(this, 7, widthDivision*8, heightDivision );
        let puntaje = this.add.text(widthDivision*12, heightDivision*2/3, 'POLIPUNTOS: 5555', {
            fontFamily:'Arial',
            fontSize:30,
            color:'#ffffff',
            align:'center'
        });

        let btnWorld = new Button(this, 6, widthDivision*2, heightDivision);  
        let polibuho = new Assistant(this, 1, widthDivision*13, heightDivision*6-heightDivision/2);
        let titlePolibuho = new Title(this, 2, widthDivision*13, heightDivision*19/3);
        
        let btnPlay = new Button(this, 3, widthDivision*13, heightDivision*7);
        */

                  
       let titleGame = new Title(this, 8, widthDivision*5/2, heightDivision*2);
       let puntaje = this.add.text(widthDivision*12, heightDivision, 'POLIPUNTOS: 5555', {
           fontFamily:'Arial',
           fontSize:30,
           color:'#ffffff',
           align:'center'
       });
       
       //let btnWorld = new Button(this, 7, widthDivision*3/2, heightDivision*27/2);
       let titleBtnWordl = new Title(this, 9, widthDivision*3/2, heightDivision*29/2);
        
       let polibuho = new Assistant(this, 1, widthDivision*15, heightDivision*27/2);
       let titlePolibuho = new Title(this, 2, widthDivision*15, heightDivision*29/2);
       
       //let btnPlay = new Button(this, 3, widthDivision*8, heightDivision*14);
       //this.drawLocationsArea('area1', imageBackground);

    }
    
    update(){
        
    }

    drawLocationsArea(nameAre:string, imagen: Phaser.GameObjects.Image, posX:number, posY:number, scene:Phaser.Scene){
        let contenedor = new Phaser.GameObjects.Container(scene, posX, posY, [imagen]);
        contenedor.setSize(imagen.displayWidth, imagen.displayHeight);

        let locationsArea:locationsArea[];
        GameAreas.forEach(area => {
            locationsArea = area.location;
        });
        let x = width/2;
        let y = height/2


        locationsArea.forEach( locationI => {
                this.add.circle(x, y, 15, 0x000000);
                let titleText = this.add.text(x, y+16, locationI.title, locationI.style);
                //console.log(locationI.title+ '\n');
                titleText.setOrigin (0.5)
                x=x+50;
                y=y-50;
            
        })
    }

}