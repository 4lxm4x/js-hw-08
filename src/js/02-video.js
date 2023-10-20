import Vimeo from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
//console.log(typeof Vimeo);
const player = new Vimeo(iframe);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
//console.log(localStorage.getItem('videoplayer-current-time'));
player.on('play', function () {
  console.log('played the video!');
});
player.on('timeupdate', _.throttle(onTimeUpdate, 1000));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
function onTimeUpdate(event) {
  console.log(event);
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(event.seconds)
  );

  // localStorage.setItem(
  //   'videoplayer-current-time',
  //   JSON.stringify(event.seconds)
  // );
}
