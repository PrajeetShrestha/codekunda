---
title: Product Launches
permalink: /product-launches/
releases:
  - name: CarKunda
    version: 1.0.0
    image: /assets/images/carkunda-logo.png
    summary: Nepal's comprehensive car information platform — specs, prices, comparisons, and reviews for every car available in Nepal.
    features:
      - Complete car database with detailed specifications for Nepal market
      - Price listings in NPR with multi-variant support
      - Side-by-side car comparison tool
      - EV, Hybrid, and ICE vehicle coverage
      - Brand pages with full model lineups
      - Budget-based car browsing
      - Image galleries and brochure downloads
      - Dark/light mode with responsive design
    primary_download_url: https://carkunda.com
    details: |
      Version 1.0.0 — Full launch of CarKunda featuring 50+ cars across
      major brands in Nepal including BYD, MG, Hyundai, Kia, Toyota, and more.
      Built with Next.js, MongoDB, and Tailwind CSS.
  - name: LogicLand for iOS
    version: 1.0.0
    image: /assets/images/logicland/logic_land_logo.png
    summary: Educational iOS app helping kids learn math, logic, and reading through 25+ interactive games with parent dashboard.
    features:
      - 25+ Educational Games covering math, logic, and reading skills
      - Parent Dashboard with detailed progress tracking and analytics
      - Text-to-Speech integration for audio feedback and learning
      - Flexible subscription model with monthly, yearly, and lifetime options
      - Kid-friendly SwiftUI interface with colorful themes
      - Local metrics tracking with session history
    primary_download_url: https://apps.apple.com/np/app/logicland-kids-math-reading/id6757007447
    secondary_url: /logicland/
    notes_url: /releases/logicland/
    details: |
      Version 1.0.0 — Initial iOS release featuring 25+ educational games
      across math, logic, and reading categories. Includes parent dashboard
      for progress tracking and optional subscription for premium features.
  - name: ClipKunda for macOS
    version: 1.0.0
    image: /assets/images/clipkunda/clipkundalogo.png
    summary: The most feature packed yet, easy to use Clipboard Manager for macOS with on device intelligence.
    features:
      - High-accuracy OCR with image metadata extraction
      - MCP Integration, MCP client get context from your pastes.
      - Rule Engine for automated tagging and actions
      - On-device LLM chat (opt-in, no network calls)
      - Search, tagging and organization capabilities
      - Color pallete extraction from image, text transformations and more...
    primary_download_url: https://github.com/PrajeetShrestha/clipkunda-releases/releases/download/v1.0.0/ClipKunda-Installer.dmg
    secondary_url: /clipkunda/
    notes_url: /releases/clipkunda/
    details: |
      Version 1.0.0 — Initial macOS release featuring OCR, Color Studio,
      Rule Engine, and optional local LLM chat powered by MLX. See full
      technical specifications and changelog in the [release notes](https://github.com/PrajeetShrestha/clipkunda-releases/releases).
---

<section class="products-section">
  <div class="container">
    <h1 class="section-title center-text">Product Launches</h1>
    <p class="products-intro">
      Check out our latest products — CarKunda, Nepal's car info platform; LogicLand, an educational iOS app for kids; and ClipKunda, the ultimate clipboard manager with on-device intelligence.
    </p>

    <div class="products-launch-grid">
      {% for rel in page.releases %}
        {% include launch_card.html release=rel %}
      {% endfor %}
    </div>
  </div>
</section>

