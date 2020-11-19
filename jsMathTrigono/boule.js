import * as rotate from "./rotate.js";
let  centerRotationX =1000;
let  centerRotationY =500;
let initPosX = 1000;
let initPosY = 200;
let sprite = document.querySelector("#sprite");
sprite.style.position = "absolute";
export function boule(){
    let index =0;
    let id2;
    id2 = setInterval ( () => {
        if ( index >= (360) ) {
            clearInterval ( id2 );
        } else {

            let nx = rotate.rotate ( centerRotationX,centerRotationY,initPosX,initPosY,-index)[0];
            let ny = rotate.rotate ( centerRotationX,centerRotationY,initPosX,initPosY,-index )[1];
            sprite.style.position = "absolute";
            sprite.style.left = nx+"px";
            sprite.style.top = ny+"px";
            index++;
        }
    },0)
}