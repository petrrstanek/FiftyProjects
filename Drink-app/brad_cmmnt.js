const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
	cup.addEventListener('click', () => highlightCups(idx)); //* KAŽDÉMU KALICHU DÁM KLIK A PŘI KLIKU ZAVOLÁM FUNKCI KTERÁ VEZME PARAMETR Z LOOPU = INDEX A BUDE HO POUŽÍVAT V FUNKCI KTEROU LZE ZAVOLAT Z VENKU
});

//* Z LOOPU INDEX VE FUNKCI
function highlightCups(idx) {
	//* OVĚŘÍ JESTLI KLIKNUTÝ KALICH MÁ AKTIVNÍ TŘÍDU TAK JI ODSTRANÍ IDX--
	//* NEBOPOKUD KLIKNUTÝ KALICH A NÁSLEDUJÍCÍ KALICH NENÍ AKTIVNÍ ROZPOZNA A DEAKTIVUJE KALICH KVŮLI 12.5% KALICHU (1ST)
	if (idx === 7 && smallCups[idx].classList.contains('full')) idx--;
	else if (
		smallCups[idx].classList.contains('full') &&
		!smallCups[idx].nextElementSibling.classList.contains('full')
	) {
		idx--;
	}

	//* ZDE MŮŽU POROVNÁVAT KLIKNUTÝ INDEX OPROTI LOOPU VŠECH INDEXŮ KVŮLI ZABARVENÍ VŠECH MENŠÍCH JAK KLIKNUTÝ INDEX
	smallCups.forEach((cup, idx2) => {
		if (idx2 <= idx) {
			cup.classList.add('full');
		} else {
			cup.classList.remove('full');
		}
	});

	//* při kliku se vyvolá i tato funkce
	updateBigCup();
}

//* funkce pro výpočet a práci s čísly bez hardcode jakehokoliv čísla
function updateBigCup() {
	//* VEZME AKTIVNÍ KALICHY
	const fullCups = document.querySelectorAll('.cup-small.full').length;
	//* VEZME PRÁZDNÉ KALICHY
	const totalCups = smallCups.length;

	//* POKUD NENÍ ŽÁDNÝ KALICH AKTIVNÍ
	if (fullCups === 0) {
		percentage.style.visibility = 'hidden';
		percentage.style.height = 0;
	} else {
		//* POKUD NĚJAKÝ KALICH AKITIVNÍ JE UČINÍ SE VÝPOČET VŠECHNY PLNÉ KALICHY DĚLENO PRÁZNÉ KALICHY + CELKOVÁ VÝŠKA MAIN-KALICHU
		percentage.style.visibility = 'visible';
		percentage.style.height = `${(fullCups / totalCups) * 330}px`;
		percentage.innerText = `${(fullCups / totalCups) * 100}%`;
	}

	if (fullCups === totalCups) {
		remained.style.visibility = 'hidden';
		remained.style.height = 0;
	} else {
		remained.style.visibility = 'visible';
		liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
	}
}
