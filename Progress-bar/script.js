//* můžu pracovat s root uložil jsem do root
const root = document.querySelector(':root');
//* beru z HTML tlačítko 1 a 2 a můžu s nimi pracovat
const btn1 = document.querySelector('.myBtn1');
const btn2 = document.querySelector('.myBtn2');

//* proměnná pomocná, kde můžu ukládat aktuální hodnotu progressbaru přes klik
let clickCounter = 0;

btn1.disabled = true; //* POČÁTEČNÍ HODNOTA PREV

btn2.addEventListener('click', (first) => {
  clickCounter++; //* klik přidá do proměnné clickcounter +1 a udělá blok příkazů --> step 1 - 2

  btn1.disabled = false;
  //** step 1 - 2
  root.style.setProperty('--first-color', 'green');
  document.querySelector('.secondCircle').classList.add('active');

  //* pokud je aktuální hodnota proměnné(kliků) 2, tak může přidat blok příkázu step 2 - 3
  //* step 2 - 3
  if (clickCounter == 2) {
    root.style.setProperty('--second-color', 'green');
    document.querySelector('.thirdCircle').classList.add('active');
  }

  //* pokud pokud je aktuální hodnota proměnné(kliků) 3, tak může přidat blok příkázu step 3 - 4
  //* step 3 - 4
  if (clickCounter == 3) {
    btn2.disabled = true; //* pokud je hodnota proměnné snížena na 3, NEXT se otevře
    root.style.setProperty('--third-color', 'green');
    document.querySelector('.fourthCircle').classList.add('active');
  }
});

btn1.addEventListener('click', () => {
  //* pokud kliknu na na tlačítko BTN1 --> PREV, funkce najde uloženou hodnotu kliků a podle ní vyhodnotí, kde se progress bar nachazí a sníží hodnotu proměnné(kliků) o -1 a může vykonat blok příkazů

  //* step 1 - 2
  //* pokud je hodnota z hora naklikaná na 1 může snížit proměnnou(kliky) o -1 + udělat blok příkázů
  if (clickCounter == 1) {
    clickCounter--;
    btn1.disabled = true; //* pokud je hodnota proměnné snížena na 1, PREV se zakáže
    root.style.setProperty('--first-color', '#9FA8AA');
    document.querySelector('.secondCircle').classList.remove('active');
  }
  //* step 2 - 3
  //* pokud je hodnota z hora naklikaná na 2 může snížit proměnnou(kliky) o -1 + blok příkázů
  if (clickCounter == 2) {
    clickCounter--;
    root.style.setProperty('--second-color', '#9FA8AA');
    document.querySelector('.thirdCircle').classList.remove('active');
  }

  //* step 3 - 4
  //* pokud je hodnota z hora naklikaná na 3 může snížit proměnnou(kliky) o -1 + blok příkázů
  if (clickCounter == 3) {
    clickCounter--;

    root.style.setProperty('--third-color', '#9FA8AA');
    document.querySelector('.fourthCircle').classList.remove('active');
    btn2.disabled = false;
  }
});

//TODO: :ROOT - PROMENNE V CSS
//TODO: POČÍTADLO S POMOCNOU PROMENNOU
//TODO: :after :before - PSEUDOELEMENTS
//TODO: PROGRESS-LINE ŠLA TO UDĚLAT PŘES DIV KDE BYL BG S HEIGHT = LINE
//TODO: POSITION ABSOLUTE A REV PLATÍ NA PARENT DIV
//TODO: POKUD DELAM FLEXBOX NEBO JAKEKOLI ZAROVNÁVNÍ MUSÍM URČIT BUD H NEBO W , ABY TO MĚLO PROSTOR KDE SE TO MA ZAROVNAVAT
//TODO: KDYŽ CHCI VZÍT VÍCE DIVU MUSÍM POUŽÍT FOREACH NA PROJETI VŠECH DIVU NE TO DĚLAT JEDNOTIVĚ
