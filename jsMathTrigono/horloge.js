import * as rotate from "./rotate.js";
let  centerRotationX =1000;
let  centerRotationY =500;
let initPosX = 1000;
let initPosY = 200;
let tab=[0];
let elemParent = document.getElementById("parent");
let pointCenter = document.querySelector('#point');
pointCenter.style.position = "absolute";
export function horloge(couleur){
    let index =0;
    let inc =0;
    let nx;
    let ny;
    let id;
    this.couleur = couleur;

id = setInterval ( () => {
        if ( index >= (360) ) {
            clearInterval ( id );
        } else {
            let e = document.createElement('p');
            e.innerHTML = "* "+(inc);
            elemParent.appendChild(e);
            nx = rotate.rotate ( centerRotationX,centerRotationY,initPosX,initPosY,-index)[0];
            ny = rotate.rotate ( centerRotationX,centerRotationY,initPosX,initPosY,-index )[1];
            let p=document.querySelectorAll("p").item(inc);
            p.style.position = "absolute";
            p.style.left = nx+"px";
            p.style.top = ny+"px";
            p.style.color = this.couleur;
            tab.push(nx);

            index+=30;
            inc++;
            /***************************/
            pointCenter.style.position = "absolute";
            pointCenter.style.left = centerRotationX+"px";
            pointCenter.style.top = centerRotationY+"px";

        }

    },0 )

}