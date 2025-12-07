---
layout: default
title: Sitemap
permalink: /sitemap/
---

<section class="container" style="padding-top: 150px; padding-bottom: 100px;">
  <h1 class="section-title">Sitemap</h1>
  
  <div class="sitemap-grid" style="display: grid; gap: 2rem;">
    <div class="sitemap-section">
        <h3>Main Pages</h3>
        <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 0.5rem;"><a href="{{ '/' | relative_url }}">Home</a></li>
            <li style="margin-bottom: 0.5rem;"><a href="{{ '/product-launches/' | relative_url }}">Product Launches</a></li>
            <li style="margin-bottom: 0.5rem;"><a href="{{ '/sitemap.xml' | relative_url }}">XML Sitemap (for bots)</a></li>
        </ul>
    </div>

    <div class="sitemap-section">
        <h3>Products</h3>
        <ul style="list-style: none; padding: 0;">
             {% for product in site.data.products %}
                <li style="margin-bottom: 0.5rem;">
                    <a href="{{ product.url | relative_url }}">{{ product.title }}</a>
                    {% if product.title == 'ClipKunda' %}
                        <ul style="margin-left: 1rem; margin-top: 0.5rem; list-style: circle;">
                            {% for page in site.clipkunda %}
                                <li style="margin-bottom: 0.25rem;"><a href="{{ page.url | relative_url }}">{{ page.title }}</a></li>
                            {% endfor %}
                        </ul>
                    {% endif %}
                </li>
             {% endfor %}
        </ul>
    </div>
  </div>
</section>
