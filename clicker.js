//Variables

	//General	
		if (document.cookie != 0)
		{
			var CookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)i\s*\=\s*([^;]*).*$)|^.*$/, "$1");
			i = parseInt(CookieValue);
		}
		else
			i = 0;
		click_dps = 1;
		dps_total = 0;

	//Nami
		if (document.cookie != 0)
		{
			var CookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)count_nami\s*\=\s*([^;]*).*$)|^.*$/, "$1");
			if (Number.isInteger(parseInt(CookieValue)))
				count_nami = parseInt(CookieValue);
			else
				count_nami = 0;
		}
		else
			count_nami = 0;
		if (document.cookie != 0)
		{
			var CookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)dps_nami\s*\=\s*([^;]*).*$)|^.*$/, "$1");
			if (Number.isInteger(parseInt(CookieValue)))
				dps_nami = parseInt(CookieValue);
			else
				dps_nami = 0;
		}
		else
			dps_nami = 0;
		if (document.cookie != 0)
		{
			var CookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)prix_nami\s*\=\s*([^;]*).*$)|^.*$/, "$1");
			if (Number.isInteger(parseInt(CookieValue)))
				prix_nami = parseInt(CookieValue);
			else
				prix_nami = 100;
		}
		else
			prix_nami = 100;
		multiplier_nami = 1;
		prix_item_nami = 1000;
		unlock_item_nami = 10;

	//Miss Fortune
		if (document.cookie != 0)
		{
			var CookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)count_miss_fortune\s*\=\s*([^;]*).*$)|^.*$/, "$1");
			if (Number.isInteger(parseInt(CookieValue)))
				count_miss_fortune = parseInt(CookieValue);
			else
				count_miss_fortune = 0;
		}
		else
			count_miss_fortune = 0;
		dps_miss_fortune = 0;
		if (document.cookie != 0)
		{
			var CookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)prix_miss_fortune\s*\=\s*([^;]*).*$)|^.*$/, "$1");
			if (Number.isInteger(parseInt(CookieValue)))
				prix_miss_fortune = parseInt(CookieValue);
			else
				prix_miss_fortune = 500;
		}
		else
			prix_miss_fortune = 500;
		multiplier_miss_fortune = 1;
		prix_item_miss_fortune_1 = 5000;

	//Rengar
		if (document.cookie != 0)
		{
			var CookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)count_rengar\s*\=\s*([^;]*).*$)|^.*$/, "$1");
			if (Number.isInteger(parseInt(CookieValue)))
				count_rengar = parseInt(CookieValue);
			else
				count_rengar = 0;
		}
		else
			count_rengar = 0;
		dps_rengar = 0;
		if (document.cookie != 0)
		{
			var CookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)prix_rengar\s*\=\s*([^;]*).*$)|^.*$/, "$1");
			if (Number.isInteger(parseInt(CookieValue)))
				prix_rengar = parseInt(CookieValue);
			else
				prix_rengar = 2500;
		}
		else
			prix_rengar = 2500;
		multiplier_rengar = 1;
		prix_item_rengar_1 = 25000;

	//Viktor
		if (document.cookie != 0)
		{
			var CookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)count_viktor\s*\=\s*([^;]*).*$)|^.*$/, "$1");
			if (Number.isInteger(parseInt(CookieValue)))
				count_viktor = parseInt(CookieValue);
			else
				count_viktor = 0;
		}
		else
			count_viktor = 0;
		dps_viktor = 0;
		if (document.cookie != 0)
		{
			var CookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)prix_viktor\s*\=\s*([^;]*).*$)|^.*$/, "$1");
			if (Number.isInteger(parseInt(CookieValue)))
				prix_viktor = parseInt(CookieValue);
			else
				prix_viktor = 10000;
		}
		else
			prix_viktor = 10000;
		multiplier_viktor = 1;
		prix_item_viktor_1 = 100000;

	//Nasus
		if (document.cookie != 0)
		{
			var CookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)count_nasus\s*\=\s*([^;]*).*$)|^.*$/, "$1");
			if (Number.isInteger(parseInt(CookieValue)))
				count_nasus = parseInt(CookieValue);
			else
				count_nasus = 0;
		}
		else
			count_nasus = 0;
		dps_nasus = 0;
		if (document.cookie != 0)
		{
			var CookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)prix_nasus\s*\=\s*([^;]*).*$)|^.*$/, "$1");
			if (Number.isInteger(parseInt(CookieValue)))
				prix_nasus = parseInt(CookieValue);
			else
				prix_nasus = 75000;
		}
		else
			prix_nasus = 75000;
		multiplier_nasus = 1;
		prix_item_nasus_1 = 750000;

//Fonctions

	//Core

		window.setInterval('dps()', 1000);

		function add() {
			dps_nami = count_nami;
			click_dps = 1 + (dps_nami * multiplier_nami);
			i = i + click_dps;
			display_points();
		}

		function dps() {
			dps_miss_fortune = count_miss_fortune * 5;
			dps_rengar = count_rengar * 50;
			dps_viktor = count_viktor * 100;
			dps_nasus = count_nasus * 250;
			dps_total = dps_miss_fortune + dps_rengar + dps_viktor + dps_nasus;
		    i += dps_total;
			create_cookies();
			affichage();
		}

		function affichage() {
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
			document.getElementById('shop.price.nami').innerHTML = prix_nami;
			document.getElementById('shop.count.nami').innerHTML = count_nami;
			document.getElementById('shop.dps.nami').innerHTML = dps_nami;
			document.getElementById('click_dps').innerHTML = click_dps;
			document.getElementById('shop.price.miss-fortune').innerHTML = prix_miss_fortune;
			document.getElementById('shop.count.miss-fortune').innerHTML = count_miss_fortune;
			document.getElementById('shop.price.rengar').innerHTML = prix_rengar;
			document.getElementById('shop.count.rengar').innerHTML = count_rengar;
			document.getElementById('shop.price.viktor').innerHTML = prix_viktor;
			document.getElementById('shop.count.viktor').innerHTML = count_viktor;
			document.getElementById('shop.price.nasus').innerHTML = prix_nasus;
			document.getElementById('shop.count.nasus').innerHTML = count_nasus;
			document.getElementById('multiplier_nami').innerHTML = 'x' + multiplier_nami;
		}

		function display_points() {
			document.getElementById('display_place').innerHTML = i + ' CS';
			document.getElementById('dps_total').innerHTML = dps_total;
		}

	//Achat

		function buy_nami() {
			if (i >= prix_nami) {
				i = i - prix_nami;
				prix_nami = parseInt(100 * Math.pow(1.15,(count_nami+1)));
				count_nami++;
				dps_nami = count_nami * multiplier_nami;
				click_dps = 1 + dps_nami;
			}
			affichage();
			display_points();
		}

		function buy_miss_fortune() {
			if (i >= prix_miss_fortune) {
				i = i - prix_miss_fortune;		
				prix_miss_fortune = parseInt(500 * Math.pow(1.15,(count_miss_fortune+1)));
				count_miss_fortune++;
			}
			affichage();
			display_points();
		}

		function buy_rengar() {
			if (i >= prix_rengar) {
				i = i - prix_rengar;		
				prix_rengar = parseInt(2500 * Math.pow(1.15,(count_rengar+1)));
				count_rengar++;
			}
			affichage();
			display_points();
		}

		function buy_viktor() {
			if (i >= prix_viktor) {
				i = i - prix_viktor;		
				prix_viktor = parseInt(10000 * Math.pow(1.15,(count_viktor+1)));
				count_viktor++;
			}
			affichage();
			display_points();
		}

		function buy_nasus() {
			if (i >= prix_nasus) {
				i = i - prix_nasus;		
				prix_nasus = parseInt(75000 * Math.pow(1.15,(count_nasus + 1)));
				count_nasus++;
			}
			affichage();
			display_points();
		}

		function buy_item_nami() {
			if (i >= prix_item_nami) {
				if (multiplier_nami == 1)
					multiplier_nami = 2;
				else
					multiplier_nami = multiplier_nami + 2;
				i = i - prix_item_nami;
				prix_item_nami*=25;
			}
            affichage();
            display_points();
		}

	function create_cookies() {
		document.cookie = "i = " + i ;
		document.cookie = "count_nami = " + count_nami ;
		document.cookie = "dps_nami = " + dps_nami ;
		document.cookie = "prix_nami = " + prix_nami ;
		document.cookie = "count_miss_fortune = " + count_miss_fortune ;
		document.cookie = "prix_miss_fortune = " + prix_miss_fortune ;
		document.cookie = "count_rengar = " + count_rengar ;
		document.cookie = "prix_rengar = " + prix_rengar ;
		document.cookie = "count_viktor = " + count_viktor ;
		document.cookie = "prix_viktor = " + prix_viktor ;
		document.cookie = "count_nasus = " + count_nasus ;
		document.cookie = "prix_nasus = " + prix_nasus ;
	}