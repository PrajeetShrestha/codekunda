# Code Kunda

## Overview

This project is a hybrid website built with [Jekyll](https://jekyllrb.com/) combining:

- A static landing page (marketing site) with Tailwind CSS
- A Jekyll-powered blog system that converts markdown files into HTML pages

### Project Structure

```text
codekunda/
├── index.html              # Static landing page (marketing site)
├── blog.html               # Jekyll template for blog listing
├── _posts/                 # Blog posts in markdown format
├── _layouts/               # Jekyll layout templates
├── _includes/              # Reusable Jekyll components
├── _sass/                  # Sass stylesheets
├── assets/                 # CSS, JS, images
├── _config.yml             # Jekyll configuration
├── _site/                  # Generated site (not in version control)
└── main_site/              # Archived old build (can be removed)
```

### How It Works

1. **Landing Page**: The root `index.html` serves as the main marketing page with services, portfolio, and contact information
2. **Blog System**: Jekyll processes markdown files from `_posts/` and generates blog pages
3. **Build Process**: Jekyll copies static files and processes templates to create the `_site/` directory
4. **Navigation**: The landing page links to `/blog.html` which displays all blog posts

### Access Points

When running locally at `http://127.0.0.1:4000`:

- `/` - Landing page (marketing site)
- `/blog.html` - Blog listing
- `/2024/...` - Individual blog posts
- `/authors.html` - Authors page
- `/topics.html` - Topics page

## Prerequisites

### For Apple Silicon / macOS

You may need to install Ruby and Homebrew first:

1. **Install Homebrew**:

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Add Homebrew to PATH** (for current and future sessions):

   ```bash
   (echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> ~/.zprofile
   eval "$(/opt/homebrew/bin/brew shellenv)"
   ```

3. **Install Ruby**:

   ```bash
   brew install ruby
   ```

4. **Add Ruby to PATH**:

   ```bash
   echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zprofile
   source ~/.zprofile
   ```

## Installation

1. **Install Jekyll and Bundler**:

   ```bash
   gem install bundler jekyll
   ```

2. **Install project dependencies**:

   ```bash
   bundle install
   ```

## Build and Run

### Development Server

Start the Jekyll development server with auto-regeneration:

```bash
bundle exec jekyll serve
```

The site will be available at `http://127.0.0.1:4000`

**Features**:

- Auto-regeneration: Changes to source files trigger automatic rebuilds
- Live preview: Refresh browser to see changes

### Build for Production

Generate static files in the `_site/` directory:

```bash
bundle exec jekyll build
```

### Build Options

- **With drafts**: `bundle exec jekyll serve --drafts`
- **With future posts**: `bundle exec jekyll serve --future`
- **Incremental build**: `bundle exec jekyll serve --incremental`
- **Custom port**: `bundle exec jekyll serve --port 4001`

## Deployment

The project is configured for Firebase Hosting:

```bash
firebase deploy
```

The `firebase.json` configuration points to the `_site/` directory as the public folder.

## Development Notes

- The `_site/` directory is auto-generated and ignored by git
- Blog posts go in `_posts/` with format: `YYYY-MM-DD-title.md`
- Use Jekyll front matter for metadata (title, author, tags, etc.)
- The `main_site/public/site/` directory appears to be an archived build and can be removed
