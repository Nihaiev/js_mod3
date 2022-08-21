/**
 * Методи обєкта і this при звертанні до властивості в методах 
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
    name: 'мій плейлист',
    rating: 5,
    tracks: ['track-1','track-2'],
    trackCount:2, // ститична властивіть, не змінюємо не оновлюємо 
    changeName(newName) {
        this.name = newName;
    },
    addTrack(track) {
        this.tracks.push(track); //у нас в треках стоїть масив тому им пушимо
        // this.trackCount = this.tracks.length; // це дуже погане рішення 
    },
    updateRating(newRating) {
        this.rating = newRating; // у нас в рейтингу стоїть примітив тому ми перезаписуємо нове значення 
    },
    getTrackCount() {
        return this.tracks.length; // ми можемо зробити метод який буде повертати
    }
}
playlist.changeName('New name')
// console.log(playlist);

playlist.addTrack('track-3')
// console.log(playlist);

playlist.updateRating(3)

console.log(playlist.getTrackCount());
console.log(playlist);