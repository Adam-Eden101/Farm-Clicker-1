<?php
session_start();

if ($_SESSION["login"] == true)
{
    header('Location: index.php');
}
?>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Farming Simulator</title>
        <script type="text/javascript" src="clicker.js"></script>
        <link rel="stylesheet" type="text/css" href="clicker.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <link rel="icon" href="ressources/favicon.ico"/>
    </head>
    <body>
    	<h1>S'enregistrer</h1>
        <section class="forms">
        <section id="inscription">
            <form action="register.php" method="post">
                <input type="text" name="username" placeholder="Pseudonyme"><br>
                <input type="text" name="email" placeholder="Email"><br>
                <input type="password" name="password" placeholder="Mot de passe"><br>
                <input type="submit" name="inscription" value="Inscription">
            </form>
            <?php

            if (isset($_POST['inscription'])) {
                $username = $_POST["username"];
                $password = $_POST["password"];
                $email = $_POST["email"];
                if (($_POST["username"] != "") && ($_POST["password"] != "") && ($_POST["email"] != "")) {
                    if (check_nom($username) == 0 && check_email($email) == 0 && check_password($password) == 0) {
                        $password = md5($password);
                        user_register($username, $email, $password);
                    }
                } else
                    echo("Veuillez renseigner tous les champs");
            }

            function user_register($username1, $email, $pwd){
                try {
                    $servername = "localhost";
                    $username = "id2741208_nevios";
                    $password = "Nevreap0618er";
                    $dbname = "id2741208_games";
                    $dbh = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
                    $sql = 'SELECT * FROM farmSimulator_USERS WHERE Email= :email';
                    $stmt = $dbh->prepare($sql);
                    $stmt->execute(array(':email' => $email));
                    $res = $stmt->fetchColumn();
                    if ($res != 0)
                    {
                        echo("Cet e-mail est déjà  enregistré.");
                    }
                    else
                    {
                        $sql = 'SELECT * FROM farmSimulator_USERS WHERE Username= :username';
                        $stmt = $dbh->prepare($sql);
                        $stmt->execute(array(':username' => $username1));
                        $res = $stmt->fetchColumn();
                        if ($res != 0)
                        {
                            echo("Ce pseudonyme est déjà pris.");
                        }
                        else {
                            $sql = "INSERT INTO farmSimulator_USERS (Username, Email, Password) VALUES (:username, :email, :password)";
                            $stmt = $dbh->prepare($sql);
                            $stmt->execute(
                                array(
                                    ':username' => $username1,
                                    ':email' => $email,
                                    ':password' => $pwd,
                                )
                            );
                            echo "Félicitations ! Votre compte a bien été créé. Vous pouvez à présent vous connecter.";
                        }
                    }
                    $dbh = null;
                } catch (PDOException $e) {
                    print "Error!: " . $e->getMessage() . "<br/>";
                    die();
                }
            }
            ?>
        </section>
        </section>
    </body>
</html>
<?php

function check_nom($username) {
    if (preg_match('/[^A-Za-z_0-9]/', $username) == 1)
    {
        echo "Veuillez entrer un pseudonyme valide.";
        return '1';
    }
    else
    {
        if (strlen($username) < 3 || strlen($username) > 16)
        {
            echo "Votre pseudonyme doit faire entre 3 et 16 caractères.";
            return '1';
        }
        else
        {
            return 0;
        }
    }
}

function check_email($email) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL) == false)
    {
        echo "Veuillez entrer une adresse email valide.";
        return 1;
    }
    else
    {
        return 0;
    }
}

function check_password($password) {
    if ((strlen($password) < 5) || (strlen($password) > 16))
    {
        echo "Veuillez entrer un mot de passe entre 6 et 15 caracteres.";
        return 1;
    }
    else
    {
        if (ctype_alnum($password)) {
            if (preg_match('/[A-Z]/', $password) == 1) {
                if (preg_match('/[0-9]/i', $password) == 0) {
                    echo "Veuillez entrer un mot de passe avec au moins un chiffre.";
                    return 1;
                }
                else
                    return 0;
            }
            else {
                if ($cas == 0) {
                    echo "Veuillez entrer un mot de passe avec au moins une majuscule et un chiffre.";
                }
                return 1;
            }
        }
        else
            echo "Mot de passe invalide.";
    }
}