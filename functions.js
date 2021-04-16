// function greeter(fn: (a: string) => void) {
//   fn("Hello, World");
// }
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function returnBoolean(num) {
    return num === 5;
}
returnBoolean.description = "bla bla";
doSomething(returnBoolean);
//construct signeture:
var A = /** @class */ (function () {
    function A(name) {
        this.name = name;
    }
    return A;
}());
function fn(ctor) {
    return new ctor("Bob");
}
var a = fn(A);
console.log(a.name);
