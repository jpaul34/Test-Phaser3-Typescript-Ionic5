
import { StartScene } from '../../scenes/startScene/start-scene';
import { MainScene } from '../../scenes/mainScene/main-scene';
import { EpnMapScene } from 'src/game/scenes/epnMapScene/epn-map-scene';
import { MapSelectedAreaScene } from 'src/game/scenes/mapSelectedAreaScene/map-selected-area-scene';
//import { EpnAdministrativeArea } from 'src/game/scenes/epnAdministrativeArea/epn-administrative-area';

//let startScene =  new StartScene();

export const gameConfig = {
    backgroundColor: '#2E4053',
    parent: 'phaser_game',
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight-8,
    render: {
        pixelArt: true, 
        antialias: false
    },
    scene:[StartScene, MapSelectedAreaScene, EpnMapScene, MainScene],
}
//