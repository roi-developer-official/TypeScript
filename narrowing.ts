function padLeft(padding: number | string, input: string) {
  return new Array(padding + 1).join(" ") + input;
}

function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return new Array(padding + 1).join(" ") + input;
    //                   ^ = (parameter) padding: number
  }
  return padding + input;
  //     ^ = (parameter) padding: string
}
/*
"string"
"number"
"bigint"
"boolean"
"symbol"
"undefined"
"object"
"function"
 */

//Truthyness narrowing
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}

/*
0
NaN
"" (the empty string)
0n (the bigint version of zero)
null
undefined
*/

// both of these result in 'true'
Boolean("hello");
!!"world";

//null is of type object!!
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

//also works
function printAll(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {
        //                    ^ = (parameter) strs: string[]
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
      //            ^ = (parameter) strs: string
    }
  }
}

//Equality narrowing
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    //     ^ = (method) String.toUpperCase(): string
    y.toLowerCase();
    //     ^ = (method) String.toLowerCase(): string
  } else {
    console.log(x);
    //            ^ = (parameter) x: string | number
    console.log(y);
    //              ^ = (parameter) y: string | boolean
  }
}

interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) {
    console.log(container.value);
    //                        ^ = (property) Container.value: number

    // Now we can safely multiply 'container.value'.
    container.value *= factor;
  }
}

//Instance narrowing
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
    //              ^ = (parameter) x: Date
  } else {
    console.log(x.toUpperCase());
    //            ^ = (parameter) x: string
  }
}

//Assignment
let p = Math.random() < 0.5 ? 10 : "hello world!";
//  ^ = let p: string | number
p = 1;

console.log(p);
//          ^ = let p: number
p = "goodbye!";

console.log(p);
//          ^ = let p: string
p = true;

//Control flow analysis

function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return new Array(padding + 1).join(" ") + input;
  }
  return padding + input; // padding: string
}

//Using type predicates
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1 = zoo.filter(isFish); //  Fish[]
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});

//Discrimenated unions
interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}


function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}


//one way: - in non strictNullChecks this could potentialy cause bugs.
function getAreaB(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius! ** 2;
  }
}

//second way
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}
//discrimanated union
type Shape = Circle | Square;

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
//                   ^ = (parameter) shape: Circle
  }
}

//also 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
//                     ^ = (parameter) shape: Circle
    case "square":
      return shape.sideLength ** 2;
//           ^ = (parameter) shape: Square
  }
}

