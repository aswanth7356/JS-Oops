
// rest operator (...) -->  used in functions and instead of parameter 


function add(...n) {
    console.log(n.reduce((a,b)=>a+b));
}

add(1,6,7,5,8)   //27
add(4,8,5,5,2,12)  //36