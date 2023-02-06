const lyrics = 'Tmi bondu pakhi, ami jno ki bosonto kalei tomay dekhte parini,sada sada kala kala rong jomeche sada kala';

let doesExist = lyrics.includes('pakhi');
console.log(doesExist);
doesExist = lyrics.includes("soda");
console.log(doesExist);

console.log(lyrics.indexOf('kalei'));

//startsWith
console.log(lyrics.startsWith('Tmi'));

//endWith
const myViodata = "myviodata.pdf";
console.log(myViodata.endsWith(".pdf"));