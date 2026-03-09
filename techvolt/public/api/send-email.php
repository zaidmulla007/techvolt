<?php
/**
 * PHPMailer Email Handler for Power Electrical UAE
 *
 * Instructions for Hosting:
 * 1. Upload this file to public_html/api/
 * 2. Upload config.php to public_html/api/ (created from config.example.php)
 * 3. Upload PHPMailer folder to public_html/api/PHPMailer/
 */

header('Content-Type: application/json');

// 1. CORS Setup
require_once 'config.php';

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin === ALLOWED_ORIGIN || $origin === 'http://localhost:3000') {
    header("Access-Control-Allow-Origin: $origin");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
}

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

// 2. Load PHPMailer
if (file_exists('vendor/autoload.php')) {
    require 'vendor/autoload.php';
} elseif (file_exists('PHPMailer/src/PHPMailer.php')) {
    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Server error: PHPMailer library not found.']);
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// 3. Rate Limiting
$ip = $_SERVER['REMOTE_ADDR'];
$rate_file = sys_get_temp_dir() . '/rate_limit_' . md5($ip);
$current_time = time();

if (file_exists($rate_file)) {
    $data = json_decode(file_get_contents($rate_file), true);
    if ($data['count'] >= RATE_LIMIT_REQUESTS && ($current_time - $data['start_time']) < RATE_LIMIT_TIME) {
        http_response_code(429);
        echo json_encode(['status' => 'error', 'message' => 'Too many submissions. Please try again later.']);
        exit;
    }
    if (($current_time - $data['start_time']) >= RATE_LIMIT_TIME) {
        $data = ['count' => 0, 'start_time' => $current_time];
    }
} else {
    $data = ['count' => 0, 'start_time' => $current_time];
}

// 4. Process Form Data
$input = json_decode(file_get_contents('php://input'), true);

$name = filter_var($input['name'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($input['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = filter_var($input['phone'] ?? '', FILTER_SANITIZE_STRING);
$company = filter_var($input['company'] ?? '', FILTER_SANITIZE_STRING);
$message = filter_var($input['message'] ?? '', FILTER_SANITIZE_STRING);

// Basic Validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Name, Email and Message are required.']);
    exit;
}

// 5. Send Email
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USERNAME;
    $mail->Password   = SMTP_PASSWORD;
    $mail->SMTPSecure = SMTP_SECURE;
    $mail->Port       = SMTP_PORT;

    $mail->setFrom(SMTP_FROM_EMAIL, SMTP_FROM_NAME);
    $mail->addAddress(SMTP_TO_EMAIL);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = "New Inquiry from Power Electrical Website";
    $mail->Body    = "
        <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
            <div style='background: linear-gradient(135deg, #1960A4, #33E3EE); padding: 20px; text-align: center;'>
                <h1 style='color: white; margin: 0;'>New Contact Form Submission</h1>
            </div>
            <div style='padding: 30px; background: #f9f9f9;'>
                <table style='width: 100%; border-collapse: collapse;'>
                    <tr>
                        <td style='padding: 10px; font-weight: bold; color: #1960A4; width: 120px;'>Name:</td>
                        <td style='padding: 10px;'>{$name}</td>
                    </tr>
                    <tr style='background: #fff;'>
                        <td style='padding: 10px; font-weight: bold; color: #1960A4;'>Email:</td>
                        <td style='padding: 10px;'><a href='mailto:{$email}'>{$email}</a></td>
                    </tr>
                    <tr>
                        <td style='padding: 10px; font-weight: bold; color: #1960A4;'>Phone:</td>
                        <td style='padding: 10px;'>{$phone}</td>
                    </tr>
                    <tr style='background: #fff;'>
                        <td style='padding: 10px; font-weight: bold; color: #1960A4;'>Company:</td>
                        <td style='padding: 10px;'>{$company}</td>
                    </tr>
                </table>
                <div style='margin-top: 20px; padding: 15px; background: white; border-left: 4px solid #1960A4;'>
                    <p style='font-weight: bold; color: #1960A4; margin: 0 0 10px 0;'>Message:</p>
                    <p style='margin: 0; line-height: 1.6;'>{$message}</p>
                </div>
            </div>
            <div style='background: #1960A4; padding: 15px; text-align: center;'>
                <p style='color: white; margin: 0; font-size: 12px;'>Power Electrical Trading LLC | powerelectricaluae.com</p>
            </div>
        </div>
    ";
    $mail->AltBody = "Name: $name\nEmail: $email\nPhone: $phone\nCompany: $company\nMessage: $message";

    $mail->send();

    $data['count']++;
    file_put_contents($rate_file, json_encode($data));

    echo json_encode(['status' => 'success', 'message' => 'Message sent successfully!']);

} catch (Exception $e) {
    error_log("Mailer Error: {$mail->ErrorInfo}");
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Message could not be sent. Please contact us directly.']);
}
