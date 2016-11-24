i = 0;
value_dps = 0;
count_nami = 0;
count_miss_fortune = 0;
dps_nami = 0;
dps_miss_fortune = 0;
dps_total = 0;

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
    window.setTimeout('dps()', 1000);
    display_points();
}

function buy_nami() {
	count_nami++;
	document.getElementById('shop.count.nami').innerHTML = count_nami;
}

function buy_miss_fortune() {
	count_miss_fortune++;
	document.getElementById('shop.count.miss-fortune').innerHTML = count_miss_fortune;
}