function maxInArray(numbers){
    let largest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if(largest < element){
            largest = element;
        }  
    }
    return largest;
}

const height = [167, 190, 120, 265, 137, 65];
const tallest = maxInArray(height);
console.log(tallest);