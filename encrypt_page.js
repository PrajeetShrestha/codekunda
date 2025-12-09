const fs = require('fs');
const CryptoJS = require('crypto-js');
const path = require('path');

const filePath = path.join(__dirname, 'internal/sportkonnectai/mock/technical_estimate.html');
const content = fs.readFileSync(filePath, 'utf8');

// Extract body content
const bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/i);
if (!bodyMatch) {
    console.error("Could not find body content");
    process.exit(1);
}

const bodyContent = bodyMatch[1];
const password = 'SportKonnect2025!';

// Encrypt
const encrypted = CryptoJS.AES.encrypt(bodyContent, password).toString();

fs.writeFileSync('encrypted_content.txt', encrypted);
console.log("Written to encrypted_content.txt");
