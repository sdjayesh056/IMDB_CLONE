function add(a, b) {
    console.log(a+b);
    
}
function sub(a, b) {
    console.log(a-b);
    
}
function mul(a, b) {
    console.log(a*b);
    
}
function div(a, b) {
    console.log(a/b);
    
}

module.exports={
    addition : add,
    subtraction : sub,
    multiplication : mul,
    division : div
}


// add(5,10)
// sub(12,8)
// mul(5,10)
// div(80,10)