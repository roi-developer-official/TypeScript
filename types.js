//Optionl
function printName(obj) {
    var _a;
    // Error - might crash if 'obj.last' wasn't provided!
    console.log(obj.last.toUpperCase());
    //Object is possibly 'undefined'.
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
//Union type
function hello(x) {
    if (Array.isArray(x)) {
        console.log("hello, " + x.join(" and "));
    }
    else {
        console.log("welcome " + name);
    }
}
// Return type is inferred as number[] | string
function getFirstName(x) {
    return x.slice(0, 3);
}
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
function printCoordB(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoordB({ x: 100, y: 100 });
var myCanvas = document.getElementById("main_canvas");
var a = "expr";
//Literal
var x = "hello";
// OK
x = "hello";
// ...
x = "howdy";
function printText(s, alignment) {
    // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function handleRequest(url, method) {
    console.log(method);
}
//recieve only the value "GET"
var req = { url: "https://example.com", method: "GET" };
var req2 = { url: "https://example.com", method: "GET" };
req.method = "POST";
req2.method = "PUT";
handleRequest(req.url, req.method);
//null | undefined
function liveDangerously(x) {
    x.toPrecision(1);
    // No error
    console.log(x.toFixed());
}
function ac(x) {
    x.concat(" acb");
}
//# sourceMappingURL=types.js.map