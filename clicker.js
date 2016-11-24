i = 0;

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