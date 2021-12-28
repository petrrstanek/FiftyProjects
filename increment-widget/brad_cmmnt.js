const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target'); //* vezmu atribut číslo pro jednotlivý counter a nastavím ho na číselnou hodnotu pomocí +
    const c = +counter.innerText; //* nastavím 0 na číselnou hodnotu, protože byla string

    const increment = target / 200; //* zajistí rychlost načítání čísel => sníží číslo aby to rychleji dosáhlo cílové hodnoty

    if (c < target) {
      //* od 0 do velikosti hlavní hodnoty followrů
      counter.innerText = `${Math.ceil(c + increment)}`; //* 0 + hodnota která se přičítá z target / 200 + se zaokrouhlí hodnoty nahoru
      setTimeout(updateCounter, 1); //* přidá číslo počka 1ms a přidá další ==> efekt načítání čísel bez setInterval
    }
  };

  updateCounter();
});
