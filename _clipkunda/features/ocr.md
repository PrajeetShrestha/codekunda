---
layout: clipkunda
title: OCR & Image Processing
description: Text recognition and image processing features in ClipKunda
breadcrumb: OCR & Images
category: Core Features
---

<div class="content-section">
    <h2>Text Recognition (OCR)</h2>
    <p>ClipKunda automatically processes images copied to your clipboard to extract text using the Vision Framework.</p>

    <div class="image-container" style="margin: 1.5rem 0; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
        <img src="{{ '/assets/images/clipkunda/ocr-extraction.svg' | relative_url }}" alt="OCR extraction process showing image to text conversion" style="width: 100%; height: auto; display: block;">
    </div>

    <h3>Key Features</h3>
    <ul>
        <li><strong>Accurate text recognition</strong>: High-quality text extraction from images.</li>
        <li><strong>Language correction</strong>: Automatic spelling and grammar correction.</li>
        <li><strong>Searchable text</strong>: OCR results are fully searchable in the app.</li>
        <li><strong>Multiple languages</strong>: Supports English and is expandable to other languages.</li>
        <li><strong>Error handling</strong>: Graceful fallback when OCR fails.</li>
    </ul>
</div>

<div class="content-section">
    <h2>Screenshot Support</h2>
    <p>Manage your screenshots efficiently with automatic detection and enhanced metadata.</p>

    <div class="image-container" style="margin: 1.5rem 0; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
        <img src="{{ '/assets/images/clipkunda/screenshot-manager.svg' | relative_url }}" alt="Screenshot management interface showing metadata and file path" style="width: 100%; height: auto; display: block;">
    </div>

    <ul>
        <li><strong>Automatic detection</strong>: Captures system screenshots instantly.</li>
        <li><strong>Format preservation</strong>: Maintains original image quality.</li>
        <li><strong>Metadata extraction</strong>: Local analysis for image descriptions (when Local LLM is enabled).</li>
        <li><strong>Timestamp labeling</strong>: Automatic dating of screenshots.</li>
        <li><strong>File storage</strong>: Saved locally in:</li>
    </ul>

    <div class="code-block">
        <pre><code class="language-bash">~/Library/Application Support/ClipKunda/images/</code></pre>
    </div>
</div>

<div class="content-section">
    <h2>Image Processing</h2>
    <p>Optimized for performance and accuracy.</p>

    <div class="image-container" style="margin: 1.5rem 0; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
        <img src="{{ '/assets/images/clipkunda/image-processing.svg' | relative_url }}" alt="Image processing pipeline flow diagram" style="width: 100%; height: auto; display: block;">
    </div>

    <ul>
        <li><strong>Resizing</strong>: Optimized for color extraction (150px max for analysis).</li>
        <li><strong>Sampling</strong>: ~10,000 pixel samples for large images.</li>
        <li><strong>Caching</strong>: Smart caching to reuse loaded images.</li>
        <li><strong>Transparent pixel filtering</strong>: Ignores fully transparent areas during analysis.</li>
    </ul>
</div>
