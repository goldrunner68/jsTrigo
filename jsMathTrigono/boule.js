import * as rotate from "./rotate.js";

export function boule(){
    let index =0;
    let pointer = {
        centerRotationX: 1000,
        centerRotationY: 500,
        initPosX: 1000,
        initPosY: 200,
        affPointer: function () {
            let sprite = document.querySelector ( "#sprite" );
            sprite.style.position = "absolute";
            let nx = rotate.rotate ( this.centerRotationX,this.centerRotationY,this.initPosX,this.initPosY,- index )[0];
            let ny = rotate.rotate ( this.centerRotationX,this.centerRotationY,this.initPosX,this.initPosY,- index )[1];
            sprite.style.position = "absolute";
            sprite.style.left = nx + "px";
            sprite.style.top = ny + "px";
            index ++;
        }
    }

   let id2 = setInterval ( () => {
        if ( index >= (360) ) {
            clearInterval ( id2 );
        } else {
            pointer.affPointer();
            index++;
        }
    },0)
}