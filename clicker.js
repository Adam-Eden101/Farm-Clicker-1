function Player() {
    this.score = 0;
    this.click_dps = 1;
    this.dps_total = 0;
    return this;
}

function Champion(name, base_price, base_dps) {
    this.name = name;
    this.count = 0;
    this.dps = 0;
    this.base_dps = base_dps;
    this.base_price = base_price;
    this.price = base_price;
    this.multiplier = 1;
    this.prix_item_1 = 1000;
    this.unlock_item = 10;
    return this;
}

//Fonctions

    //Core

function add(player, nami) {
    player.dps = nami.count;
    player.score = player.score + player.click_dps;
    display_points(player);
}

function dps(player, Champions) {
    var x = 1;
    player.dps_total = 0;
    while (x < Champion.length) {
        player.dps_total += Champions[x].dps;
        x++;
    }
    player.score+= player.dps_total;
    // create_cookies(player, Champion);
    affichage(Champions, player);
}

function affichage(Champions, player) {
    var x = 0;
    var div = ["nami", "miss-fortune", "rengar", "viktor", "nasus"];
    while (x < Champions.length) {
        if (Champions[x].count > 0) {
            document.getElementById('shop.dps.' + div[x]).innerHTML = Champions[x].dps;
            document.getElementById('shop.price.' + div[x]).innerHTML = Champions[x].price;
            document.getElementById('shop.count.' + div[x]).innerHTML = Champions[x].count;
            //document.getElementById('multiplier_' + div[x]).innerHTML = 'x' + Champions[x].multiplier;
        }
        x++;
    }
    display_points(player);
}

function display_points(player) {
    document.getElementById('display_place').innerHTML = player.score + ' CS';
    document.getElementById('dps_total').innerHTML = player.dps_total;
    $('#click_dps').html(player.click_dps);
}

    //Achat

function buy_champion(player, champion, Champions) {
    if (player.score >= champion.price) {
        player.score -= champion.price;
        champion.count++;
        champion.price = parseInt(champion.base_price * Math.pow(1.15, champion.count));
        champion.dps = champion.count * champion.base_dps * champion.multiplier;
        if (champion.name === "Nami")
            player.click_dps = 1 + champion.dps * champion.multiplier;
    }
    affichage(Champions, player);
    display_points(player);
}

function buy_item_nami() {
    if (count_nami >= unlock_item_nami &&score>= prix_item_nami_1) {
        if (multiplier_nami === 1)
            multiplier_nami === 2;
        else
            multiplier_nami = multiplier_nami + 2;
        unlock_item_nami = unlock_item_nami * 10;
        score=score- prix_item_nami_1;
    }
}