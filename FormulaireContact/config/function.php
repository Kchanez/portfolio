<?php
    function nettoyage($chaine) {
        $chaine = trim($chaine);
        $chaine = stripslashes($chaine);
        $chaine = strip_tags($chaine);
        $chaine = htmlspecialchars($chaine);
        return $chaine;
    }
?>