let prix = 0;

let counter = 500
let counter1 = 700
let counter2 = 1000
let counter3 = 2000
let counter4 = 2500
let counter5 = 3500
let counter6 = 5000

var element = document.querySelector('span')

var imgweb1 = document.querySelector('#imgweb1')

function AfficherPrix()
{
	element.innerText = prix;
}

function ModifierPrix(ajouter, p)
{
	if (ajouter.checked == false)
		prix -= p;
	else
		prix += p;
}


imgec.addEventListener('click', function(){
	prix += 500;

	AfficherPrix();

})

imgvi.addEventListener('click', function(){
	prix += 700;

	AfficherPrix();
})

/*part2*/

LMNU1.addEventListener('click', function(){

	// Le deuxième paramètre est le prix
	ModifierPrix(this, 1000)
	// On affiche le prix
	AfficherPrix();
})
wish1.addEventListener('click', function(){
	counter++
	element.innerText = counter1

})
logrs1.addEventListener('click', function(){
	counter++
	element.innerText = counter

})
geoloc1.addEventListener('click', function(){
	counter++
	element.innerText = counter3

})
sysmessuti.addEventListener('click', function(){
	counter++
	element.innerText = counter3

})
commartact1.addEventListener('click', function(){
	counter++
	element.innerText = counter

})
gestcom1.addEventListener('click', function(){
	counter++
	element.innerText = counter3

})
gestres1.addEventListener('click', function(){
	counter++
	element.innerText = counter2

})
adsapp1.addEventListener('click', function(){
	counter++
	element.innerText = counter

})
intadmod1.addEventListener('click', function(){
	counter++
	element.innerText = counter

})
proutil1.addEventListener('click', function(){
	counter++
	element.innerText = counter

})
solmarket1.addEventListener('click', function(){
	counter++
	element.innerText = counter

})

/*part3*/

inta1.addEventListener('click', function(){
	counter++
	element.innerText = counter

})
pagina1.addEventListener('click', function(){
	counter++
	element.innerText = counter

})
pagine1.addEventListener('click', function(){
	counter++
	element.innerText = counter

})
piupagine1.addEventListener('click', function(){
	counter++
	element.innerText = counter

})
meda1.addEventListener('click', function(){
	counter++
	element.innerText = counter

})
gestcont1.addEventListener('click', function(){
	counter++
	element.innerText = counter

})

/*part4*/

integ.addEventListener('click', function(){
	counter++
	element.innerText = counter

})
conint.addEventListener('click', function(){
	counter++
	element.innerText = counter

})

/*part5*/

idee.addEventListener('click', function(){
	counter++
	element.innerText = counter

})
brouillon.addEventListener('click', function(){
	counter++
	element.innerText = counter

})
pagine1.addEventListener('click', function(){
	counter++
	element.innerText = counter

})
prodev.addEventListener('click', function(){
	counter++
	element.innerText = counter

})
proddev.addEventListener('click', function(){
	counter++
	element.innerText = counter

})