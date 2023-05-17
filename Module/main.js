import { message,test,user } from "./library.js";
console.log(message);
document.body.innerHTML=message;
user();
let a=new test();

/*use of alias
import{message,user as us,test}from "./library.js";
us();
*/


/* To include all
import * as hello from "./library.js"
console.log(hello.message);
document.body.innerHTML=hello.message;
hello.user();
let a =new hello.test();
*/


//default function is called
import{default as hello} from "./library.js"
hello();
/* or you can use shortcut method
import hello from "./library.js";
hello();
*/