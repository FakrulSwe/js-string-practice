
// First Problem
// Check input & total output to given a number.
function mindGame(num){
    if(typeof num != 'number'){
        return"Please input a number.";
    }
    else{
        const multipleNum = num *3;
        const addNum = multipleNum + 10;
        const divideNum = addNum / 2;
        const totalNum = divideNum - 5;
        return totalNum;
    }
}

const number = mindGame(5);
// console.log(number);


// Second Problem
// Check input is string & check string is odd or even.
function evenOdd(str){
    if(typeof str != "string"){
        return "Please input a string";
    }else{
        if(str.length % 2 == 0){
            return "even";
        }
        else{
            return "odd";
        }
    }
}

const checkString = evenOdd("jack ma");
// console.log(checkString);


// Third Problem
// Check input  is number & then given number minus 7, then that total minus number if is the total minus number is less then 7 then the minusNum is return.If this condition is false then return num * 2
function isLGSeven(num){
    if(typeof num != "number"){
        return "Please input a array number";
    }
    else{
        const minusNum = num - 7;
        if(minusNum < 7){
            return minusNum;
        }
        else{
            return num * 2;
        }
    }
}

const LGSeven = isLGSeven(12);
// console.log(LGSeven);


// Fourth Problem
// Check array & in the array find total bed data;
function findingBadData(age){
    if(Array.isArray(age)){
        let totalBedData = 0;
    for (let i = 0; i < age.length; i++) {
        const element = age[i];
        if(element < 0){
            totalBedData = totalBedData + 1;
        } 
    }
    return totalBedData;
    }
    else{
        return "Please input a array number";
    }
}

const ageData = [12, -2, 0, -15, -11];
const findAge = findingBadData(ageData);
// console.log(findAge);


// Fifth Problem
// Chea
function gemsToDiamond(friend1, friend2, friend3){
    if(typeof friend1 == "number" && typeof friend2 == "number" && typeof friend3 == "number"){
        const firstFriend = friend1 *21;
    const secondFriend = friend2 * 32;
    const thirdFriend = friend3 * 43;
    
    const totalGem = firstFriend + secondFriend + thirdFriend;
    const condition = 1000 *2;
    if(totalGem >= condition){
        const total = totalGem - 2000;
        return total;
    }
    else{
        return totalGem;
    }
    }
    else{
        return "Please provide all valid numbers";
    }
}

const gems = gemsToDiamond(0, 70, 5);
console.log(gems);



