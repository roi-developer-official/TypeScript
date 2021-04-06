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
function splice() {
    var arr = [
        { name: "a", id: 1 },
        { name: "b", id: 2 }
    ];
    console.log(arr.splice(2, 0, { name: "c", id: 3 }));
    console.log(arr);
}
splice();
