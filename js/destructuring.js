/**
 * Деструктуризація обєкта
 * - значення за замовчуванням 
 *  - Імя змінної відрізняється від імені властивості
 */

const playlist = {
    name: 'My playlist',
    rating: 5,
    track: ['track1', 'track2', 'track3'],
    trackCount: 3,
};

// ми зараз навчимося розпаковувати обєкти, більшість наших даних будуть обєкти
//
// console.log(
//     playlist.name,
//     playlist.rating,
//     playlist.track,
//     playlist.trackCount,
// );
// у нас тут кілька разів повторюється playlist це все візуальне сміття
// щоб від цього відійти придумали деструктиризацію

const {rating, name, track, trackCount  } = playlist; // коли ми зліва від = бачимо пузаті дужки {} то це деструктиризація (це не літерал обєкта)

// ця штука просто створює локальну змінну "rating"
console.log(rating);
console.log(name);
console.log(track);
console.log(trackCount);
