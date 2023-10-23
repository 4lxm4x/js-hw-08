import Vimeo from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
player.on('play', function () {
  console.log('played the video!');
});
player.on('timeupdate', throttle(onTimeUpdate, 1000));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
function onTimeUpdate(event) {
  console.log(event);
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(event.seconds)
  );
}
