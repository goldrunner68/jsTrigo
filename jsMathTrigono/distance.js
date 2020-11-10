export function distance(x0,y0,x1,y1){
    // calcul de distance entre deux points
    let a1= Math.pow((x0-x1),2);
    let a2 = Math.pow((y0-y1),2);
    return Math.sqrt ( a1 + a2 );
}