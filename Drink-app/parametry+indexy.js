//* TAKTO LZE POMOCÍ FUNKCE POROVNÁVAT 2 INDEXY TENTÝŽ LOOPU
//* KLIKNUTÝ-INDEX  vs  CELY-LOOP-INDEX
//* ZÁROVEŇ TAKTO LZE VZÍT PARAMETR Z LOOPU A POUŽÍT HO VE FUNKCI A VOLAT Z VENKU

//* KAŽDÉMU KALICHU DÁM KLIK A PŘI KLIKU ZAVOLÁM FUNKCI KTERÁ VEZME PARAMETR Z LOOPU = INDEX
//* A BUDE HO POUŽÍVAT V FUNKCI KTEROU LZE ZAVOLAT Z VENKU
smallCups.forEach((cup, idx) => {
	cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
	//* ZDE MŮŽU PORVNÁVAT KLIKNUTÝ INDEX OPROTI LOOPU VŠECH INDEXŮ KVŮLI ZABARVENÍ VŠECH MENŠÍCH JAK KLIKNUTÝ INDEX
	smallCups.forEach((cup, idx2) => {
		if (idx2 <= idx) {
			cup.classList.add('full');
		} else {
			cup.classList.remove('full');
		}
	});
}
