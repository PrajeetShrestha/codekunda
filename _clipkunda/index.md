---
layout: clipkunda
title: ClipKunda Documentation
description: Advanced Clipboard Manager Documentation
breadcrumb: Overview
permalink: /clipkunda/
---

<div class="content-section">
    <p>Welcome to the official documentation for ClipKunda, a powerful, privacy-first clipboard manager with on-device LLM intelligence.</p>

    <div class="image-container" style="margin: 2rem 0; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
        <img src="{{ '/assets/images/clipkunda/main-interface.png' | relative_url }}" alt="ClipKunda Main Interface showing sidebar and clip list" style="width: 100%; height: auto; display: block;">
    </div>

    <div class="feature-grid">
        <a href="{{ '/clipkunda/features/ocr/' | relative_url }}" class="feature-card" style="text-decoration: none; color: inherit;">
            <i class="feature-card__icon fa-solid fa-eye"></i>
            <div class="feature-card__title">OCR & Vision</div>
            <p>Extract text from images instantly with high accuracy and multi-language support.</p>
        </a>

        <a href="{{ '/clipkunda/features/colors/' | relative_url }}" class="feature-card" style="text-decoration: none; color: inherit;">
            <i class="feature-card__icon fa-solid fa-palette"></i>
            <div class="feature-card__title">Color Studio</div>
            <p>Advanced color detection, conversion, and palette extraction.</p>
        </a>

        <a href="{{ '/clipkunda/features/organization/' | relative_url }}" class="feature-card" style="text-decoration: none; color: inherit;">
            <i class="feature-card__icon fa-solid fa-folder-tree"></i>
            <div class="feature-card__title">Smart Organization</div>
            <p>AI tagging, powerful search, and intuitive categorization.</p>
        </a>

        <a href="{{ '/clipkunda/features/automation/' | relative_url }}" class="feature-card" style="text-decoration: none; color: inherit;">
            <i class="feature-card__icon fa-solid fa-robot"></i>
            <div class="feature-card__title">Local Intelligence</div>
            <p>On-device LLM chat, rule automation, and privacy-first processing.</p>
        </a>
    </div>
</div>

<div class="content-section">
    <h2>Key Highlights</h2>
    <ul>
        <li><strong>Privacy First</strong>: 100% local storage, no cloud sync, no tracking.</li>
        <li><strong>On-Device AI</strong>: Powered by MLX for local LLM capabilities.</li>
        <li><strong>Native Performance</strong>: Built with SwiftUI and SwiftData for macOS.</li>
        <li><strong>Universal Clipboard</strong>: Handles text, images, code, colors, and files.</li>
    </ul>
</div>

<div class="content-section">
    <h2>Quick Start</h2>
    <p>ClipKunda runs quietly in the background. Access it anytime using the global hotkey:</p>

    <div class="code-block">
        <pre><code class="language-text">Cmd + Option + V</code></pre>
    </div>

    <p>Start copying content, and ClipKunda will automatically capture, organize, and enhance your clipboard history.</p>
</div>
