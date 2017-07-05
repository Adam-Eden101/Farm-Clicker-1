function Player() {
    this.score = 0;
    this.click_dps = 1;
    this.dps_total = 0;
    return this;
}

function Champion(name, id, base_price, base_dps) {
    this.name = name;
    this.id = id;
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

function display_points(player) {
    $("display_place").html(player.score + " CS");
    $("dps_total").html(player.dps_total);
    $("#click_dps").html(player.click_dps);
}

function affichage(Champions, player) {
    Champions.forEach(function (Champion) {
        if (Champion.count > 0) {
            $("shop.dps." + Champion.id).html(Champion.dps);
            $("shop.price." + Champion.id).html(Champion.price);
            $("shop.count." + Champion.id).html(Champion.count);
            //$("multiplier_" + Champion.id).hmtl("x" + Champion.multiplier);
        }
    });
    display_points(player);
}

function add(player, nami) {
    player.dps = nami.count;
    player.score = player.score + player.click_dps;
    display_points(player);
}

function dps(player, Champions) {
    player.dps_total = 0;
    Champions.forEach(function (Champion) {
        player.dps_total += Champion.dps;
    });
    player.score+= player.dps_total;
    // create_cookies(player, Champion);
    affichage(Champions, player);
}

    //Achat

function buy_champion(player, champion, Champions) {
    if (player.score >= champion.price) {
        player.score -= champion.price;
        champion.count++;
        champion.price = parseInt(champion.base_price * Math.pow(1.15, champion.count));
        champion.dps = champion.count * champion.base_dps * champion.multiplier;
        if (champion.name === "Nami") {
            player.click_dps = 1 + champion.dps * champion.multiplier;
        }
    }
    affichage(Champions, player);
    display_points(player);
}

/*function buy_item_nami() {
    if (count_nami >= unlock_item_nami &&score>= prix_item_nami_1) {
        if (multiplier_nami === 1) {
            multiplier_nami = 2;
        }
        else {
            multiplier_nami = multiplier_nami + 2;
        }
        unlock_item_nami = unlock_item_nami * 10;
        score = score - prix_item_nami_1;
    }
}*/