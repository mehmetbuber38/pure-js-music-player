const container = document.querySelector('.container');
const currentTime = document.querySelector('#current-time');
const duration = document.querySelector('#duration');
const image = document.querySelector('#music-image');
const lyricsContainer = document.getElementById('lyricsContainer');
const lyricsContainerClose = document.getElementById('lyricsClose');
const lyricsImage = document.getElementById('lyricsImage');
const lyricsTitle = document.getElementById('lyricsTitle');
const next = document.querySelector('#controls #next');
const play = document.querySelector('#controls #play');
const prev = document.querySelector('#controls #prev');
const progressBar = document.querySelector('#progress-bar');
const singer = document.querySelector('#music-details .c-card__artist');
const title = document.querySelector('#music-details .c-card__title');
const ul = document.querySelector('ul');
const volume = document.querySelector('#volume');
const volumeBar = document.querySelector('#volume-bar');
let playerBgColors = [];

// Image Color Detection
const imageColorDetection = () => {
  const musicCard = document.getElementById('musicCard');
  const coverImage = document.getElementById('music-image');

  coverImage.getAttribute('src');

  coverImage.addEventListener('load', function () {
    playerBgColors = [];

    var vibrant = new Vibrant(coverImage);
    var swatches = vibrant.swatches();
    for (var swatch in swatches)
      if (swatches.hasOwnProperty(swatch) && swatches[swatch])
        playerBgColors.push(swatches['Vibrant'].getHex());
    musicCard.style.background = playerBgColors[0];
    lyricsContainer.style.background = playerBgColors[0];
  });
};

imageColorDetection();

// init constructor music player
const player = new MusicPlayer(musicList);

window.addEventListener('load', () => {
  let music = player.getMusic();
  displayMusic(music);
  displayMusicList(player.musicList);
  isPlayingNow();
});

function displayMusic(music) {
  lyricsBind.innerHTML = '';
  title.innerText = music.getName();
  singer.innerText = music.singer;
  image.src = 'img/' + music.img;
  image.alt = music.alternateText;
  audio.src = 'mp3/' + music.file;
  lyricsTitle.innerText = music.getName();
  lyricsBind.append(music.lyrics);
  lyricsImage.src = 'img/' + music.img;
  image.alt = music.alternateText;
}

lyricsMenu.addEventListener('click', () => {
  lyricsContainer.classList.remove('d-none');
  lyricsContainer.classList.add('d-block');
});

lyricsContainerClose.addEventListener('click', () => {
  lyricsContainer.classList.remove('d-block');
  lyricsContainer.classList.add('d-none');
}),
  // events
  play.addEventListener('click', () => {
    const isMusicPlay = container.classList.contains('playing');
    isMusicPlay ? pauseMusic() : playMusic();
  });

prev.addEventListener('click', () => {
  imageColorDetection();
  prevMusic();
});
next.addEventListener('click', () => {
  imageColorDetection();
  nextMusic();
});

const prevMusic = () => {
  player.prev();
  let music = player.getMusic();
  displayMusic(music);
  playMusic();
  isPlayingNow();
};

const nextMusic = () => {
  player.next();
  let music = player.getMusic();
  displayMusic(music);
  playMusic();
  isPlayingNow();
};

const pauseMusic = () => {
  container.classList.remove('playing');
  play.querySelector('i').classList = 'fa-solid fa-play';
  audio.pause();
};

const playMusic = () => {
  container.classList.add('playing');
  play.querySelector('i').classList = 'fa-solid fa-pause';
  audio.play();
};

const calculateTime = (totalSeconds) => {
  const minute = Math.floor(totalSeconds / 60);
  const second = Math.floor(totalSeconds % 60);
  const updateSecond = second < 10 ? `0${second}` : `${second}`;
  const result = `${minute}:${updateSecond}`;
  return result;
};

audio.addEventListener('loadedmetadata', () => {
  duration.textContent = calculateTime(audio.duration);
  progressBar.max = Math.floor(audio.duration);
});

audio.addEventListener('timeupdate', () => {
  progressBar.value = Math.floor(audio.currentTime);
  currentTime.textContent = calculateTime(progressBar.value);
});

progressBar.addEventListener('input', () => {
  currentTime.textContent = calculateTime(progressBar.value);
  audio.currentTime = progressBar.value;
});

let audioStatus = 'sesli';

volumeBar.addEventListener('input', (e) => {
  const value = e.target.value;
  audio.volume = value / 100;

  if (value == 0) {
    audio.muted = true;
    audioStatus = 'sessiz';
    volume.classList = 'fa-solid fa-volume-xmark';
  } else {
    audio.muted = false;
    audioStatus = 'sesli';
    volume.classList = 'fa-solid fa-volume-high';
  }
});

volume.addEventListener('click', () => {
  if (audioStatus === 'sesli') {
    audio.muted = true;
    audioStatus = 'sessiz';
    volume.classList = 'fa-solid fa-volume-xmark';
    volumeBar.value = 0;
  } else {
    audio.muted = false;
    audioStatus = 'sesli';
    volume.classList = 'fa-solid fa-volume-high';
    volumeBar.value = 100;
  }
});

const displayMusicList = (list) => {
  for (let i = 0; i < list.length; i++) {
    let liTag = ` 
        <li li-index='${i}'onclick="selectedMusic(this)" class="c-card__list-item">
        <img src='img/${list[i].img}' class="c-card__list-item-img" alt='${
      list[i].alternateText
    }'>
        <div class="c-card__list-info">
         <div class='c-card__list-info-name'>${list[i].getName()}</div>
         <div id="music-${i}" class="badge bg-primary rounded-pill">3:40</div>
         <audio class="music-${i}" src="mp3/${list[i].file}"></audio>
        </div>
    </li>
    `;
    `
    `;
    ul.insertAdjacentHTML('beforeend', liTag);

    let liAudioDuration = ul.querySelector(`#music-${i}`);
    let liAudioTag = ul.querySelector(`.music-${i}`);

    liAudioTag.addEventListener('loadeddata', () => {
      liAudioDuration.innerText = calculateTime(liAudioTag.duration);
    });
  }
};

const selectedMusic = (li) => {
  player.index = li.getAttribute('li-index');
  displayMusic(player.getMusic());
  playMusic();
  isPlayingNow();
};

const isPlayingNow = () => {
  for (let li of ul.querySelectorAll('li')) {
    if (li.classList.contains('playing')) {
      li.classList.remove('playing');
    }
    if (li.getAttribute('li-index') == player.index) {
      li.classList.add('playing');
    }
  }
};

audio.addEventListener('ended', () => {
  nextMusic();
});

// warning message
console.log(
  '%cNot: Burada ki müziklerden hiç bir şekilde ticari kar elde edilmemektedir.',
  'background: #222; color: #bada55;'
);
