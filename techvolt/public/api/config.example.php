<?php
// SMTP Configuration Template for Power Electrical UAE
// COPY THIS FILE TO 'config.php' AND FILL IN YOUR CREDENTIALS

// SMTP Constants
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_SECURE', 'tls');

// Credentials
define('SMTP_USERNAME', 'your-email@gmail.com');
define('SMTP_PASSWORD', 'YOUR_16_CHARACTER_APP_PASSWORD_HERE'); // Generate at myaccount.google.com/apppasswords

// Email Settings
define('SMTP_FROM_EMAIL', 'your-email@gmail.com');
define('SMTP_FROM_NAME', 'Power Electrical Contact Form');
define('SMTP_TO_EMAIL', 'info@powerelectricaluae.com');

// Security & Rate Limiting
define('ALLOWED_ORIGIN', 'https://powerelectricaluae.com');
define('RATE_LIMIT_REQUESTS', 5);
define('RATE_LIMIT_TIME', 3600);
