<?php
include("./FormulaireContact/config/bdd.php");
$lien = mysqli_connect(SERVEUR, LOGIN, MDP, BDD);

if (!$lien) {
    die('Erreur de connexion à la base de données: ' . mysqli_connect_error());
}

$requete = mysqli_query($lien, "SELECT * FROM contact");
if (!$requete) {
    die('Erreur de requête: ' . mysqli_error($lien));
}

$messages = array();
while ($row = mysqli_fetch_assoc($requete)) {
    $messages[] = $row;
}

mysqli_close($lien);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Sécurisée</title>
    <link rel="stylesheet" href="./MessagesStyle.css">
</head>
<body>
    <h1>Bienvenue, seb!</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Sujet</th>
                <th>Message</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($messages as $message) { ?>
                <tr>
                    <td><?= $message['id']; ?></td>
                    <td><?= $message['nom']; ?></td>
                    <td><?= $message['prenom']; ?></td>
                    <td><?= $message['email']; ?></td>
                    <td><?= $message['sujet']; ?></td>
                    <td><?= $message['message']; ?></td>
                </tr>
            <?php } ?>
        </tbody>
    </table>
</body>
</html>