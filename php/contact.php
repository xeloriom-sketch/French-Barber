<?php
// Autoriser les appels cross-origin depuis GitHub Pages
header("Access-Control-Allow-Origin: https://xeloriom-sketch.github.io");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Méthode non autorisée."]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

// Validation
$name    = trim($data["name"]    ?? "");
$phone   = trim($data["phone"]   ?? "");
$service = trim($data["service"] ?? "");
$date    = trim($data["date"]    ?? "");
$time    = trim($data["time"]    ?? "");
$style   = trim($data["style"]   ?? "");
$message = trim($data["message"] ?? "");

if (!$name || !$phone || !$service || !$date || !$time) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Champs obligatoires manquants."]);
    exit;
}

// Sanitisation basique
$name    = htmlspecialchars($name,    ENT_QUOTES, "UTF-8");
$phone   = htmlspecialchars($phone,   ENT_QUOTES, "UTF-8");
$service = htmlspecialchars($service, ENT_QUOTES, "UTF-8");
$date    = htmlspecialchars($date,    ENT_QUOTES, "UTF-8");
$time    = htmlspecialchars($time,    ENT_QUOTES, "UTF-8");
$style   = htmlspecialchars($style,   ENT_QUOTES, "UTF-8");
$message = htmlspecialchars($message, ENT_QUOTES, "UTF-8");

$to      = "frenchbarber01@gmail.com";
$subject = "=?UTF-8?B?" . base64_encode("Nouvelle réservation — $name") . "?=";

$body  = "Nouvelle demande de réservation reçue via le site web.\n\n";
$body .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$body .= "👤 Nom     : $name\n";
$body .= "📞 Tél     : $phone\n";
$body .= "✂️  Service : $service\n";
$body .= "📅 Date    : $date\n";
$body .= "🕐 Heure   : $time\n";
if ($style)   $body .= "💈 Style   : $style\n";
if ($message) $body .= "📝 Notes   : $message\n";
$body .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$body .= "\nEnvoyé depuis frenchbarber.com\n";

$headers  = "From: noreply@frenchbarber.com\r\n";
$headers .= "Reply-To: $phone\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(["success" => true, "message" => "Réservation envoyée avec succès."]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Erreur lors de l'envoi. Appelez le 07 45 10 74 01."]);
}
