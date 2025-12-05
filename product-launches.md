---
title: Product Launches
permalink: /product-launches/
releases:
  - name: ClipKunda
    version: 1.0.0
    image: /assets/images/clipkunda/clipkundalogo.png
    summary: Privacy-first clipboard manager for macOS with on-device intelligence.
    features:
      - High-accuracy OCR with image metadata extraction
      - Advanced Color Studio with palette extraction and conversions
      - Rule Engine for automated tagging and actions
      - On-device LLM chat (opt-in, no network calls)
      - Improved search, tagging, and organization capabilities
      - Transparent pixel filtering and smart caching for images
    primary_download_url: /dist/ClipKunda-Installer.dmg
    secondary_url: /clipkunda/
    notes_url: /releases/clipkunda/
    details: |
      Version 1.0.0 — Initial macOS release featuring OCR, Color Studio,
      Rule Engine, and optional local LLM chat powered by MLX. See full
      technical specifications and changelog in the release notes.
---

<section class="products-section">
  <div class="container">
    <h1 class="section-title center-text">Product Launches</h1>
    <p style="opacity:0.85; max-width: 780px; margin: 0 auto 2rem auto; text-align:center;">
      Official launch announcements with downloads, features, and notes — styled to match our site.
    </p>

    <div class="products-grid">
      {% for rel in page.releases %}
        {% include launch_card.html release=rel %}
      {% endfor %}
    </div>
  </div>
</section>

