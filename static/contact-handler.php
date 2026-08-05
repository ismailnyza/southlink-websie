<?php
/**
 * Contact form handler for Southlink Travels.
 * Deployed from static/ to the site root, so it runs on cPanel's PHP
 * alongside the static Gatsby build - no separate backend needed.
 */

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Honeypot field: real visitors never fill this in, bots usually do.
if (!empty($_POST['website'])) {
    echo json_encode(['success' => true]);
    exit;
}

function clean_header_value($value) {
    return trim(preg_replace('/[\r\n]+/', ' ', (string) $value));
}

$name = clean_header_value($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please fill in all fields with a valid email address.']);
    exit;
}

$name = mb_substr($name, 0, 200);
$message = mb_substr($message, 0, 5000);
$email = clean_header_value($email);

// TODO: confirm this is the inbox that should receive website inquiries.
$to = 'info@southlinktravels.com';
$subject = 'New contact form message - Southlink Travels';
$body = "Name: {$name}\nEmail: {$email}\n\nMessage:\n{$message}\n";

$headers = "From: Southlink Website <no-reply@southlinktravels.com>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = @mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Could not send your message. Please try WhatsApp or phone instead.']);
}
