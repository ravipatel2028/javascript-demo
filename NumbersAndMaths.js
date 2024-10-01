//create a number

const score=400;
console.log(score);


//perfect way to create Number datatype
const balance=new Number(400);
console.log(balance.toString().length);  //converting to string and then printing the length of the number
console.log(balance.toFixed(2));        //printing balance with 2 decimal points.

//printing the value with precision
const num=23.8966;
console.log(num.toPrecision(3));
console.log(num.toPrecision(2));

//suppose you have 100000000 and you have difficulty reading it then u can use toLocalString to enhance its readiblity
const otherNum=100000000;
console.log(otherNum.toLocaleString());   //converts to International system
console.log(otherNum.toLocaleString('en-IN'));  //converts to Indian system

//printing Max and min value of Number Data type
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);



/*   +++++++++++++++++++++++++++++++++++++++++++++++++++ MATHS  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.round(4.4));
console.log(Math.floor(4.4));
console.log(Math.ceil(4.4));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());