var argv = require('minimist')(process.argv.slice(2));
//console.log("Parsing command line arguments....");
console.log(argv);
//console.log(argv.u);
//console.log("Finished Parsing command line arguments...."); 
if (argv.h) {
	console.log("-u=<filename>");
}