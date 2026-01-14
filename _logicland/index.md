---
layout: default
title: LogicLand - Educational Games for Kids
description: Educational iOS app helping kids learn math, logic, and reading through 25+ interactive games
permalink: /logicland/
---

<style>
/* LogicLand Custom Theme - Playful & Colorful */
.logicland-page {
  --ll-purple: #8B5CF6;
  --ll-blue: #3B82F6;
  --ll-pink: #EC4899;
  --ll-orange: #F59E0B;
  --ll-green: #22C55E;
  --ll-gradient: linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #3B82F6 100%);
  --ll-bg: linear-gradient(180deg, #F8FAFC 0%, #EEF2FF 50%, #FCE7F3 100%);
  background: var(--ll-bg);
  min-height: 100vh;
  padding-bottom: 4rem;
}

[data-theme="dark"] .logicland-page,
.logicland-page {
  background: var(--ll-bg) !important;
  --text-color: #1F2937;
  --text-muted: #6B7280;
}

.logicland-page * {
  color: #1F2937;
}

.logicland-page .text-muted {
  color: #6B7280 !important;
}

/* Floating Decorations */
.ll-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
  z-index: 0;
  pointer-events: none;
}

.ll-blob-1 {
  width: 300px;
  height: 300px;
  background: #C4B5FD;
  top: 10%;
  right: -100px;
}

.ll-blob-2 {
  width: 250px;
  height: 250px;
  background: #FBCFE8;
  top: 40%;
  left: -80px;
}

.ll-blob-3 {
  width: 200px;
  height: 200px;
  background: #93C5FD;
  bottom: 20%;
  right: 10%;
}

/* Hero Section */
.ll-hero {
  position: relative;
  text-align: center;
  padding: 8rem 1rem 4rem;
  overflow: hidden;
}

.ll-hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.ll-logo {
  width: 140px;
  height: 140px;
  border-radius: 32px;
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
  margin-bottom: 1.5rem;
}

.ll-title {
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 800;
  background: var(--ll-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  margin-bottom: 0.5rem;
}

.ll-tagline {
  font-size: 1.25rem;
  color: var(--ll-purple) !important;
  font-weight: 600;
  margin-bottom: 1rem;
}

.ll-description {
  font-size: 1.1rem;
  color: #6B7280 !important;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.7;
}

/* Buttons */
.ll-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.ll-btn-primary {
  background: var(--ll-gradient);
  color: white !important;
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
}

.ll-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.5);
}

.ll-btn-outline {
  background: white;
  border: 2px solid var(--ll-purple);
  color: var(--ll-purple) !important;
}

.ll-btn-outline:hover {
  background: var(--ll-purple);
  color: white !important;
}

/* Screenshot Gallery */
.ll-screenshots {
  padding: 2rem 1rem;
  position: relative;
  z-index: 1;
}

.ll-section-title {
  text-align: center;
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: 700;
  color: #1F2937 !important;
  margin-bottom: 0.5rem;
}

.ll-section-subtitle {
  text-align: center;
  color: #6B7280 !important;
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
}

.ll-phone-gallery {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.ll-phone-frame {
  background: #1F2937;
  border-radius: 40px;
  padding: 12px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  max-width: 220px;
}

.ll-phone-frame:hover {
  transform: translateY(-10px) scale(1.02);
}

.ll-phone-screen {
  border-radius: 30px;
  overflow: hidden;
  background: white;
}

.ll-phone-screen img {
  width: 100%;
  height: auto;
  display: block;
}

.ll-phone-label {
  text-align: center;
  margin-top: 1rem;
  font-weight: 600;
  color: #4B5563 !important;
  font-size: 0.9rem;
}

/* Feature Cards */
.ll-features {
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.ll-features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.ll-feature-card {
  background: white;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #E5E7EB;
}

.ll-feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(139, 92, 246, 0.15);
  border-color: var(--ll-purple);
}

.ll-feature-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.ll-feature-icon.purple { background: #EDE9FE; color: var(--ll-purple); }
.ll-feature-icon.blue { background: #DBEAFE; color: var(--ll-blue); }
.ll-feature-icon.pink { background: #FCE7F3; color: var(--ll-pink); }
.ll-feature-icon.green { background: #D1FAE5; color: var(--ll-green); }
.ll-feature-icon.orange { background: #FEF3C7; color: var(--ll-orange); }

.ll-feature-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1F2937 !important;
  margin-bottom: 0.75rem;
}

.ll-feature-card p {
  color: #6B7280 !important;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Games Section */
.ll-games {
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.ll-games-category {
  margin-bottom: 2.5rem;
}

.ll-category-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #E5E7EB;
}

.ll-category-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.ll-category-header h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1F2937 !important;
  margin: 0;
}

.ll-category-badge {
  background: #EDE9FE;
  color: var(--ll-purple) !important;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: auto;
}

.ll-games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
}

.ll-game-card {
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #F3F4F6;
}

.ll-game-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.12);
  border-color: var(--ll-purple);
}

.ll-game-card strong {
  display: block;
  font-size: 0.95rem;
  color: #1F2937 !important;
  margin-bottom: 0.35rem;
}

.ll-game-card span {
  font-size: 0.8rem;
  color: #9CA3AF !important;
}

/* Pricing Section */
.ll-pricing {
  padding: 3rem 1rem;
  max-width: 900px;
  margin: 0 auto;
}

.ll-pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.ll-pricing-card {
  background: white;
  border-radius: 24px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
}

.ll-pricing-card.featured {
  border-color: var(--ll-purple);
  transform: scale(1.02);
}

.ll-pricing-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--ll-gradient);
  color: white !important;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.ll-pricing-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1F2937 !important;
  margin-bottom: 0.5rem;
}

.ll-pricing-card p {
  color: #6B7280 !important;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* CTA Section */
.ll-cta {
  text-align: center;
  padding: 3rem 1rem;
  position: relative;
  z-index: 1;
}

.ll-cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Legal Links */
.ll-legal {
  text-align: center;
  padding: 2rem 1rem;
  margin-top: 2rem;
  border-top: 1px solid #E5E7EB;
}

.ll-legal a {
  color: #6B7280 !important;
  font-size: 0.9rem;
  margin: 0 1rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.ll-legal a:hover {
  color: var(--ll-purple) !important;
}

/* Responsive */
@media (max-width: 768px) {
  .ll-phone-frame {
    max-width: 180px;
  }

  .ll-phone-gallery {
    gap: 1rem;
  }

  .ll-cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .ll-btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}
</style>

<div class="logicland-page">
  <!-- Decorative Blobs -->
  <div class="ll-blob ll-blob-1"></div>
  <div class="ll-blob ll-blob-2"></div>
  <div class="ll-blob ll-blob-3"></div>

  <div class="container">
    <!-- Hero Section -->
    <section class="ll-hero">
      <div class="ll-hero-content">
        <img src="{{ '/assets/images/logicland/logic_land_logo.png' | relative_url }}" alt="LogicLand Logo" class="ll-logo">
        <h1 class="ll-title">LogicLand</h1>
        <p class="ll-tagline">Play & Learn!</p>
        <p class="ll-description">
          The fun way for kids to master math, logic, and reading through 25+ colorful interactive games. Track progress with the parent dashboard and watch your child grow!
        </p>
        <a href="https://apps.apple.com/np/app/logicland-kids-math-reading/id6757007447" class="ll-btn ll-btn-primary">
          <i class="fab fa-apple"></i> Download on App Store
        </a>
      </div>
    </section>

    <!-- App Screenshots -->
    <section class="ll-screenshots">
      <h2 class="ll-section-title">See LogicLand in Action</h2>
      <p class="ll-section-subtitle">Beautiful, kid-friendly design that makes learning fun</p>

      <div class="ll-phone-gallery">
        <div>
          <div class="ll-phone-frame">
            <div class="ll-phone-screen">
              <img src="{{ '/assets/images/logicland/iphone_images/splash-screen.png' | relative_url }}" alt="LogicLand Splash Screen">
            </div>
          </div>
          <p class="ll-phone-label">Welcome</p>
        </div>

        <div>
          <div class="ll-phone-frame">
            <div class="ll-phone-screen">
              <img src="{{ '/assets/images/logicland/iphone_images/main-menu.png' | relative_url }}" alt="LogicLand Main Menu">
            </div>
          </div>
          <p class="ll-phone-label">Games Menu</p>
        </div>

        <div>
          <div class="ll-phone-frame">
            <div class="ll-phone-screen">
              <img src="{{ '/assets/images/logicland/iphone_images/home-screen.png' | relative_url }}" alt="LogicLand Home Screen">
            </div>
          </div>
          <p class="ll-phone-label">Home</p>
        </div>

        <div>
          <div class="ll-phone-frame">
            <div class="ll-phone-screen">
              <img src="{{ '/assets/images/logicland/iphone_images/game-balance-scale.png' | relative_url }}" alt="Balance Scale Game">
            </div>
          </div>
          <p class="ll-phone-label">Balance Scale</p>
        </div>

        <div>
          <div class="ll-phone-frame">
            <div class="ll-phone-screen">
              <img src="{{ '/assets/images/logicland/iphone_images/game-tick-tock.png' | relative_url }}" alt="Tick Tock Time Game">
            </div>
          </div>
          <p class="ll-phone-label">Tell Time</p>
        </div>

        <div>
          <div class="ll-phone-frame">
            <div class="ll-phone-screen">
              <img src="{{ '/assets/images/logicland/iphone_images/game-read-aloud.png' | relative_url }}" alt="Read Aloud Game">
            </div>
          </div>
          <p class="ll-phone-label">Read Aloud</p>
        </div>

        <div>
          <div class="ll-phone-frame">
            <div class="ll-phone-screen">
              <img src="{{ '/assets/images/logicland/iphone_images/parent-dashboard.png' | relative_url }}" alt="Parent Dashboard">
            </div>
          </div>
          <p class="ll-phone-label">Parent Dashboard</p>
        </div>

        <div>
          <div class="ll-phone-frame">
            <div class="ll-phone-screen">
              <img src="{{ '/assets/images/logicland/iphone_images/settings.png' | relative_url }}" alt="Settings Screen">
            </div>
          </div>
          <p class="ll-phone-label">Settings</p>
        </div>

        <div>
          <div class="ll-phone-frame">
            <div class="ll-phone-screen">
              <img src="{{ '/assets/images/logicland/iphone_images/logo-screen.png' | relative_url }}" alt="LogicLand Logo">
            </div>
          </div>
          <p class="ll-phone-label">Logo</p>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="ll-features">
      <h2 class="ll-section-title">Why Parents Love LogicLand</h2>
      <p class="ll-section-subtitle">Built with your child's learning and safety in mind</p>

      <div class="ll-features-grid">
        <div class="ll-feature-card">
          <div class="ll-feature-icon purple">
            <i class="fas fa-gamepad"></i>
          </div>
          <h3>25+ Educational Games</h3>
          <p>From counting and fractions to reading aloud and pattern recognition - comprehensive learning through play.</p>
        </div>

        <div class="ll-feature-card">
          <div class="ll-feature-icon blue">
            <i class="fas fa-chart-line"></i>
          </div>
          <h3>Parent Dashboard</h3>
          <p>Track games played, scores, and time spent. See which areas need more practice and celebrate improvements.</p>
        </div>

        <div class="ll-feature-card">
          <div class="ll-feature-icon pink">
            <i class="fas fa-volume-up"></i>
          </div>
          <h3>Text-to-Speech</h3>
          <p>Audio feedback reinforces learning. Configurable speech rate and pitch helps children who learn better through audio.</p>
        </div>

        <div class="ll-feature-card">
          <div class="ll-feature-icon green">
            <i class="fas fa-shield-alt"></i>
          </div>
          <h3>Privacy First</h3>
          <p>All data stored locally on device. No account required. COPPA compliant for children's privacy.</p>
        </div>

        <div class="ll-feature-card">
          <div class="ll-feature-icon orange">
            <i class="fas fa-lock"></i>
          </div>
          <h3>Parent Gate</h3>
          <p>Settings and dashboard protected by Parent Gate. Kids play safely while you control access.</p>
        </div>

        <div class="ll-feature-card">
          <div class="ll-feature-icon purple">
            <i class="fas fa-palette"></i>
          </div>
          <h3>Kid-Friendly Design</h3>
          <p>Colorful SwiftUI interface with friendly mascots and celebration animations for correct answers.</p>
        </div>
      </div>
    </section>

    <!-- Games Library -->
    <section class="ll-games">
      <h2 class="ll-section-title">Educational Games Library</h2>
      <p class="ll-section-subtitle">Comprehensive curriculum covering essential skills</p>

      <!-- Mathematics -->
      <div class="ll-games-category">
        <div class="ll-category-header">
          <div class="ll-category-icon" style="background: #DBEAFE; color: #3B82F6;">
            <i class="fas fa-calculator"></i>
          </div>
          <h3>Mathematics & Arithmetic</h3>
          <span class="ll-category-badge">12 Games</span>
        </div>
        <div class="ll-games-grid">
          <div class="ll-game-card"><strong>Counting</strong><span>Basic counting skills</span></div>
          <div class="ll-game-card"><strong>Even/Odd</strong><span>Number classification</span></div>
          <div class="ll-game-card"><strong>Fractions</strong><span>Introduction to fractions</span></div>
          <div class="ll-game-card"><strong>Make Ten</strong><span>Number bonds to 10</span></div>
          <div class="ll-game-card"><strong>Math Whiz</strong><span>Rapid-fire challenges</span></div>
          <div class="ll-game-card"><strong>Money</strong><span>Count currency</span></div>
          <div class="ll-game-card"><strong>Multiplication</strong><span>Times tables</span></div>
          <div class="ll-game-card"><strong>Mystery Math</strong><span>Problem solving</span></div>
          <div class="ll-game-card"><strong>Operators</strong><span>Find the operator</span></div>
          <div class="ll-game-card"><strong>Ordering</strong><span>Ascending/descending</span></div>
          <div class="ll-game-card"><strong>Place Value</strong><span>Units, tens, hundreds</span></div>
          <div class="ll-game-card"><strong>Skip Counting</strong><span>Count by 2s, 5s, 10s</span></div>
        </div>
      </div>

      <!-- Logic -->
      <div class="ll-games-category">
        <div class="ll-category-header">
          <div class="ll-category-icon" style="background: #EDE9FE; color: #8B5CF6;">
            <i class="fas fa-brain"></i>
          </div>
          <h3>Logic & Cognitive Skills</h3>
          <span class="ll-category-badge">8 Games</span>
        </div>
        <div class="ll-games-grid">
          <div class="ll-game-card"><strong>Balance Scale</strong><span>Weight relationships</span></div>
          <div class="ll-game-card"><strong>Compare</strong><span>Greater/less than</span></div>
          <div class="ll-game-card"><strong>Neighbors</strong><span>Number neighbors</span></div>
          <div class="ll-game-card"><strong>Patterns</strong><span>Complete sequences</span></div>
          <div class="ll-game-card"><strong>Sequences</strong><span>Logical ordering</span></div>
          <div class="ll-game-card"><strong>Shapes</strong><span>Geometry basics</span></div>
          <div class="ll-game-card"><strong>Time</strong><span>Read clocks</span></div>
          <div class="ll-game-card"><strong>Ruler</strong><span>Measurement</span></div>
        </div>
      </div>

      <!-- Reading -->
      <div class="ll-games-category">
        <div class="ll-category-header">
          <div class="ll-category-icon" style="background: #FCE7F3; color: #EC4899;">
            <i class="fas fa-book-open"></i>
          </div>
          <h3>Reading & Language</h3>
          <span class="ll-category-badge">3 Games</span>
        </div>
        <div class="ll-games-grid">
          <div class="ll-game-card"><strong>Listen & Type</strong><span>Dictation practice</span></div>
          <div class="ll-game-card"><strong>Read Aloud</strong><span>Practice reading</span></div>
          <div class="ll-game-card"><strong>Speed Reader</strong><span>Reading fluency</span></div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="ll-pricing">
      <h2 class="ll-section-title">Choose Your Plan</h2>
      <p class="ll-section-subtitle">Unlock all 25+ games with a subscription</p>

      <div class="ll-pricing-grid">
        <div class="ll-pricing-card">
          <h3>Monthly</h3>
          <p>Recurring monthly billing for full access to all games and features. Cancel anytime.</p>
        </div>

        <div class="ll-pricing-card featured">
          <span class="ll-pricing-badge">Best Value</span>
          <h3>Yearly</h3>
          <p>Annual subscription with significant savings compared to monthly billing.</p>
        </div>

        <div class="ll-pricing-card">
          <h3>Lifetime</h3>
          <p>One-time purchase for permanent access to all current and future features.</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="ll-cta">
      <h2 class="ll-section-title">Ready to Start Learning?</h2>
      <p class="ll-section-subtitle">Download LogicLand today and watch your child thrive</p>
      <div class="ll-cta-buttons">
        <a href="https://apps.apple.com/np/app/logicland-kids-math-reading/id6757007447" class="ll-btn ll-btn-primary">
          <i class="fab fa-apple"></i> Download on App Store
        </a>
        <a href="{{ '/product-launches/' | relative_url }}" class="ll-btn ll-btn-outline">
          View Release Notes
        </a>
      </div>
    </section>

    <!-- Legal -->
    <div class="ll-legal">
      <a href="{{ '/logicland/privacy-policy.html' | relative_url }}">Privacy Policy</a>
      <a href="{{ '/logicland/terms-of-service.html' | relative_url }}">Terms of Service</a>
    </div>
  </div>
</div>
