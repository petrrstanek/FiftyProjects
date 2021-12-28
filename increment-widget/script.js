const spanTwitter = document.querySelector('.twitter');
const spanYoutube = document.querySelector('.youtube');
const spanFacebook = document.querySelector('.facebook');

let counterT = 0;
let counterY = 0;
let counterF = 0;

const intIDT = setInterval(() => {
  counterT += 50;

  spanTwitter.textContent = counterT;

  if (counterT == 12000) {
    clearInterval(intIDT);
  }
}, 1);

const intIDY = setInterval(() => {
  counterY += 1000;
  spanYoutube.textContent = counterY;
  if (counterY == 340000) {
    clearInterval(intIDY);
  }
}, 1);

const intIDF = setInterval(() => {
  counterF += 100;
  spanFacebook.textContent = counterF;
  if (counterF == 45000) {
    clearInterval(intIDF);
  }
}, 1);
