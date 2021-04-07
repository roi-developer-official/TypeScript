// function padLeft(padding: number | string, input: string) {
//   return new Array(padding + 1).join(" ") + input;
// }
// function padLeft(padding: number | string, input: string) {
//   if (typeof padding === "number") {
//     return new Array(padding + 1).join(" ") + input;
//     //                   ^ = (parameter) padding: number
//   }
//   return padding + input;
//   //     ^ = (parameter) padding: string
// }
// /*
// "string"
// "number"
// "bigint"
// "boolean"
// "symbol"
// "undefined"
// "object"
// "function"
//  */
// //Truthyness narrowing
// function getUsersOnlineMessage(numUsersOnline: number) {
//   if (numUsersOnline) {
//     return `There are ${numUsersOnline} online now!`;
//   }
//   return "Nobody's here. :(";
// }
// /*
// 0
// NaN
// "" (the empty string)
// 0n (the bigint version of zero)
// null
// undefined
// */
// // both of these result in 'true'
// Boolean("hello");
// !!"world";
// //null is of type object!!
// function printAll(strs: string | string[] | null) {
//   if (strs && typeof strs === "object") {
//     for (const s of strs) {
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   }
// }
// //also works
// function printAll(strs: string | string[] | null) {
//   if (strs !== null) {
//     if (typeof strs === "object") {
//       for (const s of strs) {
//         //                    ^ = (parameter) strs: string[]
//         console.log(s);
//       }
//     } else if (typeof strs === "string") {
//       console.log(strs);
//       //            ^ = (parameter) strs: string
//     }
//   }
// }
// //Equality narrowing
// function example(x: string | number, y: string | boolean) {
//   if (x === y) {
//     // We can now call any 'string' method on 'x' or 'y'.
//     x.toUpperCase();
//     //     ^ = (method) String.toUpperCase(): string
//     y.toLowerCase();
//     //     ^ = (method) String.toLowerCase(): string
//   } else {
//     console.log(x);
//     //            ^ = (parameter) x: string | number
//     console.log(y);
//     //              ^ = (parameter) y: string | boolean
//   }
// }
// interface Container {
//   value: number | null | undefined;
// }
// function multiplyValue(container: Container, factor: number) {
//   // Remove both 'null' and 'undefined' from the type.
//   if (container.value != null) {
//     console.log(container.value);
//     //                        ^ = (property) Container.value: number
//     // Now we can safely multiply 'container.value'.
//     container.value *= factor;
//   }
// }
// //Instance narrowing
// function logValue(x: Date | string) {
//   if (x instanceof Date) {
//     console.log(x.toUTCString());
//     //              ^ = (parameter) x: Date
//   } else {
//     console.log(x.toUpperCase());
//     //            ^ = (parameter) x: string
//   }
// }
// //Assignment
// let p = Math.random() < 0.5 ? 10 : "hello world!";
// //  ^ = let p: string | number
// p = 1;
// console.log(p);
// //          ^ = let p: number
// p = "goodbye!";
// console.log(p);
// //          ^ = let p: string
// p = true;
// //Control flow analysis
// function padLeft(padding: number | string, input: string) {
//   if (typeof padding === "number") {
//     return new Array(padding + 1).join(" ") + input;
//   }
//   return padding + input; // padding: string
// }

class Pet {
  name;
  constructor(name) {
    this.name = name;
  }
}

class Bird extends Pet {
  constructor(name) {
    super(name);
  }
  fly() {}
}
class Fish extends Pet {
  constructor(name) {
    super(name);
  }
  swim() {}
}

// //Using type predicates
function getSmallPet() {
  var rand = Math.random() > 0.5;

  if (rand) {
    return new Fish("bob");
  } else return new Bird("alice");
}
function isFish(pet) {
  return pet.swim !== undefined;
}
// Both calls to 'swim' and 'fly' are now okay.
// var pet = getSmallPet();
// if (isFish(pet)) {
//     pet.swim();
// }
// else {
//     pet.fly();
// }
var zoo = [getSmallPet(), getSmallPet(), getSmallPet()];

var underWater1 = zoo.filter(isFish); //  Fish[]
console.log(underWater1);
// or, equivalently
var underWater2 = zoo.filter(isFish);
// The predicate may need repeating for more complex examples
var underWater3 = zoo.filter(function (pet) {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});
