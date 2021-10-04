//overloading - not supported
function func1(x,y) {
   console.log(x*y) ;
}
function func1(z) {
   console.log( z);
}
// prints 5
func1(5);

// prints 5, not 30
func1(5,6);