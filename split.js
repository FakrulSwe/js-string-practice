const lyrics = 'Tmi bondu kala pakhi, ami jno ki bosonto kalei tomay dekhte parini,sada sada kala kala rong jomeche sada kala';

const parts = lyrics.split(' ');
console.log(parts);

const sentences = lyrics.split(',');
console.log(sentences);

const chars = lyrics.split('');
console.log(chars);

const partial = lyrics.slice(4, 10);
console.log(partial);

const partial2 = lyrics.substring(4, 10);
console.log(partial2);

const lines = [
    'Tmi bondu kala pakhi',
    ' ami jno ki bosonto kalei tomay dekhte parini',
    'sada sada kala kala rong jomeche sada kala'
  ];

  const newSong = lines.join(':');
  console.log(newSong);