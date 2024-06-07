<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && strpos($_SERVER['CONTENT_TYPE'], 'application/xml') !== false) {
    $xml = file_get_contents('php://input');
    
    $data = simplexml_load_string($xml);

    if ($data === false) {
        http_response_code(400);
        echo 'Invalid XML';
        exit;   
    }

    $nom = (string)$data->nom;
    $prenom = (string)$data->prenom;
    $email = (string)$data->email;
    $description = (string)$data->description;

    $errors = [];

    if (empty($nom)) {
        $errors[] = 'Le champ "Votre Nom" est requis.';
    }
    if (empty($prenom)) {
        $errors[] = 'Le champ "Votre Prénom" est requis.';
    }
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Veuillez entrer une adresse email valide.';
    }
    if (empty($description)) {
        $errors[] = 'Le champ "Motif du contact" est requis.';
    }
    if (!empty($errors)) {
        http_response_code(400);
        echo 'Validation errors: ' . implode(', ', $errors);
        exit;
    }
    
    http_response_code(200);
    echo 'Votre message a été envoyé avec succès.';
} else {
    http_response_code(400);
    echo 'Invalid request';
}
