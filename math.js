const result = Math.pow(3, 2);
console.log(result);

//---------//

const num1 = 25;
const num2 = 45;

//Math.abs = don't keep negative number or positive number
const gap = Math.abs(num1 - num2);
console.log(gap);

if(gap<5){
    console.log("You guys can be friends");
}
else{
    console.log("You guys stay alone");
}


// ------------- //
// Math.round = keep round number
const number = 4.45786;
const fullNumber = Math.round(number);
console.log(fullNumber);

// Math.ceil = don't keep lower round
const number2 =Math.ceil(4.0000001);
console.log(number2);

// Math.floor = don't keep upper round
const number3 =Math.floor(4.9999999);
console.log(number3);

// ------------- //
// Random
console.log(Math.random());

const random = Math.random()*100;
console.log(random);

const random2 =Math.round(Math.random()*1000);
console.log(random2);

