console.log("in config module now")

exports.defaults  = {
	port: 8080 || process.env.port
}
exports.myObject = {sample: "my sample object"}
exports.myFunc = ()=>{console.log("my sample func was called")}

//all exported variables, consts, functions, objects are accessible via dot notation with the "require('module name')"