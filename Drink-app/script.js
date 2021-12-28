const waterCups = document.querySelectorAll('.rectangle-small');
const myCup = document.querySelector('.rectangle');
let fill = document.querySelector('.fill');
let title = document.querySelector('.col');

let remained = document.querySelector('.remain');
let percentage = document.querySelector('.percentage');

let newPercentage = 0;
let newRemained = 2;
let newTitle = 100;

//* VEZMI SI VŠECHNY KALICHY I S INDEXEM
waterCups.forEach((waterCup, idx) => {
	//* VŠEM KALICHŮM DÁM MOŽNOST KLIKU
	waterCup.addEventListener('click', (e) => {
		//* POTŘEBUJI INDEX KLIKNUTÉHO KALICHU
		waterCups.forEach((waterCup, newIdx) => {
			if (waterCup.classList.contains('active')) {
				console.log(newIdx, idx);
				if (newIdx > idx) {
					waterCup.classList.remove('active');

					//* Procenta naplnujici sklenku
					newPercentage -= 12.5;
					percentage.innerText = newPercentage + '%';
					fill.style.height = `${newPercentage}%`;

					//* zarovnání titulku speciálně s naplnujici se vodu
					newTitle += 12.5;
					title.style.height = `${newTitle}%`;

					//* kolik zbyvý ještě vypít litrů vody
					newRemained += 0.25;
					remained.innerText = newRemained + 'L';
				}
			} else if (newIdx <= idx) {
				waterCup.classList.add('active');
				//* Procenta naplnujici sklenku
				newPercentage += 12.5;
				percentage.innerText = newPercentage + '%';
				fill.style.height = `${newPercentage}%`;

				//* zarovnání titulku speciálně s naplnujici se vodu
				newTitle -= 12.5;
				title.style.height = `${newTitle}%`;

				//* kolik zbyvý ještě vypít litrů vody
				newRemained -= 0.25;
				remained.innerText = newRemained + 'L';
			}
		});

		//* displáj nony pro titulky
		if (newPercentage === 0) {
			percentage.style.display = 'none';
		} else {
			percentage.style.display = 'block';
		}

		if (newTitle === 0) {
			title.style.display = 'none';
			remained.style.display = 'none';
		} else {
			title.style.display = 'flex';
			remained.style.display = 'flex';
		}
	});
});
