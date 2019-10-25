import { Component, OnInit } from '@angular/core';
import { gameConfig } from '../../game/consts/gameConfig/game-config';
import { ResizeGame } from '../../game/functions/resizeGame/resize-game';
import { resize } from '../../lib/resize';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit  {
  config= gameConfig;
  /*
  config = {
    backgroundColor: '#000022',
    parent: 'juego',
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    pixelArt: true,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 300
        },
        debug: false
      }
    },
  }
  */
  ngOnInit() {
    this.startGame()
  }


  game: Phaser.Game;
/*
  constructor() {
    this.escucharCambiosEnPantalla();
  }

  ngOnInit(): void {
    //throw new Error("Method not implemented.");
    this.game = new Phaser.Game(gameConfig);
    //this.escucharCambiosEnPantalla();
    //this.escucharCambiosEnPantalla();
  }


  escucharCambiosEnPantalla() {
    setTimeout(
      () => {
        //this.game.destroy(true)
        //window.addEventListener('resize', this, false);
        
        //window.addEventListener('resize', ()=>{ console.log('Pantalla Cambio'); }, false);
        //console.log('Pantalla cambio de tamaño');
      },
      1
    );
  }

/*
  escucharCambiosEnPantalla() {
    setTimeout(
      () => {
        ResizeGame(this, gameConfig)();
        window.addEventListener('ResizeGame', ResizeGame(this, gameConfig), false);
      },
      1
    );
  } 
*/
  //config;

  private startGame() {
    //this.location = 2;
    setTimeout(
        () => {
          //this.reboteScene = new Rebote(this.gameStatus);
          // this.config = {
          //   parent: 'game',
          //   type: Phaser.AUTO,
          //   width: window.innerWidth,
          //   height: window.innerHeight,
          //   backgroundColor: 'black',
          //   physics: {
          //     default: 'arcade'
          //   },
          //   scene: [this.reboteScene]
          // };
          //this.game = new Phaser.Game(this.config);
          
          this.game = new Phaser.Game(gameConfig);
          console.log('Entro');
          this.resizeGameArea();
        }, 1
    );
  }

  private restartGame() {
    //this.gameStatus.restarts++;
    //this.reboteScene.scene.restart();
  }

  private resizeGameArea() {
    setTimeout(
        () => {
          resize(this)();
          window.addEventListener('resize', resize(this), false);
        }, 1
    );
  }

}