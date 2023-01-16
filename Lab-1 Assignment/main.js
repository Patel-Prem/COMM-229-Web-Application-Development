import { halfOf, multiply } from "./lib.js";
import { flag, touch } from "./changevalue.js";
import defaultFunction from "./defaultfunction.js";


console.log(halfOf(84));
console.log(multiply(25));

console.log("initial value of flag is " + flag + " befor calling touch function");
touch();
console.log("final value of flag is " + flag + " befor calling touch function");

defaultFunction();
