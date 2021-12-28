//* načtění JSON souboru z databanky
async function fetchJokes() {
	const response = await fetch('https://icanhazdadjoke.com', {
		//* await -> žádám po tomto serveru data z API
		headers: {
			//* požadavek admina API
			Accept: 'application/json',
		},
	});

	return response.json(); //* vytáhnutý JSON file => ukládám ze serveru data to JSON
}

//* vytáhnutí specifických dat už z JSON souboru a použití v mojí aplikaci
async function getJoke() {
	const { joke } = await fetchJokes(); //* destruktura jednoho objektu pomocí {} z JSON file který je uložený v fetchJokes
	spaceForJoke.innerHTML = joke; //* přidání objektu do místa kde se bude zobrazovat vtip
}

const button = document.querySelector('.btn');
const spaceForJoke = document.querySelector('.spaceForJoke');
button.addEventListener('click', getJoke);
getJoke();

//FIXME://! jednoduší pro čtení v jedné funkci
/* async function generateJoke(){
    const config = {
        headers:{
            Accept: 'application/json',
        },
    }
    const response = await fetch('https://icanhazdadjoke.com', config);
    const data = await response.json();
    spaceForJoke.innerHTML = data.joke
} */

//TODO: v CSS u tlačítka - když styluji přes translate a pak při akci dělam jinou transformaci tak ji musím napsat znovu zasebe 2x
//TODO: boxsizing jde vždycky do celého dokumentu !! ne do BODY
//TODO: Vytáhnout JSON file z API - pomocí async funkce a await fetch => zdroj dat
