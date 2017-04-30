//How to use node as an http client.

const https = require("https")
//Use the "require()" function which is built into node, 
//instead of "import" so you don't have to use the babel_node transpiler.
//Core modules, modules that come installed with Nodejs, 
//do not require a directory path.

//Other important modules include "http", "fs", "assert", "path"
https.get("https://www.lynda.com",(res)=>{
	res.on("data",(chunk)=>{
		//"res" is an "EventEmitter" class.   See https://nodejs.org/api/events.html
		//chunk is a Buffer type, see Nodejs doc.  See https://nodejs.org/api/buffer.html

		//Try both below
		//console.log(chunk.toString())
		console.log(chunk.toString().length)
		//Response is sent back in chunks or packets and "on data" call back is call for every chunk
		//it does not wait for the entire page to finish.   This is improves server performance.
		// see toString method on Buffer.   See https://nodejs.org/api/buffer.html#buffer_buf_tostring_encoding_start_end
	})
})