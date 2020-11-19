export function rotate ( centerRotationX,centerRotationY,x,y,angle ) {
    //centerRotationX, centerRotationY = centre de rotation
    // x,y = position initiale x,y
    // newX, newY = nouvelles coordonées
    let rad = ( Math.PI / 180 ) * angle;
    // je tranforme les degrees en rad car
    //Js ne fait pas de deg pour Math.cos et Math.sin
    // 360deg = 2PI en Rad, 180 = PI, 90 = PI/2 etc...
    let cos = Math.cos ( rad );
    let sin = Math.sin ( rad );
    let newX = ( cos * ( x - centerRotationX ) ) + ( sin * ( y - centerRotationY ) ) + centerRotationX;
    let newY = ( cos * ( y - centerRotationY ) ) - ( sin * ( x - centerRotationX ) ) + centerRotationY;
    return [newX,newY];
}
