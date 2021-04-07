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