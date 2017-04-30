const express = require("express")
const server = express()


server.set("view engine", "ejs")  
//Sets express to render templates in ejs format in the "views" folder.

server.use(express.static("public"))
//To server statics pages automatically from /public
//Do not add directory path to reference the static file

server.get("/",(req, res)=>{
	res.render("index") //use render method to use ejs template "index.ejs" in views folder.
})

server.listen(8080, ()=>{
	console.log("Express is listening on port 8080")
})