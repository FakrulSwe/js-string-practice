function reverseWord(str){
    let words = str.split(' ');
    const result = [];
    for(let i = words.length; i>=0; i--){
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}

const string = "I am a good boy";
const reversed = reverseWord(string);
console.log('reversed output: ',reversed);