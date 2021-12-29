const ctx = document.getElementById('canvas').getContext('2d');

//** zajistí aby to bralo velikost okna jak pro platno kde se kresli kolečko tak pro cely canvas
canvas.width = innerWidth; // dá se použít window.innerHeight
canvas.height = innerHeight;
ctx.width = innerWidth;
ctx.height = innerHeight;

//* hodnoty pozice kolečka
let dy = -2;
let dx = 2;
let x = 100;
let y = 100;

//* velikost kolečka
let ballRadius = 30;

function ball() {
  ctx.fillStyle = 'skyblue';
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, 2 * Math.PI); //* zde musím pracovat s promennyma, které jsem si zadal
  ctx.fill();
  ctx.closePath();
}

function bouncing() {
  //* zajistí vymazaní předchozí pozice kolečka, takže to vypadá jako pohyb a ne jako kreslení
  //* vymaže celý canvas, který se vygeneruje setIntervalem - vygeneruje se kolečko na nějaké pozici pak se vygeneruje na další, ale celý předchozí plátno se smaže
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball();

  //* zajišťuje pohyb po celé viditelné obrazovce
  if (x + dx > window.innerWidth - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > window.innerHeight - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}

setInterval(bouncing, 1);
