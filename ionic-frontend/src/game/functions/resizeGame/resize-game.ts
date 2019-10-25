interface objectScale{
    ratioWidth: number,
    ratioHeight: number,
    newObjectWidth: number,
    newObjectHeight: number,
    newObjectPositionX: number,
    newObjectPositionY: number,
}
//calculateRescaled

export function ResizeGame( /*currentWidthCanvas: number,
                                    currentHeightCanvas: number,*/
                                    Scene: Phaser.Scene,
                                    CurrentObjectWidth: number,
                                    CurrentObjectHeight:number,
                                    CurrentObjectPositionX: number,
                                    CurrentObjectPositionY: number){
    
    let currentWidthCanvas: number = Scene.sys.canvas.width;
    let currentHeightCanvas: number = Scene.sys.canvas.height;
    let defaultWidthCanvas:number = 1366;
    let defaultHeightCanvas:number = 768;

    let ratioWidth: number = currentWidthCanvas/defaultWidthCanvas;
    let ratioHeight: number = currentHeightCanvas/ defaultHeightCanvas;
    
    /*
    let newObjectWidth: number = CurrentObjectWidth*ratioWidth;
    let newObjectHeight: number = CurrentObjectHeight*ratioHeight;

    let newObjectPositionX: number = CurrentObjectPositionX*ratioWidth;
    let newObjectPositionY: number = CurrentObjectPositionY*ratioHeight;
    */
    
    let newObjectScale: objectScale = {
        ratioWidth: ratioWidth,
        ratioHeight: ratioHeight,
        newObjectWidth: CurrentObjectWidth*ratioWidth,
        newObjectHeight: CurrentObjectHeight*ratioHeight,
        newObjectPositionX: CurrentObjectPositionX*ratioWidth,
        newObjectPositionY: CurrentObjectPositionY*ratioHeight,
    }
    
    return newObjectScale;
}



/*export function ResizeGame(componet, gameConfig) {
    
    return function () {
        const canvas = document.querySelector('canvas');
    
        if (canvas) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const wratio = width / height;
        const ratio = gameConfig.width / gameConfig.height;
        if (wratio < ratio) {
            canvas.style.width = width + 'px';
            canvas.style.height = (width / ratio) + 'px';
        } else {
            canvas.style.width = (height * ratio) + 'px';
            canvas.style.height = height + 'px';
        }
        componet.top = (height - Number((canvas.style.height).replace('px', ''))) / 2;
        }
    
    };

}*/



/*

    export function calculateRescaledPixels(pixels: number, 
        currentDistance: number,
        defaultDistance = 1920): number 
        {
        return currentDistance * pixels / defaultDistance;
    }

*/