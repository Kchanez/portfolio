<?php 
        include("./config/bdd.php");
        include("./config/function.php");

        if (isset($_REQUEST["ajout"])) {
            $nom = nettoyage($_REQUEST["nom"]);
            $prenom = nettoyage($_REQUEST["prenom"]);
            $email = nettoyage($_REQUEST["email"]);
            $sujet = nettoyage($_REQUEST["sujet"]);
            $message = nettoyage($_REQUEST["message"]);
            
            $lien = mysqli_connect(SERVEUR, LOGIN, MDP, BDD);
            $req = "INSERT INTO contact VALUES(NULL, '$nom', '$prenom', '$email', '$sujet', '$message' )";
            $res = mysqli_query($lien, $req);
            if (!$res) { //pas de resultat   
                echo "Erreur SQL : $req<br>" .mysqli_error($lien);
            }else {
                echo "success";
                header('Location: http://10.56.8.61/Portfolio/Contact.html');
                exit;
            }            
        }

?>
