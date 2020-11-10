import * as rotate from './jsMathTrigono/rotate.js';
import * as distance from './jsMathTrigono/distance.js';
let ele = document.querySelector("#sprite");
let ele2 = document.querySelector('#point');
ele.style.position = "absolute";
ele2.style.position = "absolute";
let  centerRotationX =1000;
let  centerRotationY =500;
onload = () => {
    let elem3 = document.querySelector ( '#coord' );

    let index =0;
    let id = setInterval ( () => {
        if ( index >= (360) ) {
            clearInterval ( id );
        } else {
            index++;
            let nx = rotate.rotate ( centerRotationX,centerRotationY,900,500,index)[0];
            let ny = rotate.rotate ( centerRotationX,centerRotationY,900,500,index )[1];

            ele.style.left = nx+"px";
            ele.style.top = ny+"px";
            /***************************/
            ele2.style.left = centerRotationX+"px";
            ele2.style.top = centerRotationY+"px";



        }


    },0 )
};