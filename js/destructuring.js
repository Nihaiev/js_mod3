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

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, location, avatar, stats:{ followers, views, likes } } = profile; // stats:{ followers, views, likes } глибока деструкрутризація в глибигу
// у змінній stats лижить обєкт і ми нище деструктуруємо його

// но що якщо нам треба деструкрувати вкладений обєкт stats
// ми просто робимо ще одну деструктуризацію
// const { followers, views, likes } = stats;


// console.log(name, tag, location, avatar, followers, views, likes);

/**
 * Деструктуризація масивів 
 * */

// інколи нам треба деструктурувати масив і на відмість від обєктів масиви деструктуруються по порядку 
const rgb = [255, 100, 80];
const [red, green, blue] = rgb; // деструктуризація масиву, зліва від = квадратні скобки
// console.log(red, green, blue);

const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
};
const entries = Object.entries(authors);
// console.log(entries); //Object.entries повертає масив масивів, де кожен елемент ще один масив нульовим значенням стоїть ключ а першим значення
// (const [name, rating] of entries) рівень 3
// for (const [name, rating] of entries) {
//     // console.log(entry);

//     // рівень 2
//     // const [name, rating] = entry;

//     // рівень 1
//     // const name = entry[0];
//     // const rating = entry[1]

//     console.log(name, rating);
// }



/**
 * Операція rest (збір)
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

const { name, tag, location, ...restProps } = profile;
/**
 * бувають такі випадки коли треба викинути з обєкта визначені властивості  в локільній змінні
 * а всі інші властивості зібрати в якийсь інший обєкт 
 *  */
// const restProps = {
//     avatar: profile.avatar,
//     stats: profile.stats
// } // ось як воно працює

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);