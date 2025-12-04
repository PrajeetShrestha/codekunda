---
layout: clipnote
title: Technical Reference
description: Technical specifications and version information for ClipKunda
breadcrumb: Specs & Version
category: Reference
---

<div class="content-section">
    <h2>Version Information</h2>
    <p><strong>Current Version</strong>: 1.0.0</p>

    <h3>Requirements</h3>
    <ul>
        <li>macOS 14.0+ (Sonoma, Sequoia, or later)</li>
        <li>iOS 18.0+ (for iOS version)</li>
        <li>Xcode 15.0+ (for development)</li>
        <li>Swift 5.9+</li>
        <li>MLX-compatible models (downloaded on demand)</li>
    </ul>

    <h3>Tech Stack</h3>
    <ul>
        <li>SwiftUI</li>
        <li>SwiftData</li>
        <li>Vision Framework</li>
        <li>Carbon</li>
        <li>CoreImage</li>
        <li>Model Context Protocol (MCP)</li>
    </ul>
</div>

<div class="content-section">
    <h2>Feature Comparison: Local LLM vs Heuristic</h2>
    <table>
        <thead>
            <tr>
                <th>Feature</th>
                <th>Local LLM Enabled</th>
                <th>Local LLM Disabled</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Title Generation</td>
                <td>LLM-generated descriptive titles</td>
                <td>First line / 60 chars</td>
            </tr>
            <tr>
                <td>Tags</td>
                <td>3-6 LLM-selected tags</td>
                <td>Heuristic detection</td>
            </tr>
            <tr>
                <td>Summary</td>
                <td>LLM-written summary</td>
                <td>First sentence / 100 chars</td>
            </tr>
            <tr>
                <td>Markdown</td>
                <td>LLM-cleaned formatting</td>
                <td>Basic cleanup</td>
            </tr>
            <tr>
                <td>Code Detection</td>
                <td>Context-aware</td>
                <td>Pattern matching</td>
            </tr>
            <tr>
                <td>Image Description</td>
                <td>Local LLM description</td>
                <td>Timestamp-based</td>
            </tr>
        </tbody>
    </table>
</div>
