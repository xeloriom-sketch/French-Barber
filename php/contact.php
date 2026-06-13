<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") { http_response_code(204); exit; }
if ($_SERVER["REQUEST_METHOD"] !== "POST") { http_response_code(405); echo json_encode(["success" => false, "message" => "Méthode non autorisée."]); exit; }

$data = json_decode(file_get_contents("php://input"), true);

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

$name    = htmlspecialchars($name,    ENT_QUOTES, "UTF-8");
$phone   = htmlspecialchars($phone,   ENT_QUOTES, "UTF-8");
$service = htmlspecialchars($service, ENT_QUOTES, "UTF-8");
$date    = htmlspecialchars($date,    ENT_QUOTES, "UTF-8");
$time    = htmlspecialchars($time,    ENT_QUOTES, "UTF-8");
$style   = htmlspecialchars($style,   ENT_QUOTES, "UTF-8");
$message = htmlspecialchars($message, ENT_QUOTES, "UTF-8");

$to      = "houirib@gmail.com";
$subject = "=?UTF-8?B?" . base64_encode("🚨 RÉSERVATION URGENTE — $name · $date à $time") . "?=";

$html = '<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:30px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:4px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.1);">

      <!-- HEADER -->
      <tr>
        <td style="background:#0d0d0d;padding:28px 36px;text-align:center;">
          <p style="margin:0;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:rgba(255,255,255,.4);font-family:Arial,sans-serif;">Barbershop Premium · Lagnieu</p>
          <h1 style="margin:8px 0 0;font-size:28px;font-weight:900;letter-spacing:6px;color:#ffffff;text-transform:uppercase;font-family:Arial,sans-serif;">FRENCH BARBER</h1>
        </td>
      </tr>

      <!-- BADGE URGENT -->
      <tr>
        <td style="background:#b91c1c;padding:12px 36px;text-align:center;">
          <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#ffffff;font-family:Arial,sans-serif;">
            🚨 &nbsp; NOUVELLE RÉSERVATION URGENTE &nbsp; 🚨
          </p>
        </td>
      </tr>

      <!-- BODY -->
      <tr>
        <td style="padding:36px 36px 20px;">
          <p style="margin:0 0 24px;font-size:15px;color:#374151;line-height:1.6;font-family:Arial,sans-serif;">
            Un client vient de soumettre une demande de réservation. Confirmez rapidement par téléphone ou SMS.
          </p>

          <!-- INFO TABLE -->
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:4px;overflow:hidden;margin-bottom:24px;">
            <tr style="background:#f9fafb;">
              <td style="padding:14px 18px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6b7280;font-family:Arial,sans-serif;width:38%;border-bottom:1px solid #e5e7eb;">👤 Client</td>
              <td style="padding:14px 18px;font-size:14px;font-weight:700;color:#111827;font-family:Arial,sans-serif;border-bottom:1px solid #e5e7eb;">' . $name . '</td>
            </tr>
            <tr>
              <td style="padding:14px 18px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6b7280;font-family:Arial,sans-serif;border-bottom:1px solid #e5e7eb;">📞 Téléphone</td>
              <td style="padding:14px 18px;font-size:14px;color:#111827;font-family:Arial,sans-serif;border-bottom:1px solid #e5e7eb;"><a href="tel:' . $phone . '" style="color:#0d0d0d;font-weight:700;text-decoration:none;">' . $phone . '</a></td>
            </tr>
            <tr style="background:#f9fafb;">
              <td style="padding:14px 18px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6b7280;font-family:Arial,sans-serif;border-bottom:1px solid #e5e7eb;">✂️ Prestation</td>
              <td style="padding:14px 18px;font-size:14px;font-weight:700;color:#111827;font-family:Arial,sans-serif;border-bottom:1px solid #e5e7eb;">' . $service . '</td>
            </tr>
            <tr>
              <td style="padding:14px 18px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6b7280;font-family:Arial,sans-serif;border-bottom:1px solid #e5e7eb;">📅 Date</td>
              <td style="padding:14px 18px;font-size:14px;font-weight:700;color:#0d0d0d;font-family:Arial,sans-serif;border-bottom:1px solid #e5e7eb;">' . $date . ' &nbsp;·&nbsp; ' . $time . '</td>
            </tr>'
            . ($style ? '
            <tr style="background:#f9fafb;">
              <td style="padding:14px 18px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6b7280;font-family:Arial,sans-serif;border-bottom:1px solid #e5e7eb;">💈 Style</td>
              <td style="padding:14px 18px;font-size:14px;color:#111827;font-family:Arial,sans-serif;border-bottom:1px solid #e5e7eb;">' . $style . '</td>
            </tr>' : '')
            . ($message ? '
            <tr>
              <td style="padding:14px 18px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6b7280;font-family:Arial,sans-serif;">📝 Notes</td>
              <td style="padding:14px 18px;font-size:14px;color:#111827;font-family:Arial,sans-serif;">' . $message . '</td>
            </tr>' : '') . '
          </table>

          <!-- CTA -->
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding:8px 0 28px;">
                <a href="tel:' . $phone . '" style="display:inline-block;background:#0d0d0d;color:#ffffff;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;text-decoration:none;padding:14px 36px;border-radius:2px;font-family:Arial,sans-serif;">
                  📞 &nbsp; APPELER ' . strtoupper($name) . '
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- FOOTER -->
      <tr>
        <td style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:20px 36px;text-align:center;">
          <p style="margin:0;font-size:11px;color:#9ca3af;letter-spacing:1px;font-family:Arial,sans-serif;">
            French Barber · 36 route du port · Lagnieu 01150 · 07 45 10 74 01
          </p>
          <p style="margin:6px 0 0;font-size:10px;color:#d1d5db;font-family:Arial,sans-serif;">
            Email généré automatiquement depuis frenchbarber01.com
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>';

$headers  = "From: French Barber <noreply@frenchbarber01.com>\r\n";
$headers .= "Reply-To: $name <$phone>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";
$headers .= "X-Priority: 1\r\n";
$headers .= "X-MSMail-Priority: High\r\n";
$headers .= "Importance: High\r\n";

$sent = mail($to, $subject, $html, $headers);

if ($sent) {
    echo json_encode(["success" => true, "message" => "Réservation envoyée avec succès."]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Erreur lors de l'envoi. Appelez le 07 45 10 74 01."]);
}
