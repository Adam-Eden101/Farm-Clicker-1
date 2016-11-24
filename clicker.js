i = 0;

while (true)
dps();

function clicking() {
	console.log(i);
	add();
}

function display_points() {
	document.getElementById('display_place').innerHTML = i;	
}

function add() {
	i = i + 1;
	display_points();
}

function dps(){
    i += 5;
    window.setTimeout('dps()', 1000);
    display_points();
}