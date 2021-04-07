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

function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
}
