const playlist = {
    name: 'Мій плейлист',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,
}
// console.log(playlist.tracks); // достукуємося до значення властивості playlist.tracks значення властивості 
// console.log(playlist.name);
// console.log(playlist.trackCount);

const propertyName = 'tracks'; // якщо ключ записаний через змінну 

// console.log(playlist.propertyName); //поверне undefined тому що воно не знайде ключ propertyName в playlist
// console.log(playlist[propertyName]); // то тоді доскукаємося до нього через []


/**
 * Короткий запис ключа
 */

const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
    username, // якщо імя змінної співпадає з імям ключа то можна залишити лише username - це короткий запис властивості, це важливо 
    email,
}
console.log(signupData);

//27