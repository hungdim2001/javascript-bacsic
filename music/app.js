const s = document.querySelector.bind(document);
const ss = document.querySelectorAll.bind(document);
const heading = s("header h2");
const cdThumb = s(".cd-thumb");
const audio = s("#audio");
const cd = s(".cd");
const playBtn = s(".btn-toggle-play");
const player = s(".player");
const progress = s("#progress");
const btnNext = s(".btn-next");
const btnPre = s(".btn-prev");
const btnRan = s(".btn-random");
const btnRepeat = s(".btn-repeat");
let playlistSong;
const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  songs: [
    {
      name: "16typh",
      singer: "16typh",
      path: "./file/16typh.mp3",
      image: "./file/16typh.jpg",
    },
    {
      name: "bray",
      singer: "bray",
      path: "./file/bray.mp3",
      image: "./file/bray.jpg",
    },
    {
      name: "matcha",
      singer: "matcha",
      path: "./file/matcha.mp3",
      image: "./file/matcha.jpg",
    },
    {
      name: "tling",
      singer: "tling",
      path: "./file/tling.mp3",
      image: "./file/tling.jpg",
    },
    {
      name: "mck",
      singer: "mck",
      path: "./file/mck.mp3",
      image: "./file/mck.jpg",
    },
  ],
  render: function () {
    const htmls = this.songs.map((song) => {
      let result='';
      return  result=`<div class="song">
          <div class="thumb"
            style="background-image: url('${song.image}');"></div>
          <div class="body">
            <h3 class="title">${song.name}</h3>
            <p class="author">${song.singer}</p>
          </div>
          <div class="option">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
        `;
    });
    console.log(htmls)
    s(".playlist").innerHTML = htmls .join('');
    
    playlistSong = ss(".song");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvent: function () {
    // xu ly cd quay
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000,
      iterations: Infinity,
    });
    cdThumbAnimate.pause();
    const _this = this;
    let cdWidth = cd.offsetWidth;
    // xu ly phong to thu nho cd
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (cdWidth - scrollTop < 0) {
        cd.style.width = 0 + "px";
      } else {
        cd.style.opacity = (cdWidth - scrollTop) / 200;
        cd.style.width = cdWidth - scrollTop + "px";
      }
    };
    // xu ly khi play
    playBtn.onclick = function () {
      if (_this.isPlaying == false) {
        audio.play();
      } else {
        audio.pause();
      }
      // xu ly khi tua
    };
    //khi tien do bai hat thay doi
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
      // xu ly khi het bai
      if (audio.currentTime == audio.duration) {
        
        if (_this.isRandom === true) {
          _this.playRan();
          audio.play();
          progress.value = 0;
          _this.isPlaying = true;
        } else {
          setTimeout(function () {
            _this.nextSong();
            progress.value = 0;
            audio.play();
            _this.isPlaying = true;
          }, 3000);
        }
      }
    };
    progress.onchange = function (e) {
      let seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };
    // xu ly next song
    btnNext.onclick = function () {
      btnNext.classList.add("active");
      setTimeout(() => {
        btnNext.classList.remove("active");
      }, 300);
      if (_this.isRandom) {
        _this.playRan();
      } else {
        _this.nextSong();
      }
      audio.play();
    };
    //xy ly chay nhac
    audio.onplay = function () {
      audio.play();
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };
    audio.onpause = function () {
      audio.pause();
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };
    // xu ly pre song
    btnPre.onclick = function () {
      btnPre.classList.add("active");
      setTimeout(() => {
        btnPre.classList.remove("active");
      }, 300);
      if (_this.isRandom) {
        _this.playRan();
      } else {
        _this.preSong();
      }

      audio.play();
    };
    // xu ly radom
    btnRan.onclick = function () {
      _this.isRandom = !_this.isRandom;
      btnRan.classList.toggle("active");
    };
    // xu ly lap lai bai hat
    btnRepeat.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      btnRepeat.classList.toggle("active");
    };
  },

  hightLight: function () {
    const _this = this;

    playlistSong.forEach((item, index) => {
      item.classList.remove("hight-light");
      let nameSong = item.querySelector(".title").innerText;
      if (nameSong == _this.currentSong.name) {
        item.classList.add("hight-light");
      }
    });
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
    this.hightLight();
  },

  playRan: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.scurrentSong);
    // console.log(newIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
    this.hightLight();
  },
  preSong: function () {
    if (this.currentIndex == 0) {
      this.currentIndex = this.songs.length;
    }
    this.currentIndex--;
    this.loadCurrentSong();
    this.hightLight();
  },
  start: function () {
    audio.volume = 1;
    this.defineProperties();
    this.handleEvent();
    this.loadCurrentSong();
    this.render();
    this.hightLight();
  },
};
app.start();
