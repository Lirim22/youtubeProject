const profileImage = document.getElementsByClassName("profile-image")[0];

const accountSidebar = document.getElementsByClassName("account-sidebar")[0];

const accountToggleFunction = function () {
  accountSidebar.classList.toggle("display-flex");
};
profileImage.addEventListener("click", accountToggleFunction);

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

const body = document.getElementsByTagName("body")[0];
const header = document.getElementById("header");
const root = document.getElementById("root");
const darkDayMode = document.getElementById("dark-day-mode");

darkDayMode.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
});

const menuBtn = document.getElementById("menu-btn");
const sidebarMenu = document.querySelector(".aside-element");

const menuBtnToggle = function () {
  sidebarMenu.classList.toggle("display-flex");
};

menuBtn.addEventListener("click", menuBtnToggle);

const subscribeBtn = document.querySelector(".subscribe-button");
function handleSubscribeClick() {
  if (subscribeBtn.innerHTML === "Subscribe") {
    subscribeBtn.innerHTML = "Subscribed";
    subscribeBtn.style.color = "red";
  } else {
    subscribeBtn.innerHTML = "Subscribe";
    subscribeBtn.style.color = "White";
  }
}

subscribeBtn.addEventListener("click", handleSubscribeClick);

const commentInput = document.getElementsByClassName("add-comment-input")[0];
const cancelBtn = document.querySelector(".cancel");
const commentBtn = document.querySelector(".comment");

function handleCommentInput() {
  const commentInputLength = commentInput.value.length;
  
  commentBtn.disabled = commentInputLength <= 0;
  cancelBtn.disabled = commentInputLength <= 0;
}

commentInput.addEventListener("input", handleCommentInput);

const commentParent = document.querySelector(".comments");
const comments = [
  {
    src: "./assets/icons/default-img-transparent.png",
    commentDescription: "Very nice video",
    name: "Granit Xhaka",
    time: "four months ago"
  },
  {
    src: "./assets/icons/default-img-transparent.png",
    commentDescription: "Very nice video",
    name: "Xherdan Shaqiri",
    time: "three weeks ago"
  },
  {
    src: "./assets/icons/default-img-transparent.png",
    commentDescription: "Very nice video",
    name: "Cr7",
    time: "six weeks ago"
  },
  {
    src: "./assets/icons/default-img-transparent.png",
    commentDescription: "Very nice video",
    name: "Elon Musk",
    time: "a month ago"
  }

];
const convertCommentsToHtml = [];

comments.forEach((commentsArray) =>{
let nextComment;
nextComment = `<div class="comment-profile">
<a href="#">
  <img
    class="profile-logo"
    src=${commentsArray.src}
  />
</a>
<div class="comment">
    <b>${commentsArray.name}</b> <em>${commentsArray.time} </em> <br>
    <p>${commentsArray.commentDescription}</p>
    
  <div class="comment-react">
    <i class="fa-regular fa-thumbs-up"></i>
    <i class="fa-regular fa-thumbs-down"></i>
    <h5>Reply</h5>
  </div>
 </div>
</div>`;
convertCommentsToHtml.push(nextComment);
});
commentParent.innerHTML = convertCommentsToHtml.join("");

const commentChild = document.querySelector(".comment-profile");

function createComment() {

  let myComment = {
    src: "./assets/icons/profiledeafult.png",
    commentDescription: commentInput.value,
    name: "Lirim Berisha",
    time: "now"
  };

  comments.unshift(myComment);

  // Generate HTML code for all comments, including the new comment
  let allCommentsHtml = comments.map((comment) => {
    return `<div class="comment-profile">
      <a href="#">
        <img class="profile-logo" src=${comment.src} />
      </a>
      <div class="comment">
        <b>${comment.name}</b> <em>${comment.time} </em> <br>
        <p>${comment.commentDescription}</p>

        <div class="comment-react">
          <i class="fa-regular fa-thumbs-up"></i>
          <i class="fa-regular fa-thumbs-down"></i>
          <h5>Reply</h5>
        </div>
      </div>
    </div>`;
  }).join("");

  commentParent.innerHTML = allCommentsHtml;
}
commentBtn.addEventListener("click", createComment);

function clearInput() {
  commentInput.value = "";
}
cancelBtn.addEventListener("click", clearInput);

const nextVideosDiv = [
  {
    class: "padding",
    src: "./assets/all/Enis-Rama.jpg",
    length: "7.42",
    tittle: "Me teper vetedijesim",
    channel: "Muslimani Ideal",
    views: "956K - 7 months ago",
  },
  {
    src: "./assets/Nature/nature-img2.jpg",
    length: "9.56",
    tittle: "FLYING OVER ITALY (4K UHD) Amazing Beautiful Nature Scenery",
    channel: "Nature",
    views: "356K - 2 months ago",
  },
  {
    src: "./assets/cars/brabus-gclass.jpg",
    length: "2.36",
    tittle: "The New Mercedes AMG G63 G Class Test Drive",
    channel: "Cars",
    views: "1M - 3 months ago",
  },
  {
    src: "./assets/css/css-img2.jpg",
    length: "4.56",
    tittle: "CSS Tutorial || Full Course for Beginners",
    channel: "CSS",
    views: "254K - 6 months ago",
  },
  {
    src: "./assets/Nature/nature-img5.jpg",
    length: "3.56",
    tittle: "Mountains in Australia",
    channel: "Nature",
    views: "246K - 2 months ago",
  },
  {
    src: "./assets/cars/audi-interior.jpg",
    length: "4.24",
    tittle: "2023 Audi S8 Exclusive - Sound, Interior and Exterior",
    channel: "Cars",
    views: "2M - 3 months ago",
  },
  {
    src: "./assets/Quran/el-kehf.webp",
    length: "22.56",
    tittle: "Quran recitation | El-Kehf",
    channel: "Muslimani Ideal",
    views: "956K - 3 months ago",
  },
  {
    src: "./assets/Nature/nature-img6.jpg",
    length: "3.56",
    tittle:
      "Driving in Switzerland 6: From Grindelwald to Lauterbrunnen | 4K 60fps",
    channel: "Nature",
    views: "756K - 2 months ago",
  },
  {
    src: "./assets/html/html-img2.png",
    length: "6.56",
    tittle: "What is HTML?",
    channel: "Html",
    views: "356K - 4 months ago",
  },
  {
    src: "./assets/cars/bmw-x7.jpg",
    length: "5.52",
    tittle: "2023 BMW X7 M60i - New Wild SUV in detail",
    channel: "Cars",
    views: "821K - 6 months ago",
  },
];

const allNextVideoContainer = document.querySelector(".next-videos");
const convertNextVideosTohtml = [];
nextVideosDiv.forEach((nextVideosArray) => {
  let nextVideo;
  nextVideo = `<div class="video" id="${nextVideosArray.class}">
  <div class="image">
        <a onclick ="sessionStorage.setItem('imgSrc','${nextVideosArray.src}'),sessionStorage.setItem('tittle','${nextVideosArray.tittle}'),
        sessionStorage.setItem('channelImg','${nextVideosArray.src}'),sessionStorage.setItem('channel','${nextVideosArray.channel}')" href ="">
          <img class="next-video" src="${nextVideosArray.src}">
          <h5 class="length">${nextVideosArray.length}</h5>
      </div>
          <div class="next-videos-description">
              <h5>${nextVideosArray.tittle}</h5> <br>
              <p class="nv-channel">${nextVideosArray.channel}</p> <br>
              <p >${nextVideosArray.views}</p>
      </div>
</div>`;
  convertNextVideosTohtml.push(nextVideo);
});
allNextVideoContainer.innerHTML = convertNextVideosTohtml.join("");

const nextVideosImg = document.querySelectorAll(".next-video");
const videoPlaying = document.querySelector(".big-img");
const tittle = document.querySelector(".tittle");
const channel = document.getElementById("channel");
const channelImg = document.getElementById("channel-img");

videoPlaying.src =
  sessionStorage.getItem("imgSrc") || "./assets/Nature/nature-img8.jpg";
tittle.innerHTML =
  sessionStorage.getItem("tittle") ||
  "FLYING OVER NORWAY (4K UHD) Amazing Beautiful Nature";
channel.innerHTML = sessionStorage.getItem("channel") || "Nature";
channelImg.src =
  sessionStorage.getItem("channelImg") || "./assets/Nature/nature-img7.jpg";
