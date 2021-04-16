//functions
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

//or
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  // ...
}

//Call signeture:
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function returnBoolean(num: number): boolean {
  return num === 5;
}

returnBoolean.description = "bla bla";
doSomething(returnBoolean);

//construct signeture:
class A {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

type SomeConstructor = {
  new (s: string): A;
};

function fn(ctor: SomeConstructor) {
  return new ctor("Bob");
}

const a = fn(A); //Bob
//generic functions
function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'string'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100);

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

const arr = combine([1, 2, 3], ["hello"]);

const arr = combine<string | number>([1, 2, 3], ["hello"]);

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

//Optional parameters
function f(x?: number) {
  //x: number | undefined
  // ...
}
f(); // OK
f(10); // OK

//also
function f(x = 10) {
  // ...
}

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));
myForEach([1, 2, 3], (a, i) => {
  console.log(i.toFixed());
});

//function overload:
//Always prefer parameters with union types instead of overloads when possible
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);

function fnc(x: string): void;
function fnc() {
  // ...
}
// Expected to be able to call with zero arguments
fnc();

function fnd(x: boolean): void;
// Argument type isn't right
function fnd(x: string): void;
function fnd(x: boolean) {} //comment it
// function fnd(x: boolean | string) {}

// function len(x: string| any[]):number;
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

len(""); // OK
len([0]); // OK
len(Math.random() > 0.5 ? "hello" : [0]);
