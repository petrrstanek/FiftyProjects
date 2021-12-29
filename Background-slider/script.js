const prev = document.querySelector('.left-arrow');
const next = document.querySelector('.right-arrow');
const slider = document.querySelector('.slide');
const images = [
	'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
	'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1934&amp;q=80',
	'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80',
	'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2689&amp;q=80',
	'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80',
];
let counter = 0;

prev.addEventListener('click', (e) => {
	if (counter === 0) {
		counter = 5;
		counter--;
		document.body.style.background = `rgba(0, 0, 0, 0.8) url('${images[counter]}')`;
		slider.style.background = `url('${images[counter]}')`;
	} else {
		counter--;
		document.body.style.background = `rgba(0, 0, 0, 0.8) url('${images[counter]}')`;
		slider.style.background = `url('${images[counter]}')`;
	}
});

next.addEventListener('click', (e) => {
	if (counter === 4) {
		counter = -1;
		counter++;
		document.body.style.background = `rgba(0, 0, 0, 0.8) url('${images[counter]}')`;
		slider.style.background = `url('${images[counter]}')`;
	} else {
		counter++;
		document.body.style.background = `rgba(0, 0, 0, 0.8) url('${images[counter]}')`;
		slider.style.background = `url('${images[counter]}')`;
	}
});
