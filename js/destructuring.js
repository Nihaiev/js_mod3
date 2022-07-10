/**
 * Деструктуризація обєкта
 * - значення за замовчуванням 
 *  - Імя змінної відрізняється від імені властивості
 */

// деструктуризація в самій базовій формі 
// const playlist = {
//     name: 'My playlist',
//     rating: 5,
//     track: ['track1', 'track2', 'track3'],
//     trackCount: 3,
// };

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

// const {rating, name, track, trackCount: numberOfTracks,  } = playlist; // коли ми зліва від = бачимо пузаті дужки {} то це деструктиризація (це не літерал обєкта)

// ця штука просто створює локальну змінну "rating"
// console.log(rating);
// console.log(name);
// console.log(track);
// console.log(trackCount);
// console.log(numberOfTracks); // що якщо наша локальна змінна має мати інше імя ніж властивість на обєкті, ось у нас є trackCount но ми хочемо щоб він називався numberOfTrack
/**
 * Ми буквально кажемо в локальну змінну numberOfTracks поклади значення з trackCount з обєкту playlist
 * воно просто розділяється : зліва імя властивості а справа імя локальної змінної
 * якщо нам треба добавити дефолтне значення, присвоюємо в локальну змінну numberOfTracks = 0
 */


/*
 * Глибока деструктуризація
 */

const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};

const {name, tag, location, avatar } = profile;
// но що якщо нам треба деструкрувати вкладений обєкт stats
// ми просто робимо ще одну деструктуризацію

const { followers, views, likes } = stats;

console.log(name, tag, location, avatar, followers, views, likes );