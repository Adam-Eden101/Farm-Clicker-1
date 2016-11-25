//General
i = 0;
dps_total = 0;

//Nami
count_nami = 0;
dps_nami = 0;
prix_nami = 100;

//Miss Fortune
count_miss_fortune = 0;
dps_miss_fortune = 0;
prix_miss_fortune = 1000;

while (true)
{
	dps();
}

function clicking() {
	console.log(i);
	add();
}

function display_points() {
	document.getElementById('display_place').innerHTML = i;
	document.getElementById('dps_total').innerHTML = dps_total;
}

function add() {
	i = i + 1;
	display_points();
}

function dps() {
	dps_nami = count_nami * 1;
	dps_miss_fortune = count_miss_fortune * 5;
	dps_total = dps_nami + dps_miss_fortune;
    i += dps_total;
    if (dps_nami > 0)
		document.getElementById('shop.dps.nami').innerHTML = dps_nami;
    if (dps_miss_fortune > 0)
		document.getElementById('shop.dps.miss-fortune').innerHTML = dps_miss_fortune;
    window.setTimeout('dps()', 1000);
    display_points();
}

function buy_nami() {
	if (i >= prix_nami) {
		i = i - prix_nami;
		prix_nami = prix_nami + ((100 * count_nami)/10);
		count_nami++;
		document.getElementById('shop.price.nami').innerHTML = prix_nami;
		document.getElementById('shop.count.nami').innerHTML = count_nami;
	}
	display_points();
}

function buy_miss_fortune() {
	if (i >= prix_miss_fortune) {
		i = i - prix_miss_fortune;		
		prix_miss_fortune = prix_miss_fortune + ((100 * count_miss_fortune)/10);
		count_miss_fortune++;
		document.getElementById('shop.price.miss-fortune').innerHTML = prix_miss_fortune;
		document.getElementById('shop.count.miss-fortune').innerHTML = count_miss_fortune;
	}
	display_points();
}