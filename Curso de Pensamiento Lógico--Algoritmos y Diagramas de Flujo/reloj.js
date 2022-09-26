
let s = 0;
let m = 0;
let h = 0; 

function reloj(){

    console.log(h+':'+m+':'+s)

    s = s + 1;
    if (s>59){
        s = 0;
        m = m + 1;
    }
    if (m>59){
        m = 0;
        h = h + 1;
    }

    if (h>23){
        s = 0 ;
        m = 0 ;
        h = 0 ;
    }

    setTimeout(() => {
        reloj();
    }, 1000);
}

reloj();