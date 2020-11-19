import * as rotate from "./rotate.js";

export function horloge () {
    let tab = [0];
    let index = 0;
    let inc = 0;
    let nx;
    let ny;
    let cadran = {
        centerRotationX: 1000,
        centerRotationY: 500,
        initPosX: 1000,
        initPosY: 200,
        couleur: "blue",
        affCadrand: function () {
            let elemParent = document.getElementById ( "parent" );
            let pointCenter = document.querySelector ( '#point' );
            pointCenter.style.position = "absolute";
            let e = document.createElement ( 'p' );
            e.innerHTML = "* " + ( inc );
            elemParent.appendChild ( e );
            nx = rotate.rotate ( this.centerRotationX,this.centerRotationY,this.initPosX,this.initPosY,- index )[0];
            ny = rotate.rotate ( this.centerRotationX,this.centerRotationY,this.initPosX,this.initPosY,- index )[1];
            let p = document.querySelectorAll ( "p" ).item ( inc );
            p.style.position = "absolute";
            p.style.left = nx + "px";
            p.style.top = ny + "px";
            p.style.color = this.couleur;
            pointCenter.style.position = "absolute";
            pointCenter.style.left = this.centerRotationX + "px";
            pointCenter.style.top = this.centerRotationY + "px";
        }

    }

    let id1 = setInterval ( () => {
        if ( index >= ( 360 ) ) {
            clearInterval ( id1 );
        } else {
            cadran.couleur = "red";
            cadran.affCadrand ();
            tab.push ( nx );
            index += 30;
            inc ++;


        }

    },0 )


}