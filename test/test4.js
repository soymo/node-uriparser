var uriparser = require("../lib/bindings.js");
var url = "http://eloszka.pl/X?X";
console.log(url, uriparser.parse(url));