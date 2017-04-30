const http = require("http")

const server = http.createServer()
server.listen(8080,()=>{

	console.log("Server listening on port 8080")
})

server.on("request",(req, res)=>{
	//the req object contains info about the request.
	//URL, request type(GET, POST, DELETE, etc.), body, cookies, if any, etc.
	console.log(req)
	res.write(`Hello from nodejs server, Method:${req.method} URL: ${req.url} BODY:${req.body}`)
	res.end()
})


//in a browser enter url http://localhost:8080
//in a browser enter url http://localhost:8080/testurl
//Install Chrome Postman and try to POST data to the server

//To read the body ready using "on data" events to read from the buffer
//See https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
