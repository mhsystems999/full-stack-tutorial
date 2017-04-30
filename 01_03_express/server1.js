const express = require("express")
//Express is a wrapper or shell module for node which simplifies boiler plate code

const api_router = require("./api/api_router")

//Instatiate the express server
const expServer = express()

//Set up the root route "/"
expServer.get("/",(req, res)=>{
	res.send("Hello from Express")
})

//Setup a route for static files/rsources, such as static pages, jpg, gif, mp3, etc. 
expServer.use(express.static("./public"))

//Setup sub routes, such as an api route and organize into a module file

console.log("api router is a " + api_router)
expServer.use("/api", api_router)


expServer.listen(8080,()=>{
	console.log("Express running on port 8080")
})

