//*Propiedad conmutativa*

function sumaDeTres (a,b,c) {
    return a + b + c;
}

console.log(sumaDeTres(3,5,7));
console.log(sumaDeTres(35,55,75));

//**Propiedad asociativa */

function asociativaSuma(a,b,c){
    return (a+b) + c;
}

console.log(asociativaSuma(3,5,7));


function asociativaMulti(a,b,c){
    if (a > b){
        return (a*b) * c ; 
    }else {
        return a*(b*c) - 1;
    };
}

console.log(asociativaMulti(3,5,7));
console.log(asociativaMulti(9,5,7));

//**Propiedad Distributiva */

//       8 * ( 4 + 15 ) = ( 8 * 4 ) + ( 8 * 15)
//       8 *      19    =     32    +    120  
//           152        =          152

// 2 * (9 + 4) = (2*9) + (2*4)
//     26      =   18 + 8
//     26  = 26