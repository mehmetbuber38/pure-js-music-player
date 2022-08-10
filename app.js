const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .c-card__title");
const singer = document.querySelector("#music-details .c-card__artist");
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");
const duration = document.querySelector("#duration");
const currentTime = document.querySelector("#current-time");
const progressBar = document.querySelector("#progress-bar");
const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");
const ul = document.querySelector("ul");

// init constructor music player
const player = new MusicPlayer(musicList);

window.addEventListener("load", () => {
    let music = player.getMusic();
    displayMusic(music);
    displayMusicList(player.musicList);
    isPlayingNow();
});

function displayMusic(music) {
    title.innerText = music.getName();
    singer.innerText = music.singer;
    image.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
}

// events
play.addEventListener("click", () => {
    const isMusicPlay = container.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();
});

prev.addEventListener("click", () => { prevMusic(); });
next.addEventListener("click", () => { nextMusic(); });

const prevMusic = () => {
    player.prev();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
    isPlayingNow();
}

const nextMusic = () => {
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
    isPlayingNow();
}

const pauseMusic = () => {
    container.classList.remove("playing");
    play.querySelector("i").classList = "fa-solid fa-play";
    audio.pause();

}

const playMusic = () => {
    container.classList.add("playing");
    play.querySelector("i").classList = "fa-solid fa-pause";
    audio.play();
}

const calculateTime = (totalSeconds) => {
    const minute = Math.floor(totalSeconds / 60);
    const second = Math.floor(totalSeconds % 60);
    const updateSecond = second < 10 ? `0${second}` : `${second}`;
    const result = `${minute}:${updateSecond}`;
    return result;
}

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
})

audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);
})

progressBar.addEventListener("input", () => {
    currentTime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value;
});


let audioStatus = "sesli";

volumeBar.addEventListener("input", (e) => {
    const value = e.target.value;
    audio.volume = value / 100;
    if (value == 0) {
        audio.muted = true;
        audioStatus = "sessiz";
        volume.classList = "fa-solid fa-volume-xmark";
    } else {
        audio.muted = false;
        audioStatus = "sesli";
        volume.classList = "fa-solid fa-volume-high";
    }
});


volume.addEventListener("click", () => {
    if (audioStatus === "sesli") {
        audio.muted = true;
        audioStatus = "sessiz";
        volume.classList = "fa-solid fa-volume-xmark";
        volumeBar.value = 0;
    } else {
        audio.muted = false;
        audioStatus = "sesli";
        volume.classList = "fa-solid fa-volume-high";
        volumeBar.value = 100;
    }
});

const displayMusicList = (list) => {
    for (let i = 0; i < list.length; i++) {

        // JS Template Literal
        let liTag = ` 
        <li li-index='${i}'onclick="selectedMusic(this)" class="c-card__list-item">
        <img src='img/${list[i].img}' class="c-card__list-item-img">
        <div class="c-card__list-info">
         <div class='c-card__list-info-name'>${list[i].getName()}</div>
         <div id="music-${i}" class="badge bg-primary rounded-pill">3:40</div>
         <audio class="music-${i}" src="mp3/${list[i].file}"></audio>
        </div>
    </li>
    `; `
    `
        ul.insertAdjacentHTML("beforeend", liTag);

        let liAudioDuration = ul.querySelector(`#music-${i}`);
        let liAudioTag = ul.querySelector(`.music-${i}`);

        liAudioTag.addEventListener("loadeddata", () => {
            liAudioDuration.innerText = calculateTime(liAudioTag.duration);
        }
        )
    }


    // Image Color Detection
    const colorThief = new ColorThief();
    const coverImage = document.getElementById('music-image');

    // Make sure image is finished loading
    if (coverImage.complete) {
        const mainColor = colorThief.getColor(coverImage);

        var color = "rgb(" + mainColor[0] + "," + mainColor[1] + "," + mainColor[2] + ")";
        coverImage.parent().css("background-color", color);
    } else {
        image.addEventListener('load', function () {
            colorThief.getColor(coverImage);
        });
    }

}
const selectedMusic = (li) => {
    player.index = li.getAttribute("li-index");
    displayMusic(player.getMusic());
    playMusic();
    isPlayingNow();
}

const isPlayingNow = () => {
    for (let li of ul.querySelectorAll("li")) {
        if (li.classList.contains("playing")) {
            li.classList.remove("playing");
        }
        if (li.getAttribute("li-index") == player.index) {
            li.classList.add("playing");
        }
    }
}

audio.addEventListener("ended", () => {
    nextMusic();
});








