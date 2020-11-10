export function rotate ( centerRotationX,centerRotationY,x,y,angle ) {
    //centerRotationX, centerRotationY = centre de rotation
    // x,y = position initiale x,y
    // newX, newY = nouvelles coordonées

    let radians = ( Math.PI / 180 ) * angle;
    let cos = Math.cos ( radians );
    let sin = Math.sin ( radians );
    let newX = ( cos * ( x - centerRotationX ) ) + ( sin * ( y - centerRotationY ) ) + centerRotationX;
    let newY = ( cos * ( y - centerRotationY ) ) - ( sin * ( x - centerRotationX ) ) + centerRotationY;
    return [newX,newY];
}
