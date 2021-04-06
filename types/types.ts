

//Union type
function hello(x:string[] | string){
    if(Array.isArray(x)){
        console.log("hello, " + x.join(" and "));   
    } else {
        console.log("welcome " + name);
    }
};

// Return type is inferred as number[] | string
function getFirstName(x:number[] | string){
    return x.slice(0,3);
}