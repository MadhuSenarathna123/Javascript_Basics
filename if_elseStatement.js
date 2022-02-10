/* FORMAT 
if (condition) {
    // do this if true
} else {
    // do this if false
}


SHORT VERSION

(condition) ? true : false;

*/

var hour = 10;

if (hour < 12){
    console.log("GOOD MORNING");
} else {
    console.log("GOOD AFTERNOON");
}

var mark = 66;

if (mark >=75){
    console.log("A");
}else if (mark > 54){
    console.log("B");
}else{
    console.log("Fail")
}