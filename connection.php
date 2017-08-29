<?php
session_start();

if ($_SESSION["login"] == true)
{
    header('Location: index.php');
}
?>
    <html>
        <head>
            <title>Farming Simulator</title>
            <script type="text/javascript" src="clicker.js"></script>
            <link rel="stylesheet" type="text/css" href="clicker.css">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <link rel="icon" href="ressources/favicon.ico"/>
        </head>
    <body>
    <section class="forms">
        <section id="connexionwimg">
            <fieldset class="fieldset">
                <legend>Connexion</legend>
                <form action="connection.php" method="post">
                    <input type="text" name="usn" placeholder="Pseudonyme"><br>
                    <input type="password" name="mdp" placeholder="Mot de passe"><br>
                    <input type="submit" name="connexion" value="Connexion">
                </form>
                <?php
                if (!empty($_POST['connexion'])) {
                    $username = $_POST["usn"];
                    $password = $_POST["mdp"];
                    connection($username, $password);
                }
                ?>
            </fieldset>
        </section>
        <section id="inscription">
            <fieldset class="fieldset">
                <legend>Créer un compte</legend>
                <section><a href="register.php" style="color: green">Pas encore enregistré ?</a></section>
            </fieldset>
        </section>
    </section>
    </body>
</html>
<?php

function connection($username, $password)
{
    if ((check_nom($username) == 0) && (check_password_co($password) == 0))
    {
        $servername = "localhost";
        $dbusername = "id2741208_nevios";
        $dbpassword = "Nevreap0618er";
        $dbname = "id2741208_games";
        $dbh = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $dbusername, $dbpassword);
        if ($dbh == true)
        {
            $password = md5($password);
            $sql = 'SELECT * FROM farmSimulator_USERS WHERE Username= :username AND Password= :password';
            $stmt = $dbh->prepare($sql);
            $stmt->execute(array(':username' => $username, ':password' => $password));
            $res = $stmt->fetchColumn();
            if ($res > 0)
            {
                $_SESSION["login"] = $username;
                header('Location: index.php');
                session_start();
            }
            else
            {
                echo("Vous avez rentré un mauvais pseudonyme ou un mauvais mot de passe.");
            }
        }
        $dbh = null;
    }
}

function check_nom($username) {
    if (preg_match('/[^a-z\s-]/i', $username) == 1)
    {
        echo "Veuillez entrer un username valide.";
        return 1;
    }
    else
    {
        return 0;
    }
}

function check_password_co($password)
{
    if ((strlen($password) > 5) && (strlen($password) < 16))
    {
        return 0;
    }
    else
    {
        echo("Veuillez entrer un mot de passe entre 6 et 15 caractères.");
        return 1;
    }
}
?>