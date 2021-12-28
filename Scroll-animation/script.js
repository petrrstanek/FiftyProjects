const firstLeftBox = document.querySelector('.firstLeftBox');
const firstRightBox = document.querySelector('.firstRightBox');
const secondLeftBox = document.querySelector('.secondLeftBox');
const secondRightBox = document.querySelector('.secondRightBox');

document.addEventListener('scroll', (e) => {
  if (window.scrollY > 100) {
    firstLeftBox.classList.add('activeLeft');
  } else {
    firstLeftBox.classList.remove('activeLeft');
  }
  if (window.scrollY > 300) {
    firstRightBox.classList.add('activeRight');
  } else {
    firstRightBox.classList.remove('activeRight');
  }
  if (window.scrollY > 400) {
    secondLeftBox.classList.add('activeLeft');
  } else {
    secondLeftBox.classList.remove('activeLeft');
  }
  if (window.scrollY > 500) {
    secondRightBox.classList.add('activeRight');
  } else {
    secondRightBox.classList.remove('activeRight');
  }
});

//TODO: PŘIDÁNÍ JEDNOTLIVÉ CLASSY PŘES SCROLL-Y = POZICE KDE SE ZROVNA NACHÁZÍ SCROLL !
//TODO: EVENT SCROLL
//TODO: FLEX COLUMN
//TODO: TEXT ALIGN VERTICALLY - VLOŽENÍM SPANU NA KTERÝ JSEM POUŽIL KLASICKÝ FLEX BOX S ALIGNITEMS
//!: NEBO CENTRÁLNĚ NASTAVÍM ZAROVNÁNÍ A UVNITR BOXU NASTAVIM SPECIALNÍ PRO VERTIKALNÍ
//TODO: OUT-OF-PAGE PRVEK = POUŽITÍM TRANSLATEX -HODNOTU + ANIMACÍ HODNOTU VYNULOVAT = RESPONZIVNÍ A ZAROVNANÉ NA STŘED
//!: CSS JSEM MĚL VYŘEŠIT JINAK, NEDĚLAT SLOŽITĚ MULTI-TŘÍDY, ALE POUŽÍT !!!_:nth-of-type(even)_!!!, KDY VEZMU KAŽDÝ SUDÝ PRVEK TŘÍDY A PŘIŘADÍM MU STYL
