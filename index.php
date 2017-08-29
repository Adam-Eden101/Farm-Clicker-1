<?php
session_start();
if (!isset($_SESSION["login"])) {
    $_SESSION['login'] = false;
    header('Location: connection.php');
}
?>
<html>
<head>
    <title><?php if (isset($_SESSION["login"])) { echo $_SESSION["login"]; }?> - Farming Simulator</title>
    <script type="text/javascript" src="clicker.js"></script>
    <link rel="stylesheet" type="text/css" href="clicker.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="icon" href="ressources/favicon.ico"/>
    <script>
        $(document).ready(function () {
            var player = new Player();
            var nami = new Champion("Nami", "nami", 100, 1);
            var miss_fortune = new Champion("Miss Fortune", "miss-fortune", 500, 5);
            var rengar = new Champion("Rengar", "rengar", 2500, 50);
            var viktor = new Champion("Viktor", "viktor", 10000, 100);
            var nasus = new Champion("Nasus", "nasus", 75000, 250);
            var Champions = [nami, miss_fortune, rengar, viktor, nasus];
            window.setInterval(function () {
                dps(player, Champions);
            }, 1000);
            $("#buttclicking").click(function () {
                add(player, nami);
            });
            $("#buy_nami_butt").click(function () {
                buyChampion(player, nami, Champions);
            });
            $("#buy_miss_fortune_butt").click(function () {
                buyChampion(player, miss_fortune, Champions);
            });
            $("#buy_rengar_butt").click(function () {
                buyChampion(player, rengar, Champions);
            });
            $("#buy_viktor_butt").click(function () {
                buyChampion(player, viktor, Champions);
            });
            $("#buy_nasus_butt").click(function () {
                buyChampion(player, nasus, Champions);
            });
        });
    </script>
</head>
<body>
    <div class="middle-section">
        <h1>Farming Simulator</h1>
        <h3 class="dps_total">CS total par seconde : <span id="dps_total">0</span></h3>
        <h5 class="dps_total">Click Damage Total : <span id="click_dps">1</span></h5>
        <div class="clicking">
            <button id="buttclicking" class='buttclicking' value="clicking"><img class='imgclicking' src="ressources/minion.gif"/></button>
        </div>
        <div class="displayPoints" id="displayPoints">
            <p class="display_place" id="display_place">Au commencement, il n'y avait rien...</p>
        </div>
    </div>
    <div class="right-section">
        <div class="shop.title" id="shop.title">
            <img class='shop_title_img' id='shop_title_img' src="ressources/shopkeeper.jpg"/>
            <span class='shop_title_title' id='shop_title_title'>Shop</span>
        </div>
        <div class="upgrade">
            <div class="sous-upgrade">
                <button class='buy_upgrade' id="buy_nami">
                    <img class='buy_upgrade_img' src="ressources/upgrade_nami_1.png"/>
                    <div class="upgrade_content">
                        <span>Nami</span><br>
                        <span>1000</span><br>
                        <span id="multiplier_nami">x0</span>
                    </div>
                </button>
                <button class='buy_upgrade' id="buy_nami">
                    <img class='buy_upgrade_img' src="ressources/upgrade_miss-fortune_1.png"/>
                    <div class="upgrade_content">
                        <span>Miss F.</span><br>
                        <span>5000</span><br>
                        <span>x0</span>
                    </div>
                </button>
                <button class='buy_upgrade' id="buy_nami">
                    <img class='buy_upgrade_img' src="ressources/upgrade_rengar_1.png"/>
                    <div class="upgrade_content">
                        <span>Rengar</span><br>
                        <span>10000</span><br>
                        <span>x0</span>
                    </div>
                </button>
                <button class='buy_upgrade' id="buy_nami">
                    <img class='buy_upgrade_img' src="ressources/upgrade_viktor_1.png"/>
                    <div class="upgrade_content">
                        <span>Viktor</span><br>
                        <span>50000</span><br>
                        <span>x0</span>
                    </div>
                </button>
                <button class='buy_upgrade' id="buy_nami">
                    <img class='buy_upgrade_img' src="ressources/upgrade_nasus_1.png"/>
                    <div class="upgrade_content">
                        <span>Nasus</span><br>
                        <span>100000</span><br>
                        <span>x0</span>
                    </div>
                </button>
            </div>
        </div>
        <div class="shop">
            <div class="sous-shop">
                <div class="shop_img" id="shop.img.nami">
                    <img class='shop_img_img' src="ressources/shop_nami.png"/>
                </div>
                <div class="content">
                    <div class="shop_name" id="shop.name.nami">Nami</div>
                    <div class="shop_price"><span id="shop.price.nami">100</span> CS</div>
                    <div class="shop_buy" id="shop.buy.nami">
                        <button class="shop_buy" id="buy_nami_butt">Level Up</button>
                    </div>
                    <div class="shop_dps">+ : <span id="shop.dps.nami">0</span> click<br>damage</div>
                    <!--<div class="shop_multiplier">Multiplier : <span id="shop_multiplier_nami"></span></div>-->
                    <div class="shop_count">Lvl : <span id="shop.count.nami">0</span></div>
                </div>
            </div>
            <div class="sous-shop">
                <div class="shop_img" id="shop.img.miss-fortune">
                    <img class='miss-fortune' src="ressources/shop_miss-fortune.png"/>
                </div>
                <div class="content">
                    <div class="shop_name" id="shop.name.miss-fortune">Miss Fortune</div>
                    <div class="shop_price"><span id="shop.price.miss-fortune">500</span> CS</div>
                    <div class="shop_buy">
                        <button class="shop_buy" id="buy_miss_fortune_butt">Level Up</button>
                    </div>
                    <div class="shop_dps">CS/s : <span id="shop.dps.miss-fortune">0</span></div>
                    <div class="shop_count">Lvl : <span id="shop.count.miss-fortune">0</span></div>
                </div>
            </div>	
            <div class="sous-shop">	
                <div class="shop_img" id="shop.img.rengar">
                    <img class='rengar' src="ressources/shop_rengar.png"/>
                </div>
                <div class="content">
                    <div class="shop_name" id="shop.name.rengar">Rengar</div>
                    <div class="shop_price"><span id="shop.price.rengar">2500</span> CS</div>
                    <div class="shop_buy">
                        <button class="shop_buy" id="buy_rengar_butt">Level Up</button>
                    </div>	
                    <div class="shop_dps">CS/s : <span id="shop.dps.rengar">0</span></div>
                    <!--<div class="shop_multiplier">Multiplier : <span id="shop_multiplier_rengar"></span></div>-->
                    <div class="shop_count">Lvl : <span id="shop.count.rengar">0</span></div>
                </div>
            </div>
            <div class="sous-shop">	
                <div class="shop_img" id="shop.img.viktor">
                    <img class='viktor' src="ressources/shop_viktor.png"/>
                </div>
                <div class="content">
                    <div class="shop_name" id="shop.name.viktor">Viktor</div>
                    <div class="shop_price"><span id="shop.price.viktor">10000</span> CS</div>
                    <div class="shop_buy">
                        <button class="shop_buy" id="buy_viktor_butt">Level Up</button>
                    </div>	
                    <div class="shop_dps">CS/s : <span id="shop.dps.viktor">0</span></div>
                    <div class="shop_count">Lvl : <span id="shop.count.viktor">0</span></div>
                </div>
            </div>
            <div class="sous-shop">	
                <div class="shop_img" id="shop.img.nasus">
                    <img class='nasus' src="ressources/shop_nasus.png"/>
                </div>
                <div class="content">
                    <div class="shop_name" id="shop.name.nasus">Nasus</div>
                    <div class="shop_price"><span id="shop.price.nasus">75000</span> CS</div>
                    <div class="shop_buy">
                        <button class="shop_buy" id="buy_nasus_butt">Level Up</button>
                    </div>	
                    <div class="shop_dps">CS/s : <span id="shop.dps.nasus">0</span></div>
                    <div class="shop_count">Lvl : <span id="shop.count.nasus">0</span></div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>