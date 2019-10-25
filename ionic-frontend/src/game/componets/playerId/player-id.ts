import { GameAvatar } from 'src/game/consts/gameAvatar/game-avatar';

interface playerInterface{
    id: number,
    name: string,
    emailAddress:string, 
    memberOf: string, 
    relationshipEPN: string,
    avatarName:string
}

export class PlayerId {
    avatarBoground: Phaser.GameObjects.Image;
    playerNameText: Phaser.GameObjects.Text;
    playerMemberOfText: Phaser.GameObjects.Text;
    endSessionText: Phaser.GameObjects.Text;
    playerIdBody: Phaser.GameObjects.Container;
    endSessionBody: Phaser.GameObjects.Container;
    

    constructor(scene: Phaser.Scene, playerInformation: playerInterface , avatarId: number, 
        xPosition: number, yPosition: number){

        let avatar = GameAvatar.find((title)=>{
            return title.id === avatarId;
        });    

        this.avatarBoground = scene.add.image(0,0,avatar.name);
        this.avatarBoground.setX(-this.avatarBoground.width-this.avatarBoground.width/4);

        this.playerNameText = scene.add.text(this.avatarBoground.width/2,0, playerInformation.name.toUpperCase(), {
            fontFamily:'Arial',
            fontSize:30,
            color:'#ffffff',
            align:'center'
        });
        this.playerNameText.setX(-this.avatarBoground.width*2/5);
        this.playerNameText.setY(-this.avatarBoground.width/2);


        //let centerXText = this.avatarBoground.width+15+this.playerNameText.width/2;
        this.playerMemberOfText = scene.add.text(0, 0, playerInformation.memberOf.toUpperCase(), {
            fontFamily:'Arial',
            fontSize:16,
            color:'#ffffff',
            align:'center'
        });
        this.playerMemberOfText.setOrigin (0.5);
        this.playerMemberOfText.setX(this.playerNameText.x+this.playerNameText.width/2);
        


        let centerYText = this.playerNameText.height*5/2 ;
        this.endSessionText  = scene.add.text(0,0, 'CERRAR SESIÓN', {
            fontFamily:'Arial',
            fontSize:20,
            color:'#ff0000',
            align:'center'
        });

        this.endSessionText.setOrigin (0.5);
        /*this.endSessionText.setX(this.playerNameText.x+this.playerNameText.width/2);
        this.endSessionText.setY(this.avatarBoground.width/2);
        */

        //this.playerIdBody.(0);
        this.playerIdBody = scene.add.container(xPosition,yPosition,[this.avatarBoground, this.playerNameText, this.playerMemberOfText]);
        this.playerIdBody.setSize(this.avatarBoground.width+this.playerNameText.width,this.avatarBoground.height);
        this.playerIdBody.setInteractive();

        console.log(xPosition,yPosition);
        this.endSessionBody = scene.add.container(xPosition+this.playerNameText.x+this.playerNameText.width/2, yPosition+this.avatarBoground.width/2,[this.endSessionText]);
        console.log(this.endSessionBody.x,this.endSessionBody.y);
        this.endSessionBody.setSize(this.endSessionText.width,this.endSessionText.height);
        //console.log(this.endSessionBody);
        //console.log(this.endSessionText.width,this.endSessionText.height);
        this.endSessionBody.setInteractive();
        //this.endSessionText.setInteractive();

    }
}
