---
layout: clipkunda
title: Data Management & Settings
description: Storage architecture, privacy, and configuration options in ClipKunda
breadcrumb: Data & Settings
category: Management
---

<div class="content-section">
    <h2>Storage Architecture</h2>
    <p>ClipKunda uses modern persistence technologies to ensure your data is safe and fast.</p>
    <ul>
        <li><strong>Framework</strong>: SwiftData</li>
        <li><strong>Local-only</strong>: All data stays on your Mac.</li>
        <li><strong>Database location</strong>: <code>~/Library/Application Support/ClipKunda/</code></li>
    </ul>
</div>

<div class="content-section">
    <h2>Data Operations</h2>
    <ul>
        <li><strong>Create</strong>: Automatic on clipboard change.</li>
        <li><strong>Update</strong>: Edit titles, toggle favorites/pins.</li>
        <li><strong>Delete</strong>: Individual or bulk deletion.</li>
        <li><strong>Clear all</strong>: Wipes all clips, rules, and models (Pinned clips are protected by default unless specified).</li>
        <li><strong>Deduplication</strong>: Skips identical or near-identical content.</li>
        <li><strong>Auto-cleanup</strong>: Optional retention window to delete old clips.</li>
    </ul>
</div>

<div class="content-section">
    <h2>Privacy & Security</h2>
    <p>ClipKunda is designed with privacy as a core principle.</p>
    <ul>
        <li><strong>100% Local</strong>: No cloud sync or external storage.</li>
        <li><strong>No Telemetry</strong>: No analytics or tracking.</li>
        <li><strong>Secure Storage</strong>: Uses standard macOS security practices.</li>
        <li><strong>On-demand AI</strong>: Models are downloaded only when requested.</li>
    </ul>
</div>

<div class="content-section">
    <h2>Configuration</h2>
    <ul>
        <li><strong>Launch at Login</strong>: Start automatically.</li>
        <li><strong>Global Hotkey</strong>: Enable/Disable or customize.</li>
        <li><strong>Screenshot Monitoring</strong>: Toggle auto-capture.</li>
        <li><strong>Size Limits</strong>: Configurable thresholds for large files.</li>
        <li><strong>Ignore List</strong>: Exclude specific apps by Bundle ID.</li>
    </ul>
</div>
