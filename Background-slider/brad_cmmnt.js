const body = document.body;
const slides = document.querySelectorAll('.slide'); //* NODELIST z struktury HTML (POLE)
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

//* VYTÁHNE INDEX Z POLE PŘI POROVNÁNÍ
let activeSlide = 0;

rightBtn.addEventListener('click', () => {
	activeSlide++;

	//* POROVNÁ INDEX POLE LENGHT Z KLIKEM A POKUD DOSÁHNE ROZSAHU POLE JDE OD NULY ZNOVA
	//* LOOP PRO NEXT
	if (activeSlide > slides.length - 1) {
		activeSlide = 0;
	}

	setBgToBody();
	setActiveSlide();
});

leftBtn.addEventListener('click', () => {
	activeSlide--;

	//* POROVNÁ INDEX POLE LENGHT Z KLIKEM A POKUD DOSÁHNE ROZSAHU POLE JDE OD NULY ZNOVA
	//* LOOP PRO PREV
	if (activeSlide < 0) {
		activeSlide = slides.length - 1;
	}

	setBgToBody();
	setActiveSlide();
});

//* JE TO TU PO 3 PROTOŽE TO SIMULUJE NAČTENÍ HNED PŘI ZOBRAZENÍ STRÁNKY
setBgToBody();

function setBgToBody() {
	//* PARALELNÍ NASTAVENÍ BG POMOCÍ STEJNÉ HODNOTY JAKO SLIDE S CUSTOM INDEX
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

//* PROLOOPUJE CELÉ POLE A VŠEM ODSTRANÍ AKTIVE
function setActiveSlide() {
	slides.forEach((slide) => slide.classList.remove('active'));

	//* ZDE PROTOŽE SLIDES JE POLE MŮŽE BÝT POUŽITO ACTIVE JAKO CUSTOM INDEX PRO DANOU POZICI V POLI A DÁNÍ JAKO AKTIVNÍ
	//* V CSS MÁ AKTIVNÍ = OPACITY 1 A NEAKTIVNÍ = OPACITY 0
	slides[activeSlide].classList.add('active');
}
