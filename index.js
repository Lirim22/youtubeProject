const profileImage = document.getElementsByClassName("profile-image")[0];

const accountSidebar = document.getElementsByClassName("account-sidebar")[0];

const accountToggleFunction = function () {
  accountSidebar.classList.toggle("display-flex");
};
profileImage.addEventListener("click", accountToggleFunction);

const menuBtn = document.getElementById("menu-btn");
const sidebarMenu = document.querySelector("#aside-parent");
const shortSidebarMenu =
  document.getElementsByClassName("short-sidebar-menu")[0];

const menuBtnToggle = function () {
  sidebarMenu.classList.toggle("hidden");
  shortSidebarMenu.classList.toggle("hidden");
};
menuBtn.addEventListener("click", menuBtnToggle);

const body = document.getElementsByTagName("body")[0];
const header = document.getElementById("header");
const darkDayMode = document.getElementById("dark-day-mode");
darkDayMode.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
});

const microphoneBtn = document.querySelector(".mic-btn");
const microphone = document.querySelector(".fa-microphone");

microphone.addEventListener("click", function (){
 if (microphone.classList.contains("fa-microphone")){
  microphone.classList.remove("fa-microphone")
  microphone.classList.add("fa-microphone-slash")
 } else {
  microphone.classList.add("fa-microphone")
 }
  
});

const videos = [
  {
    src: "./assets/Quran/el-kehf.webp",
    channelSrc: "./assets/channels/muslimanilogoezez.jpg",
    videoDescription: "Beautiful Quran recitation",
    channelText: "Muslimani Ideal",
    views: "800k views | 8 months ago",
    category: "religion",
    length: "23:12",
  },

  {
    src: "./assets/all/chess-logo.jpg",
    channelSrc: "./assets/all/chess-logo.jpg",
    videoDescription: "Best checkmates",
    channelText: "Chess",
    views: "400k views | 3 months ago",
    category: "all",
    length: "10:20",
  },
  {
    src: "./assets/all/Bne vs Astralis.png",
    channelSrc: "./assets/all/csgo-logo.png",
    videoDescription: "BNE vs ASTRALIS",
    channelText: "CS GO",
    views: "250k views | 2 months ago",
    category: "all",
    length: "45:48",
  },
  {
    src: "./assets/all/mercedes vs bmw.jpg",
    channelSrc: "./assets/channels/cars-logo.jpg",
    videoDescription: "Mercedes vs BMW",
    channelText: "Cars",
    views: "850k views | 9 months ago",
    category: "all",
    length: "5:43",
  },
  {
    src: "./assets/all/sports-logo.jpg",
    channelSrc: "./assets/channels/artahd.png",
    videoDescription: "The best sports for good health",
    channelText: "Sports",
    views: "2M views | 7 months ago",
    category: "all",
    length: "3:47",
  },
  {
    src: "./assets/css/css-img4.png",
    channelSrc: "./assets/css/css-channel.png",
    videoDescription: "What we can do with css?",
    channelText: "CSS",
    views: "125k views | 5 months ago",
    category: "css",
    length: "7:31",
  },
  {
    src: "./assets/html/html-img2.png",
    channelSrc: "./assets/html/html-channel.png",
    videoDescription: "What is HTML?",
    channelText: "HTML",
    views: "125k views | 3 months ago",
    category: "html",
    length: "5:12",
  },
  {
    src: "./assets/html/html-img1.webp",
    channelSrc: "./assets/html/html-channel.png",
    videoDescription: "HTML vs HTML5?",
    channelText: "HTML",
    views: "445k views | 2 months ago",
    category: "html",
    length: "4:31",
  },
  {
    src: "./assets/html/html-img3.webp",
    channelSrc: "./assets/html/html-channel.png",
    videoDescription: "HTML tags",
    channelText: "HTML",
    views: "945k views | 9 months ago",
    category: "html",
    length: "8:27",
  },
  {
    src: "./assets/html/html-img8.jpg",
    channelSrc: "./assets/html/html-channel.png",
    videoDescription: "What can we do with HTML?",
    channelText: "HTML",
    views: "945k views | 9 months ago",
    category: "html",
    length: "10:47",
  },
  {
    src: "./assets/html/html-img6.png",
    channelSrc: "./assets/html/html-channel.png",
    videoDescription: "HTML tags || Part two",
    channelText: "HTML",
    views: "945k views | 9 months ago",
    category: "html",
    length: "2:50",
  },
  {
    src: "./assets/css/css-img2.jpg",
    channelSrc: "./assets/css/css-channel.png",
    videoDescription: "Css full course for begginer",
    channelText: "CSS",
    views: "125k views | 5 months ago",
    category: "css",
    length: "37:55",
  },
  {
    src: "./assets/css/css-img1.webp",
    channelSrc: "./assets/css/css-channel.png",
    videoDescription: "HTML vs CSS ?",
    channelText: "CSS",
    views: "125k views | 5 months ago",
    category: "css",
    length: "3:21",
  },
  {
    src: "./assets/css/css-img3.jpeg",
    channelSrc: "./assets/css/css-channel.png",
    videoDescription: "Css property",
    channelText: "CSS",
    views: "125k views | 5 months ago",
    category: "css",
    length: "4:52",
  },
  {
    src: "./assets/css/css-img5.jpg",
    channelSrc: "./assets/css/css-channel.png",
    videoDescription: "Introduction to CSS ",
    channelText: "CSS",
    views: "125k views | 5 months ago",
    category: "css",
    length: "3:47",
  },
  {
    src: "./assets/cars/brabus-gclass.jpg",
    channelSrc: "./assets/channels/cars-logo.jpg",
    videoDescription: "G class 2022",
    channelText: "Cars",
    views: "800k views | 8 months ago",
    category: "cars",
    length: "2:27",
  },
  {
    src: "./assets/cars/sq8-audi.jpg",
    channelSrc: "./assets/channels/cars-logo.jpg",
    videoDescription: "Audi sQ8 2022",
    channelText: "Cars",
    views: "670k views | 8 months ago",
    category: "cars",
    length: "8:42",
  },
  {
    src: "./assets/cars/sclass-interior.jpg",
    channelSrc: "./assets/channels/cars-logo.jpg",
    videoDescription: "S class 2022",
    channelText: "Cars",
    views: "1M views | 8 months ago",
    category: "cars",
    length: "4:23",
  },
  {
    src: "./assets/cars/bmw-x7.jpg",
    channelSrc: "./assets/channels/cars-logo.jpg",
    videoDescription: "BMW X7 2022",
    channelText: "Cars",
    views: "250k views | 8 months ago",
    category: "cars",
    length: "6:47",
  },
  {
    src: "./assets/cars/audi-interior.jpg",
    channelSrc: "./assets/channels/cars-logo.jpg",
    videoDescription: "2023 Audi S8 Exclusive - Sound, Interior and Exterior",
    views: "920k views | 8 months ago",
    channelText: "Cars",
    category: "cars",
    length: "4.24",
  },
  {
    src: "./assets/cars/gclass-interior.jpg",
    channelSrc: "./assets/channels/cars-logo.jpg",
    videoDescription: "G class interior review",
    channelText: "Cars",
    views: "600k views | 8 months ago",
    category: "all cars",
    length: "12:47",
  },
  {
    src: "./assets/all/Enis-Rama.jpg",
    channelSrc: "./assets/channels/muslimanilogoezez.jpg",
    videoDescription: "Respekti ndaj prinderve",
    channelText: "Enis Rama",
    views: "3M views | 11 months ago",
    category: "all religion",
    length: "17:31",
  },
  {
    src: "./assets/Quran/el-mulk.jpg",
    channelSrc: "./assets/channels/muslimanilogoezez.jpg",
    videoDescription: "Beautiful Quran recitation|| Surah el-Mulk",
    channelText: "Muslimani Ideal",
    views: "800k views | 8 months ago",
    category: "religion",
    length: "23:47",
  },
  {
    src: "./assets/Quran/kids-recitation.jpg",
    channelSrc: "./assets/channels/muslimanilogoezez.jpg",
    videoDescription: "Quran recitation from muslim kids",
    channelText: "Muslimani Ideal",
    views: "300k views | 8 months ago",
    category: "religion",
    length: "1:57",
  },

  {
    src: "./assets/Quran/mecca.jpg",
    channelSrc: "./assets/channels/muslimanilogoezez.jpg",
    videoDescription: "Quran recitation in Mecca",
    channelText: "Muslimani Ideal",
    views: "800k views | 8 months ago",
    category: "religion all",
    length: "5:27",
  },
  {
    src: "./assets/Nature/nature-img2.jpg",
    channelSrc: "./assets/Nature/nature-img3.jpg",
    videoDescription: "Flying over Germany",
    channelText: "Nature",
    views: "1M views | 6 months ago",
    category: "nature",
    length: "9:42",
  },
  {
    src: "./assets/Quran/kids2-recitation.jpg",
    channelSrc: "./assets/channels/muslimanilogoezez.jpg",
    videoDescription: "Quran recitation from muslim kids",
    channelText: "Muslimani Ideal",
    views: "1M views | 8 months ago",
    category: "religion",
    length: "7:26",
  },
  {
    src: "./assets/Nature/nature-img1.jpg",
    channelSrc: "./assets/Nature/nature-img3.jpg",
    videoDescription: "Danimark 4k||60fps",
    channelText: "Nature",
    views: "3M views | 6 months ago",
    category: "nature",
    length: "25:47",
  },
  {
    src: "./assets/Nature/nature-img3.jpg",
    channelSrc: "./assets/Nature/nature-img3.jpg",
    videoDescription: "Best rivers in the world",
    channelText: "Nature",
    views: "580k views | 6 months ago",
    category: "nature",
    length: "1:48",
  },
  {
    src: "./assets/Nature/nature-img4.jpg",
    channelSrc: "./assets/Nature/nature-img3.jpg",
    videoDescription: "Best villages in Europe",
    channelText: "Nature",
    views: "900k views | 6 months ago",
    category: "nature",
    length: "6:42",
  },
  {
    src: "./assets/Nature/nature-img5.jpg",
    channelSrc: "./assets/Nature/nature-img3.jpg",
    videoDescription: "Mountains in Europe",
    channelText: "Nature",
    views: "700k views | 2 months ago",
    category: "nature",
    length: "4:27",
  },
  {
    src: "./assets/Nature/nature-img6.jpg",
    channelSrc: "./assets/Nature/nature-img3.jpg",
    videoDescription: "Sweden roads",
    channelText: "Nature",
    views: "1M views | 6 months ago",
    category: "all nature",
    length: "7:13",
  },
];
const allVideosContainer = document.querySelector(".video-container");
const convertDataTohtml = [];
videos.forEach((m) => {
  let video;
  video = `
  <div class="videos ${m.category}">
  <a onclick ="sessionStorage.setItem('imgSrc','${m.src}'),sessionStorage.setItem('tittle','${m.videoDescription}'),
  sessionStorage.setItem('channelImg','${m.channelSrc}'),sessionStorage.setItem('channel','${m.channelText}')" href="app.html"
      ><img
        src="${m.src}"
        class="videos-img"
        alt=""
    /></a>
    <h5 class="video-length">${m.length}</h5>
    <div class="video-channel">
      <div>
        <img
        class="channel-logo"
          src="${m.channelSrc}"
          alt=""
        />
      </div>
      <div>
        <h4>${m.videoDescription}</h4>
        <p class="channel-p">${m.channelText}</p>
        <p class="channel-p">${m.views}</p>
      </div>
    </div>
  </div>`;
  convertDataTohtml.push(video);
});
allVideosContainer.innerHTML = convertDataTohtml.join("");

const Allvideos = document.querySelectorAll(".videos");

window.onload = function allVideos() {
  Allvideos.forEach((m) => {
    if (m.classList.contains("all")) {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  });
};

const allBtn = document.querySelector(".navbar-btn.all");
allBtn.addEventListener("click", function () {
  Allvideos.forEach((m) => {
    if (m.classList.contains("all")) {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  });
});

const htmlBtn = document.querySelector(".navbar-btn.html");
htmlBtn.addEventListener("click", function () {
  Allvideos.forEach((m) => {
    if (m.classList.contains("html")) {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  });
});

const cssBtn = document.querySelector(".navbar-btn.css");
cssBtn.addEventListener("click", function () {
  Allvideos.forEach((m) => {
    if (m.classList.contains("css")) {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  });
});

const carsBtn = document.querySelector(".navbar-btn.cars");
carsBtn.addEventListener("click", function () {
  Allvideos.forEach((m) => {
    if (m.classList.contains("cars")) {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  });
});

const natureBtn = document.querySelector(".navbar-btn.nature");
natureBtn.addEventListener("click", function () {
  Allvideos.forEach((m) => {
    if (m.classList.contains("nature")) {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  });
});

const religionBtn = document.querySelector(".navbar-btn.religion");
religionBtn.addEventListener("click", function () {
  Allvideos.forEach((m) => {
    if (m.classList.contains("religion")) {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  });
});
