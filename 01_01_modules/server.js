//How to use modules

const config = require("./config")
//Use the "require()" function built into node to use modules, instead of "import" so you don't have to use the babel_node transpiler.
//Node can now run ES6 so there is no need for Babel.
//Write all server code with ES6 notation.
//No need for semicolons at end of line.  Use "let or const", instead of "var". Use fat arrows(annonymous functions), class notation, etc.
//See Lynda tutorial "Switching to ES6 in Nodejs" on how to convert ES4 to ES6 to study the new notation

console.log(config)
console.log(config.defaults)
config.myFunc()

//use the dot notation to access exported methods and properties
