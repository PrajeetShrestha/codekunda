---
layout: clipkunda
title: Color Detection & Management
description: Color code detection and palette extraction in ClipKunda
breadcrumb: Colors
category: Core Features
---

<div class="content-section">
    <h2>Automatic Color Code Detection</h2>
    <p>ClipKunda automatically detects and recognizes multiple color formats from your clipboard content.</p>

    <div class="image-container" style="margin: 1.5rem 0; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
        <img src="{{ '/assets/images/clipkunda/color-detection.svg' | relative_url }}" alt="Color Detection Interface showing hex, rgb, and hsl values" style="width: 100%; height: auto; display: block;">
    </div>

    <h3>Supported Formats</h3>
    <ul>
        <li><strong>Hex colors</strong>:
            <ul>
                <li>3-digit: <code>#F00</code></li>
                <li>6-digit: <code>#FF0000</code></li>
                <li>8-digit with alpha: <code>#FF0000FF</code></li>
            </ul>
        </li>
        <li><strong>RGB/RGBA colors</strong>:
            <ul>
                <li>Standard: <code>rgb(255, 0, 0)</code></li>
                <li>With alpha: <code>rgba(255, 0, 0, 0.5)</code></li>
            </ul>
        </li>
        <li><strong>HSL/HSLA colors</strong>:
            <ul>
                <li>Standard: <code>hsl(0, 100%, 50%)</code></li>
                <li>With alpha: <code>hsla(0, 100%, 50%, 0.5)</code></li>
            </ul>
        </li>
    </ul>
</div>

<div class="content-section">
    <h2>Conversion & Copy Options</h2>
    <p>When a color code is detected, you get specialized tools:</p>
    <ul>
        <li><strong>Visual preview</strong>: Live color swatch display (120x120px in detail view).</li>
        <li><strong>Multi-format conversion</strong>: Convert between Hex, RGB, and HSL instantly.</li>
        <li><strong>Copy menu</strong>: Quick copy in any format.</li>
        <li><strong>Alpha channel support</strong>: Correctly handles transparency values.</li>
    </ul>
</div>

<div class="content-section">
    <h2>Color Palette Extraction</h2>
    <p>Advanced color analysis for images using machine learning.</p>

    <div class="image-container" style="margin: 1.5rem 0; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
        <img src="{{ '/assets/images/clipkunda/color-palette.svg' | relative_url }}" alt="Palette Extraction showing an image and 5 dominant colors" style="width: 100%; height: auto; display: block;">
    </div>

    <h3>How it works</h3>
    <ul>
        <li><strong>K-means clustering</strong>: Extracts dominant colors.</li>
        <li><strong>Up to 5 colors</strong>: Identifies the most prominent colors in an image.</li>
        <li><strong>Smart filtering</strong>: Removes very dark, light, and desaturated colors.</li>
        <li><strong>Vibrancy sorting</strong>: Colors sorted by saturation and brightness.</li>
    </ul>

    <h3>Usage</h3>
    <ul>
        <li><strong>Visual palette bar</strong>: Shows color strip below image thumbnails.</li>
        <li><strong>Click to copy</strong>: Individual palette colors copyable with single click.</li>
        <li><strong>Hex output</strong>: All palette colors provided in hex format.</li>
    </ul>
</div>
