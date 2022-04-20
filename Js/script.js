let prix = 0;


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

	ModifierPrix(this, 500)

	AfficherPrix();
})

logrs1.addEventListener('click', function(){

	ModifierPrix(this, 800)

	AfficherPrix();

})
geoloc1.addEventListener('click', function(){

	ModifierPrix(this, 500)

	AfficherPrix();
})
sysmessuti.addEventListener('click', function(){

	ModifierPrix(this, 2000)

	AfficherPrix();

})
commartact1.addEventListener('click', function(){

	ModifierPrix(this, 1000)

	AfficherPrix();

})
gestcom1.addEventListener('click', function(){

	ModifierPrix(this, 1500)

	AfficherPrix();

})
gestres1.addEventListener('click', function(){

	ModifierPrix(this, 4000)

	AfficherPrix();

})
adsapp1.addEventListener('click', function(){

	ModifierPrix(this, 2500)

	AfficherPrix();

})
intadmod1.addEventListener('click', function(){

	ModifierPrix(this, 3000)

	AfficherPrix();

})
proutil1.addEventListener('click', function(){

	ModifierPrix(this, 500)

	AfficherPrix();

})
solmarket1.addEventListener('click', function(){

	ModifierPrix(this, 3000)

	AfficherPrix();

})

/*part3*/

inta1.addEventListener('click', function(){

	ModifierPrix(this, 1500)

	AfficherPrix();

})
pagina1.addEventListener('click', function(){

	ModifierPrix(this, 1800)

	AfficherPrix();

})
pagine1.addEventListener('click', function(){

	ModifierPrix(this, 600)

	AfficherPrix();

})
piupagine1.addEventListener('click', function(){

	ModifierPrix(this, 800)

	AfficherPrix();

})
meda1.addEventListener('click', function(){

	ModifierPrix(this, 1200)

	AfficherPrix();

})
gestcont1.addEventListener('click', function(){

	ModifierPrix(this, 800)

	AfficherPrix();

})

/*part4*/

integ.addEventListener('click', function(){
		prix += 500;

	AfficherPrix();

})
conint.addEventListener('click', function(){
	prix += 1000;

	AfficherPrix();

})

/*part5*/

idee.addEventListener('click', function(){
		prix += 1000;

	AfficherPrix();

})
brouillon.addEventListener('click', function(){
	prix += 800;

	AfficherPrix();

})
pagine1.addEventListener('click', function(){
	prix += 500;

	AfficherPrix();

})
prodev.addEventListener('click', function(){
	prix += 200;

	AfficherPrix();

})
proddev.addEventListener('click', function(){
	prix += 100;

	AfficherPrix();

})


