<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

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


    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.ethereal.email';
        $mail->SMTPAuth = true;
        $mail->Username = 'arden.pacocha@ethereal.email';
        $mail->Password = 'SCzpSZ7hVqFUz3g9C6';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('arden.pacocha@ethereal.email', 'Webmaster');
        $mail->addAddress('arden.pacocha@ethereal.email'); 

        $mail->isHTML(true);
        $mail->Subject = 'Nouveau message de contact';
        $mail->Body    = "Nom: $nom<br>Prénom: $prenom<br>Email: $email<br>Description: $description";
        $mail->AltBody = "Nom: $nom\nPrénom: $prenom\nEmail: $email\nDescription: $description";

        $mail->send();
        http_response_code(200);
        echo 'Votre message a été envoyé avec succès.';
    } catch (Exception $e) {
        http_response_code(500);
        echo "L'email n'a pas pu être envoyé. Erreur: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(400);
    echo 'Invalid request';
}

