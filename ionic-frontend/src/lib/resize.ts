import { gameConfig } from 'src/game/consts/gameConfig/game-config';

export function resize(component) {
    return () => {
        const canvas = document.querySelector('canvas');

        // if (canvas) {
        //     const width = window.innerWidth;
        //     const height = window.innerHeight;
        //     const wratio = width / height;
        //     const ratio = component.config.width / component.config.height;
        //     canvas.style.width = (window.innerWidth) + 'px';
        //     canvas.style.height = (window.innerHeight) + 'px';
        //     component.top = (height - Number((canvas.style.height).replace('px', ''))) / 2;
        // }
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
            component.top = (height - Number((canvas.style.height).replace('px', ''))) / 2;
            
        
        };

    };
}
