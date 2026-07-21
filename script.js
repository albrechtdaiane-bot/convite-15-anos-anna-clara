const dataEvento = new Date("Sep 6, 2026 17:00:00").getTime();

setInterval(() => {

const agora = new Date().getTime();

const distancia = dataEvento - agora;

const dias = Math.floor(distancia/(1000*60*60*24));

console.log(dias);

},1000);
