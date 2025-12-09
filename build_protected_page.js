const fs = require('fs');
const path = require('path');

const encryptedPath = path.join(__dirname, 'encrypted_content.txt');
const encryptedContent = fs.readFileSync(encryptedPath, 'utf8').trim();

const headContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SportKonnectAI - Technical Estimate</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
    <style>
        .markdown-body {
            background-color: white;
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
        }

        .markdown-body h1,
        .markdown-body h2,
        .markdown-body h3 {
            color: #2c3e50;
            margin-top: 1.5rem;
            margin-bottom: 1rem;
        }

        .markdown-body h1 {
            border-bottom: 2px solid #eee;
            padding-bottom: 0.5rem;
        }

        .markdown-body h2 {
            border-bottom: 1px solid #eee;
            padding-bottom: 0.3rem;
        }

        .markdown-body ul,
        .markdown-body ol {
            padding-left: 1.5rem;
        }

        .markdown-body table {
            width: 100%;
            margin-bottom: 1rem;
            border-collapse: collapse;
        }

        .markdown-body th,
        .markdown-body td {
            padding: 0.75rem;
            border: 1px solid #dee2e6;
        }

        .markdown-body th {
            background-color: #f8f9fa;
            font-weight: 600;
        }

        .markdown-body blockquote {
            border-left: 4px solid #eee;
            padding-left: 1rem;
            color: #6c757d;
        }
    </style>
</head>`;

const bodyTemplate = `
<body>
    <div id="login-container" class="container d-flex justify-content-center align-items-center vh-100">
        <div class="card shadow-lg p-4" style="max-width: 400px; width: 100%;">
            <div class="text-center mb-4">
                 <i class="fa-solid fa-lock fa-3x text-primary mb-3"></i>
                 <h3>Protected Document</h3>
                 <p class="text-muted">Enter password to view content</p>
            </div>
            <form id="login-form">
                <div class="mb-3">
                    <input type="password" id="password-input" class="form-control" placeholder="Password" required>
                </div>
                <button type="submit" class="btn btn-primary w-100">Unlock</button>
                <div id="error-msg" class="text-danger mt-2 text-center" style="display: none;">Incorrect password</div>
            </form>
        </div>
    </div>

    <div id="content-container" style="display: none;"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        const encryptedContent = "${encryptedContent}";

        document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('password-input').value;
            const errorMsg = document.getElementById('error-msg');

            try {
                const decrypted = CryptoJS.AES.decrypt(encryptedContent, password);
                const decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);

                if (decryptedStr && decryptedStr.length > 0) {
                    document.getElementById('login-container').remove();
                    const contentContainer = document.getElementById('content-container');
                    contentContainer.innerHTML = decryptedStr;
                    contentContainer.style.display = 'block';
                } else {
                    throw new Error("Empty decryption - likely wrong password");
                }
            } catch (err) {
                console.error(err);
                errorMsg.style.display = 'block';
            }
        });
    </script>
</body>
</html>`;

const fullHtml = headContent + bodyTemplate;
const targetPath = path.join(__dirname, 'internal/sportkonnectai/mock/technical_estimate.html');

fs.writeFileSync(targetPath, fullHtml);
console.log("Protected file written to: " + targetPath);
