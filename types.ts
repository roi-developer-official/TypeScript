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

//Alias
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

//Interface
interface PointB {
  x: number;
  y: number;
}

function printCoordB(pt: PointB) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoordB({ x: 100, y: 100 });

//Type assertion
interface T {}
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const a = ("expr" as any) as T;

//Literal
let x: "hello" = "hello";
// OK
x = "hello";
// ...
x = "howdy";

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

function handleRequest(url: string, method: "GET") {
  console.log(method);
}

//recieve only the value "GET"
const req = { url: "https://example.com", method: "GET" as "GET" };
const req2 = { url: "https://example.com", method: "GET" } as const;
req.method = "POST";
req2.method = "PUT";
handleRequest(req.url, req.method as "GET");


//null | undefined

function ac(x: string | undefined) {
  x.concat(" acb");
}

function liveDangerously(x?: number | undefined) {
  // No error
  console.log(x!.toFixed());
}

