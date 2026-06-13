<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") { http_response_code(204); exit; }
if ($_SERVER["REQUEST_METHOD"] !== "POST")    { http_response_code(405); echo json_encode(["success"=>false,"message"=>"Methode non autorisee."]); exit; }

$data    = json_decode(file_get_contents("php://input"), true);
$name    = htmlspecialchars(trim($data["name"]    ?? ""), ENT_QUOTES, "UTF-8");
$phone   = htmlspecialchars(trim($data["phone"]   ?? ""), ENT_QUOTES, "UTF-8");
$service = htmlspecialchars(trim($data["service"] ?? ""), ENT_QUOTES, "UTF-8");
$date    = htmlspecialchars(trim($data["date"]    ?? ""), ENT_QUOTES, "UTF-8");
$time    = htmlspecialchars(trim($data["time"]    ?? ""), ENT_QUOTES, "UTF-8");
$style   = htmlspecialchars(trim($data["style"]   ?? ""), ENT_QUOTES, "UTF-8");
$message = htmlspecialchars(trim($data["message"] ?? ""), ENT_QUOTES, "UTF-8");

if (!$name || !$phone || !$service || !$date || !$time) {
    http_response_code(400);
    echo json_encode(["success"=>false,"message"=>"Champs obligatoires manquants."]);
    exit;
}

$to      = "houirib@gmail.com";
$subject = "=?UTF-8?B?" . base64_encode("Reservation - $name - $date $time") . "?=";

$rows = [
    ["CLIENT",     $name],
    ["TELEPHONE",  '<a href="tel:'.$phone.'" style="color:#c8864a;text-decoration:none;font-weight:700;letter-spacing:1px;">'.$phone.'</a>'],
    ["PRESTATION", $service],
    ["DATE",       "$date &mdash; $time"],
];
if ($style)   $rows[] = ["STYLE",   $style];
if ($message) $rows[] = ["MESSAGE", $message];

$rowsHtml = "";
foreach ($rows as $i => $r) {
    $bg = $i % 2 === 0 ? "#161616" : "#111111";
    $rowsHtml .= '
      <tr>
        <td style="background:'.$bg.';padding:13px 20px;font-size:9px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:rgba(240,237,230,.3);font-family:Arial,sans-serif;white-space:nowrap;border-right:1px solid rgba(240,237,230,.05);width:30%;">'
          .$r[0].'
        </td>
        <td style="background:'.$bg.';padding:13px 20px;font-size:13px;color:#f0ede6;font-family:Arial,sans-serif;">'
          .$r[1].'
        </td>
      </tr>';
}

$html = '<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" bgcolor="#0a0a0a" style="background:#0a0a0a;padding:32px 16px;">
  <tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;border:1px solid rgba(240,237,230,.08);">

      <!-- HEADER -->
      <tr>
        <td bgcolor="#0d0d0d" style="background:#0d0d0d;padding:26px 32px;border-bottom:1px solid rgba(240,237,230,.06);">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <p style="margin:0 0 3px;font-size:9px;letter-spacing:4px;text-transform:uppercase;color:rgba(240,237,230,.25);font-family:Arial,sans-serif;">Barbershop Premium &middot; Lagnieu</p>
                <p style="margin:0;font-size:22px;font-weight:900;letter-spacing:5px;color:#f0ede6;text-transform:uppercase;font-family:Arial,sans-serif;">FRENCH BARBER</p>
              </td>
              <td align="right" valign="middle">
                <span style="display:inline-block;background:#c8864a;color:#0d0d0d;font-size:9px;font-weight:700;letter-spacing:3px;text-transform:uppercase;padding:7px 14px;font-family:Arial,sans-serif;">URGENT</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- SUBTITLE -->
      <tr>
        <td bgcolor="#111111" style="background:#111111;padding:20px 32px;border-bottom:1px solid rgba(240,237,230,.05);">
          <p style="margin:0 0 3px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:rgba(240,237,230,.3);font-family:Arial,sans-serif;">Nouvelle demande de reservation</p>
          <p style="margin:0;font-size:18px;font-weight:700;color:#f0ede6;font-family:Arial,sans-serif;">'.$name.' &mdash; <span style="color:#c8864a;">'.$date.'</span></p>
        </td>
      </tr>

      <!-- TABLE -->
      <tr>
        <td style="padding:0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-top:1px solid rgba(240,237,230,.05);">
            '.$rowsHtml.'
          </table>
        </td>
      </tr>

      <!-- CTA -->
      <tr>
        <td bgcolor="#0d0d0d" style="background:#0d0d0d;padding:26px 32px;text-align:center;border-top:1px solid rgba(240,237,230,.06);">
          <a href="tel:'.$phone.'" style="display:inline-block;background:#f0ede6;color:#0d0d0d;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;text-decoration:none;padding:14px 36px;font-family:Arial,sans-serif;">
            APPELER LE CLIENT
          </a>
        </td>
      </tr>

      <!-- FOOTER -->
      <tr>
        <td bgcolor="#080808" style="background:#080808;padding:16px 32px;text-align:center;border-top:1px solid rgba(240,237,230,.04);">
          <p style="margin:0;font-size:9px;color:rgba(240,237,230,.2);letter-spacing:2px;text-transform:uppercase;font-family:Arial,sans-serif;">
            French Barber &nbsp;&middot;&nbsp; 36 route du port &nbsp;&middot;&nbsp; Lagnieu 01150 &nbsp;&middot;&nbsp; 07 45 10 74 01
          </p>
          <p style="margin:5px 0 0;font-size:9px;color:rgba(240,237,230,.1);font-family:Arial,sans-serif;">frenchbarber01.com</p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>';

$from    = "noreply@frenchbarber01.com";
$headers  = "From: French Barber <$from>\r\n";
$headers .= "Return-Path: <$from>\r\n";
$headers .= "Reply-To: $name <$phone>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "X-Priority: 1\r\n";
$headers .= "X-MSMail-Priority: High\r\n";
$headers .= "Importance: High\r\n";

$sent = mail($to, $subject, $html, $headers, "-f $from");
echo json_encode(["success" => (bool)$sent, "message" => $sent ? "OK" : "Erreur envoi."]);
