import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const currentTime = 'videoplayer-current-time';
const savedCurrentTime = localStorage.getItem(currentTime);

const onPlay = function ({ seconds }) {
  localStorage.setItem(currentTime, seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

if (savedCurrentTime) {
  player.setCurrentTime(savedCurrentTime);
} else {
  savedCurrentTime = 0;
}
