---
layout: clipnote
title: Automation & Local Intelligence
description: Rule engine automation and on-device AI features in ClipKunda
breadcrumb: Rules & AI
category: Automation
---

<div class="content-section">
    <h2>Rule Engine Automation</h2>
    <p>Create powerful workflows with the built-in rule engine.</p>

    <div class="image-container" style="margin: 1.5rem 0; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
        <img src="{{ '/assets/images/clipnote/rule-engine.svg' | relative_url }}" alt="Rule Engine Flowchart showing condition and action blocks" style="width: 100%; height: auto; display: block;">
    </div>

    <ul>
        <li><strong>Rule-based triggers</strong>: Evaluate every new clip against saved rules.</li>
        <li><strong>Flexible conditions</strong>: Match on content text, detected formats, tags, or clip types.</li>
        <li><strong>Multi-action pipelines</strong>: Auto-tag, favorite, pin, copy values, or run multiple actions in sequence.</li>
        <li><strong>Local execution</strong>: Rules run on-device with no network calls.</li>
        <li><strong>Debug logs</strong>: Console output shows rule evaluations for easy tuning.</li>
    </ul>
</div>

<div class="content-section" id="ai-chat">
    <h2>AI Chat</h2>
    <p>Interact with your data using the on-device LLM.</p>

    <div class="image-container" style="margin: 1.5rem 0; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
        <img src="{{ '/assets/images/clipnote/ai-chat.svg' | relative_url }}" alt="AI Chat Interface showing threaded conversation and clipboard context" style="width: 100%; height: auto; display: block;">
    </div>

    <ul>
        <li><strong>Local chat experience</strong>: Conversational UI powered by the on-device LLM; no cloud API required.</li>
        <li><strong>Threaded history</strong>: Saved conversations with editable titles and per-thread context.</li>
        <li><strong>Clipboard aware</strong>: Send clips or summaries into chat for quick reasoning.</li>
        <li><strong>Status-aware prompts</strong>: Inline status for loading models, disabled chat, or missing model selection.</li>
        <li><strong>Safe controls</strong>: Disable send while the model is responding; clear and delete threads inline.</li>
        <li><strong>Privacy</strong>: All processing happens locally on your machine.</li>
    </ul>
</div>

<div class="content-section" id="mcp-server">
    <h2>MCP Server Integration</h2>
    <p>ClipKunda includes a built-in Model Context Protocol (MCP) HTTP server to expose its capabilities to external AI clients.</p>

    <div class="image-container" style="margin: 1.5rem 0; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
        <img src="{{ '/assets/images/clipnote/mcp-server.svg' | relative_url }}" alt="MCP Server Diagram showing connections to external clients" style="width: 100%; height: auto; display: block;">
    </div>

    <ul>
        <li><strong>Built-in HTTP server</strong>: Optional MCP HTTP server you can start from Settings.</li>
        <li><strong>Client templates</strong>: One-click config exports for Claude Desktop, Codex Agent, and generic <code>.mcp.json</code> clients.</li>
        <li><strong>Tool registry</strong>: Exposes ClipKunda tools and resources (clipboard history) to external AI clients.</li>
        <li><strong>Streamable HTTP</strong>: Uses updated MCP spec (2025-03-26) with streaming support.</li>
        <li><strong>Local control</strong>: Start/stop server from the app; logs port and status in the console.</li>
    </ul>
</div>

<div class="content-section">
    <h2>Local Intelligence Settings</h2>
    <p>Manage your AI models and resources.</p>

    <div class="image-container" style="margin: 1.5rem 0; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
        <img src="{{ '/assets/images/clipnote/ai-settings.svg' | relative_url }}" alt="AI Settings Panel showing model selection and resource usage" style="width: 100%; height: auto; display: block;">
    </div>

    <ul>
        <li><strong>Local LLM toggle</strong>: Turn MLX-powered metadata on/off.</li>
        <li><strong>Model picker</strong>: Choose from built-in defaults:
            <ul>
                <li>Llama 3 8B Instruct</li>
                <li>Mistral 7B Instruct v0.3</li>
                <li>Qwen 2.5 7B Instruct</li>
            </ul>
        </li>
        <li><strong>Download manager</strong>: Fetch models from Hugging Face directly within the app.</li>
        <li><strong>Storage</strong>: Models are stored at <code>~/Library/Application Support/ClipKunda/Models/</code>.</li>
    </ul>
</div>
