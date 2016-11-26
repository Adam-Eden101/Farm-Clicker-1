//General
i = 0;
click_dps = 1;
dps_total = 0;

//Nami
count_nami = 0;
dps_nami = 0;
prix_nami = 100;

//Miss Fortune
count_miss_fortune = 0;
dps_miss_fortune = 0;
prix_miss_fortune = 500;

//Rengar
count_rengar = 0;
dps_rengar = 0;
prix_rengar = 1000;

//Viktor
count_viktor = 0;
dps_viktor = 0;
prix_viktor = 5000;

//Nasus
count_nasus = 0;
dps_nasus = 0;
prix_nasus = 100000;

//Creuset de Mikael
var creuset_de_mikael = class creuset_de_mikael {
	constructor(name, image, price, desc) {
		this.name = "Creuset de Mikael";
		this.image = image;
		this.price = price;
		this.desc = desc;
	}
};

window.setInterval('dps()', 1000);

function display_points() {
	document.getElementById('display_place').innerHTML = i + ' CS';
	document.getElementById('dps_total').innerHTML = dps_total;
}

function add() {
	i = i + click_dps;
	display_points();
}

function dps() {
	dps_miss_fortune = count_miss_fortune * 5;
	dps_rengar = count_rengar * 10;
	dps_viktor = count_viktor * 20;
	dps_nasus = count_nasus * 1000;
	dps_total = dps_miss_fortune + dps_rengar + dps_viktor + dps_nasus;
    i += dps_total;
    if (dps_nami > 0)
		document.getElementById('shop.dps.nami').innerHTML = dps_nami;
    if (dps_miss_fortune > 0)
		document.getElementById('shop.dps.miss-fortune').innerHTML = dps_miss_fortune;
    if (dps_rengar > 0)
		document.getElementById('shop.dps.rengar').innerHTML = dps_rengar;
    if (dps_viktor > 0)
		document.getElementById('shop.dps.viktor').innerHTML = dps_viktor;
    if (dps_nasus > 0)
		document.getElementById('shop.dps.nasus').innerHTML = dps_nasus;
    display_points();
}

function buy_nami() {
	if (i >= prix_nami) {
		i = i - prix_nami;
		prix_nami = prix_nami + (10 * count_nami);
		count_nami++;
		dps_nami = count_nami;
		click_dps = 1 + dps_nami;
		document.getElementById('shop.price.nami').innerHTML = prix_nami;
		document.getElementById('shop.count.nami').innerHTML = count_nami;
		document.getElementById('click_dps').innerHTML = click_dps;
	}
	display_points();
}

function buy_miss_fortune() {
	if (i >= prix_miss_fortune) {
		i = i - prix_miss_fortune;		
		prix_miss_fortune = prix_miss_fortune + (100 * count_miss_fortune);
		count_miss_fortune++;
		document.getElementById('shop.price.miss-fortune').innerHTML = prix_miss_fortune;
		document.getElementById('shop.count.miss-fortune').innerHTML = count_miss_fortune;
	}
	display_points();
}

function buy_rengar() {
	if (i >= prix_rengar) {
		i = i - prix_rengar;		
		prix_rengar = prix_rengar + (100 * count_rengar);
		count_rengar++;
		document.getElementById('shop.price.rengar').innerHTML = prix_rengar;
		document.getElementById('shop.count.rengar').innerHTML = count_rengar;
	}
	display_points();
}

function buy_viktor() {
	if (i >= prix_viktor) {
		i = i - prix_viktor;		
		prix_viktor = prix_viktor + (100 * count_viktor);
		count_viktor++;
		document.getElementById('shop.price.viktor').innerHTML = prix_viktor;
		document.getElementById('shop.count.viktor').innerHTML = count_viktor;
	}
	display_points();
}

function buy_nasus() {
	if (i >= prix_nasus) {
		i = i - prix_nasus;		
		prix_nasus = prix_nasus + (100 * count_nasus);
		count_nasus++;
		document.getElementById('shop.price.nasus').innerHTML = prix_nasus;
		document.getElementById('shop.count.nasus').innerHTML = count_nasus;
	}
	display_points();
}

function buy_items() {

}