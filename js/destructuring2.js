/**
 * Патерн "Обєкт налаштувань"
 *  - деструкткризація параметра-обєкта в підписі функції
 *  - rest при деструктуризації в підписі
 */

const showProfileInfo = function (userProfile) {
    const {
        name, tag, location, avatar, stats: { followers, views, likes },
    } = userProfile
    
    console.log(name, tag, location, avatar,followers, views, likes);
};

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

showProfileInfo(profile);