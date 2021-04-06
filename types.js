
function handleRequest(url, method) {
    console.log(method);
}

var req = { url: "https://example.com", method: "GET" };

handleRequest(req.url, req.method);
//Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
