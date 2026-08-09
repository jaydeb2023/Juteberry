/* ==========================================================================
   JUTEBERRY — product-detail.js
   Reads ?id= from the URL, finds the product in JUTEBERRY_PRODUCTS
   (product-data.js) and renders the detail page. No prices — this
   renders a quantity-based "Request a Quote" form instead.
   ========================================================================== */

(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || (window.JUTEBERRY_PRODUCTS && window.JUTEBERRY_PRODUCTS[0] && window.JUTEBERRY_PRODUCTS[0].id);
  const products = window.JUTEBERRY_PRODUCTS || (typeof JUTEBERRY_PRODUCTS !== 'undefined' ? JUTEBERRY_PRODUCTS : []);
  const product = products.find(p => p.id === id);

  const detailEl = document.getElementById('productDetail');
  const relatedEl = document.getElementById('relatedProducts');
  const crumbEl = document.getElementById('crumbName');

  if (!product) {
    if (detailEl) {
      detailEl.innerHTML = `<div class="container"><p style="color:var(--gray);">Sorry, we couldn't find that product. <a href="shop.html" style="color:var(--coral);">Back to shop</a>.</p></div>`;
    }
    return;
  }

  /* ---- Meta tags ---- */
  document.title = `${product.name} | Juteberry`;
  const desc = `${product.tagline}. REACH & OEKO-TEX certified. MOQ ${product.moq}, samples in ${product.sample_days}. Request a quantity quote.`;
  const metaDesc = document.getElementById('metaDesc');
  if (metaDesc) metaDesc.setAttribute('content', desc);
  const ogTitle = document.getElementById('ogTitle');
  if (ogTitle) ogTitle.setAttribute('content', `${product.name} | Juteberry`);
  const ogDesc = document.getElementById('ogDesc');
  if (ogDesc) ogDesc.setAttribute('content', desc);
  if (crumbEl) crumbEl.textContent = product.name;

  /* ---- Gallery ---- */
  const images = product.images && product.images.length ? product.images : ['02.webp'];
  const thumbsHtml = images.map((img, i) =>
    `<div class="pd-thumb${i === 0 ? ' is-active' : ''}" data-img="${img}"><img src="${img}" alt="${product.name} view ${i + 1}"></div>`
  ).join('');

  /* ---- Features ---- */
  const featuresHtml = (product.features || []).map(f => `<li>${f}</li>`).join('');

  detailEl.innerHTML = `
    <div class="pd-grid">
      <div>
        <div class="pd-gallery__main">
          ${product.badge ? `<span class="pd-gallery__badge">${product.badge}</span>` : ''}
          <img id="pdMainImage" src="${images[0]}" alt="${product.name}">
        </div>
        <div class="pd-thumbs">${thumbsHtml}</div>
      </div>
      <div>
        <span class="pd-category">${product.category}</span>
        <h1 class="pd-name">${product.name}</h1>
        <div class="pd-tagline">${product.tagline}</div>
        <p class="pd-desc">${product.description}</p>

        <div class="pd-moq-row">
          <div class="pd-moq-item"><b>${product.moq}</b><span>Units MOQ</span></div>
          <div class="pd-moq-item"><b>${product.sample_days}</b><span>Sample Delivery</span></div>
          <div class="pd-moq-item"><b>REACH</b><span>&amp; OEKO-TEX Certified</span></div>
        </div>

        <div class="pd-features">
          <h3>Product Highlights</h3>
          <ul>${featuresHtml}</ul>
        </div>

        <div class="pd-quote">
          <h3>Request a Quote</h3>
          <p>Let us know how many units you need — we'll come back with pricing and lead time within 24 hours.</p>
          <form id="quoteForm">
            <div class="form-field">
              <label for="q-name">Name</label>
              <input type="text" id="q-name" required>
            </div>
            <div class="form-field">
              <label for="q-email">Email or Phone</label>
              <input type="text" id="q-email" required>
            </div>
            <div class="form-field">
              <label for="q-qty">Quantity Needed</label>
              <input type="number" id="q-qty" min="${product.moq}" placeholder="e.g. ${product.moq}" required>
            </div>
            <div class="form-field">
              <label for="q-notes">Notes (colour, print, timeline)</label>
              <textarea id="q-notes" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-forest">Send Quote Request</button>
          </form>
          <p class="pd-no-price-note">Pricing depends on quantity, print and finish — we'll quote you directly, no fixed list price.</p>
        </div>
      </div>
    </div>
  `;

  /* ---- Thumbnail swap ---- */
  detailEl.querySelectorAll('.pd-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      detailEl.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('is-active'));
      thumb.classList.add('is-active');
      document.getElementById('pdMainImage').setAttribute('src', thumb.getAttribute('data-img'));
    });
  });

  /* ---- Quote form → WhatsApp ---- */
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('q-name').value.trim();
      const contact = document.getElementById('q-email').value.trim();
      const qty = document.getElementById('q-qty').value.trim();
      const notes = document.getElementById('q-notes').value.trim();
      const text = `Hi Juteberry! I'd like a quote for ${product.name}. Name: ${name}. Contact: ${contact}. Quantity needed: ${qty}. Notes: ${notes || 'none'}.`;
      window.open(`https://wa.me/918262977784?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  /* ---- Related products ---- */
  if (relatedEl) {
    const related = products.filter(p => p.id !== product.id).slice(0, 4);
    relatedEl.innerHTML = related.map(p => `
      <article class="product-card">
        <a href="product.html?id=${p.id}">
          <div class="product-image">${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}<img src="${p.images[0]}" alt="${p.name}" loading="lazy"></div>
        </a>
        <div class="product-info">
          <span class="product-category">${p.category}</span>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.tagline}</p>
          <a href="product.html?id=${p.id}" class="product-cta">View Details <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
        </div>
      </article>
    `).join('');
  }
})();
