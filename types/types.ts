//Optionl
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());
  //Object is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }
  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}

//Union type
function hello(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("hello, " + x.join(" and "));
  } else {
    console.log("welcome " + name);
  }
}

// Return type is inferred as number[] | string
function getFirstName(x: number[] | string) {
  return x.slice(0, 3);
}
