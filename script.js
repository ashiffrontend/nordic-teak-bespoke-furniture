/**
 * Nordic Teak Bespoke Furniture - Master JavaScript (Vanilla ES6)
 * Handcrafted Wooden Furniture Designed for Modern Living
 * Developer: Mohammad Ashif 💙 | Ashif Web Studio (https://ashif-web-studio.vercel.app/)
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. Data Store: Products, Materials & Gallery
  // =========================================================================
  const productsData = [
    {
      id: 'prod-1',
      name: 'Oslo Live-Edge Dining Table',
      category: 'dining',
      categoryLabel: 'Dining Room',
      wood: 'Burmese Teak',
      finish: 'Matte Organic Oil',
      dimensions: '240cm × 100cm × 76cm',
      price: '$3,850',
      badge: 'Signature',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=900&q=80',
      description: 'Handcrafted from a single sustainably sourced mature teak slab. Showcases dramatic natural grain, organic butterfly keys, and solid sculptured trestle legs.'
    },
    {
      id: 'prod-2',
      name: 'Stockholm Teak Armchair',
      category: 'living',
      categoryLabel: 'Living Room',
      wood: 'Plantation Teak',
      finish: 'Waxed Satin',
      dimensions: '82cm × 78cm × 74cm',
      price: '$1,480',
      badge: 'Bestseller',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80',
      description: 'Curved steam-bent solid teak frame paired with hand-woven Danish paper cord or vegetable-tanned Scandinavian saddle leather.'
    },
    {
      id: 'prod-3',
      name: 'Bergen Minimalist Credenza',
      category: 'living',
      categoryLabel: 'Living Room',
      wood: 'Golden Teak & Oak',
      finish: 'Raw Touch Matte',
      dimensions: '200cm × 48cm × 72cm',
      price: '$2,950',
      badge: 'Mastercraft',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80',
      description: 'Slatted sliding tambour doors with integrated soft-close drawers and internal cable management channels for bespoke media living.'
    },
    {
      id: 'prod-4',
      name: 'Kobenhavn Platform Bed',
      category: 'bedroom',
      categoryLabel: 'Bedroom',
      wood: 'Solid Aged Teak',
      finish: 'Organic Beeswax',
      dimensions: '215cm × 195cm × 90cm',
      price: '$3,400',
      badge: 'Heirloom',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
      description: 'Low-profile Japanese-Scandinavian platform bed with floating cantilever side tables and ergonomic angled slatted headboard.'
    },
    {
      id: 'prod-5',
      name: 'Aarhus Executive Desk',
      category: 'office',
      categoryLabel: 'Office',
      wood: 'Grade-A Teak & Walnut',
      finish: 'Satin Protective Seal',
      dimensions: '180cm × 85cm × 75cm',
      price: '$2,650',
      badge: 'Executive',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=80',
      description: 'Solid mitred joinery with concealed wireless charging pad embedded flush beneath the wood surface, plus dual soft-motion document drawers.'
    },
    {
      id: 'prod-6',
      name: 'Fjord All-Weather Lounger',
      category: 'outdoor',
      categoryLabel: 'Outdoor',
      wood: 'Marine Grade-A Teak',
      finish: 'Natural High-Oil Unsealed',
      dimensions: '200cm × 72cm × 34cm',
      price: '$1,920',
      badge: 'Weatherproof',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80',
      description: 'Built specifically for coastal terraces and gardens. High natural silicic oils naturally resist rot, moisture, and UV without chemical preservatives.'
    },
    {
      id: 'prod-7',
      name: 'Helsinki Sculptural Bookshelf',
      category: 'living',
      categoryLabel: 'Living Room',
      wood: 'Nordic White Ash & Teak',
      finish: 'Nordic White Oil',
      dimensions: '160cm × 38cm × 195cm',
      price: '$2,750',
      badge: 'Architectural',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=900&q=80',
      description: 'Asymmetric architectural shelving unit crafted with traditional wedged tenons, serving equally well as a subtle open room divider.'
    },
    {
      id: 'prod-8',
      name: 'Malmö Floating Nightstand (Pair)',
      category: 'bedroom',
      categoryLabel: 'Bedroom',
      wood: 'Grade-A Plantation Teak',
      finish: 'Organic Beeswax',
      dimensions: '50cm × 38cm × 22cm',
      price: '$1,150',
      badge: 'Essential',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=900&q=80',
      description: 'Wall-mounted minimalist bedside drawer pair with 45-degree chamfered edges and concealed magnetic touch-latch mechanism.'
    },
    {
      id: 'prod-9',
      name: 'Gothenburg 8-Seater Dining Suite',
      category: 'luxury',
      categoryLabel: 'Luxury Series',
      wood: 'Reclaimed Century Teak',
      finish: 'Hand-Rubbed Danish Oil',
      dimensions: '280cm × 110cm × 76cm',
      price: '$6,400',
      badge: 'Limited Run',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80',
      description: 'Our pinnacle statement piece: salvaged aged timber with centuries of grain character, accompanied by eight bespoke woven wishbone chairs.'
    }
  ];

  const galleryData = [
    {
      id: 1,
      category: 'living',
      title: 'Copenhagen Glasshouse Living Suite',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      span: true
    },
    {
      id: 2,
      category: 'dining',
      title: 'Bespoke Trestle Dining in Stockholm Penthouse',
      image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80',
      span: false
    },
    {
      id: 3,
      category: 'bedroom',
      title: 'Nordic Teak Master Suite in Aspen Chalet',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      span: false
    },
    {
      id: 4,
      category: 'office',
      title: 'Architectural Study with Aarhus Desk',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
      span: false
    },
    {
      id: 5,
      category: 'living',
      title: 'Minimalist Lounge & Slatted Credenza',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      span: false
    },
    {
      id: 6,
      category: 'dining',
      title: 'Century Reclaimed Teak Banquet Room',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
      span: true
    }
  ];

  // =========================================================================
  // 2. Preloader
  // =========================================================================
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('preloader-hidden');
      }, 400);
    });
    // Fallback if load already fired
    setTimeout(() => {
      if (preloader && !preloader.classList.contains('preloader-hidden')) {
        preloader.classList.add('preloader-hidden');
      }
    }, 1500);
  }

  // =========================================================================
  // 3. Theme Toggle (Dark / Light Mode)
  // =========================================================================
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('nordic_teak_theme');

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggleBtns.forEach(btn => {
        btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
        btn.setAttribute('aria-label', 'Switch to light mode');
      });
      localStorage.setItem('nordic_teak_theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      themeToggleBtns.forEach(btn => {
        btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
        btn.setAttribute('aria-label', 'Switch to dark mode');
      });
      localStorage.setItem('nordic_teak_theme', 'light');
    }
  };

  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (prefersDark) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      applyTheme(isDark ? 'light' : 'dark');
    });
  });

  // =========================================================================
  // 4. Sticky Header & Navigation Spy
  // =========================================================================
  const siteHeader = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Sticky Nav Glass Effect
    if (siteHeader) {
      if (scrollY > 50) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Back to top button
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scrollspy active state
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (currentId && link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =========================================================================
  // 5. Mobile Drawer Navigation
  // =========================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const closeDrawer = () => {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) closeDrawer();
    });
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  // =========================================================================
  // 6. Wishlist Management (LocalStorage)
  // =========================================================================
  let wishlist = JSON.parse(localStorage.getItem('nordic_wishlist') || '[]');
  const wishlistBadge = document.querySelector('.wishlist-badge');

  const updateWishlistUI = () => {
    if (wishlistBadge) {
      wishlistBadge.textContent = wishlist.length;
    }
    // Update all heart icons
    document.querySelectorAll('.product-wishlist-btn').forEach(btn => {
      const id = btn.getAttribute('data-id');
      if (wishlist.includes(id)) {
        btn.classList.add('active');
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
      } else {
        btn.classList.remove('active');
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
      }
    });
  };

  const toggleWishlist = (id, name) => {
    if (wishlist.includes(id)) {
      wishlist = wishlist.filter(item => item !== id);
      showToast(`Removed "${name}" from Wishlist`, 'info');
    } else {
      wishlist.push(id);
      showToast(`Added "${name}" to Wishlist`, 'success');
    }
    localStorage.setItem('nordic_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
  };

  // =========================================================================
  // 7. Render Product Showcase Cards
  // =========================================================================
  const productsGrid = document.getElementById('productsGrid');
  const productSearch = document.getElementById('productSearch');
  const productSort = document.getElementById('productSort');
  const filterTabs = document.querySelectorAll('.filter-tab');

  let currentCategory = 'all';
  let searchQuery = '';
  let currentSort = 'featured';

  const renderProducts = () => {
    if (!productsGrid) return;

    let filtered = productsData.filter(product => {
      const matchCat = currentCategory === 'all' || product.category === currentCategory;
      const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.wood.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.finish.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    // Sorting
    if (currentSort === 'price-low') {
      filtered.sort((a, b) => parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, '')));
    } else if (currentSort === 'price-high') {
      filtered.sort((a, b) => parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, '')));
    } else if (currentSort === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px dashed var(--border-light);">
          <h3 style="font-family: var(--font-serif); font-size: 1.4rem; margin-bottom: 10px;">No Bespoke Pieces Found</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px;">Try adjusting your search criteria or explore our other collections.</p>
          <button class="btn btn-secondary btn-sm" id="resetProductFilterBtn">Reset Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetProductFilterBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (productSearch) productSearch.value = '';
          searchQuery = '';
          currentCategory = 'all';
          filterTabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-cat') === 'all'));
          renderProducts();
        });
      }
      return;
    }

    productsGrid.innerHTML = filtered.map(product => `
      <div class="product-card reveal revealed" data-id="${product.id}">
        <div class="product-thumb">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <span class="product-card-badge">${product.badge}</span>
          <button class="product-wishlist-btn" data-id="${product.id}" data-name="${product.name}" aria-label="Add to wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>
        <div class="product-card-body">
          <div class="product-meta-top">
            <span class="product-wood-type">${product.wood}</span>
            <div class="product-price-tag">${product.price}<span class="price-note">est.</span></div>
          </div>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-spec-list">
            <div class="spec-item">
              <span class="spec-label">Dimensions</span>
              <span class="spec-value">${product.dimensions}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Finish</span>
              <span class="spec-value">${product.finish}</span>
            </div>
          </div>
          <div class="product-card-actions">
            <button class="btn btn-secondary btn-quick-view" data-id="${product.id}">Quick View</button>
            <button class="btn btn-primary btn-quote-product" data-name="${product.name}" data-wood="${product.wood}" data-dims="${product.dimensions}">Quote</button>
          </div>
        </div>
      </div>
    `).join('');

    updateWishlistUI();
    attachProductCardEvents();
  };

  const attachProductCardEvents = () => {
    // Wishlist click
    document.querySelectorAll('.product-wishlist-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const name = btn.getAttribute('data-name');
        toggleWishlist(id, name);
      });
    });

    // Quick View click
    document.querySelectorAll('.btn-quick-view').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openQuickViewModal(id);
      });
    });

    // Request Quote for this exact product
    document.querySelectorAll('.btn-quote-product').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-name');
        const wood = btn.getAttribute('data-wood');
        const dims = btn.getAttribute('data-dims');
        prefillQuoteForm({ name, wood, dims });
      });
    });
  };

  // Filter tab clicks
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-cat');
      renderProducts();
    });
  });

  // Search input with debounce
  if (productSearch) {
    productSearch.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Sort dropdown
  if (productSort) {
    productSort.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Collection card "Explore" buttons that jump to showcase and filter
  document.querySelectorAll('.collection-explore-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetCat = btn.getAttribute('data-cat');
      currentCategory = targetCat;
      filterTabs.forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-cat') === targetCat);
      });
      renderProducts();
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Initial render
  renderProducts();

  // =========================================================================
  // 8. Quick View Modal
  // =========================================================================
  const quickViewModal = document.getElementById('quickViewModal');
  const quickViewContent = document.getElementById('quickViewContent');

  const openQuickViewModal = (productId) => {
    const item = productsData.find(p => p.id === productId);
    if (!item || !quickViewModal || !quickViewContent) return;

    quickViewContent.innerHTML = `
      <div class="quick-view-grid">
        <div class="quick-view-img">
          <img src="${item.image}" alt="${item.name}" />
        </div>
        <div>
          <span class="section-label" style="margin-bottom: 8px;">${item.categoryLabel}</span>
          <h2 style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 12px; line-height: 1.2;">${item.name}</h2>
          <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary); margin-bottom: 16px;">${item.price} <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 400;">Bespoke baseline</span></div>
          <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 24px;">${item.description}</p>
          
          <div style="background: var(--bg-surface-subtle); padding: 16px; border-radius: var(--radius-sm); margin-bottom: 24px;">
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; padding: 6px 0; border-bottom: 1px solid var(--border-light);">
              <span style="color: var(--text-muted);">Wood Type:</span>
              <strong>${item.wood} (100% Solid)</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; padding: 6px 0; border-bottom: 1px solid var(--border-light);">
              <span style="color: var(--text-muted);">Standard Dimensions:</span>
              <strong>${item.dimensions}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; padding: 6px 0; border-bottom: 1px solid var(--border-light);">
              <span style="color: var(--text-muted);">Surface Finish:</span>
              <strong>${item.finish}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; padding: 6px 0;">
              <span style="color: var(--text-muted);">Crafting Lead Time:</span>
              <strong>5 to 7 Weeks</strong>
            </div>
          </div>

          <div style="display: flex; gap: 12px;">
            <button class="btn btn-primary" id="modalQuoteBtn" style="flex: 1;">Request Custom Quote</button>
            <button class="btn btn-secondary" id="modalWishlistBtn" style="padding: 12px 18px;">
              ${wishlist.includes(item.id) ? '♥ Saved' : '♡ Wishlist'}
            </button>
          </div>
        </div>
      </div>
    `;

    quickViewModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Hook buttons inside modal
    document.getElementById('modalQuoteBtn')?.addEventListener('click', () => {
      closeAllModals();
      prefillQuoteForm({ name: item.name, wood: item.wood, dims: item.dimensions });
    });

    document.getElementById('modalWishlistBtn')?.addEventListener('click', () => {
      toggleWishlist(item.id, item.name);
      const isSaved = wishlist.includes(item.id);
      document.getElementById('modalWishlistBtn').textContent = isSaved ? '♥ Saved' : '♡ Wishlist';
    });
  };

  // Close modals
  const closeAllModals = () => {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeAllModals();
    });
  });

  // ESC key closes modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });

  // =========================================================================
  // 9. Interactive Room Dimension Guide & Calculator
  // =========================================================================
  const roomTypeBtns = document.querySelectorAll('.room-type-btn');
  const roomLengthInput = document.getElementById('roomLength');
  const roomWidthInput = document.getElementById('roomWidth');
  const roomUnitSelect = document.getElementById('roomUnit');
  const calcAreaDisplay = document.getElementById('calcAreaDisplay');
  const calcRecFurniture = document.getElementById('calcRecFurniture');
  const calcClearanceText = document.getElementById('calcClearanceText');
  const calcPieceSuggest = document.getElementById('calcPieceSuggest');
  const schematicRoom = document.getElementById('schematicRoom');
  const schematicFurniture = document.getElementById('schematicFurniture');
  const applyPlannerToQuoteBtn = document.getElementById('applyPlannerToQuoteBtn');

  let currentRoomType = 'dining';

  const roomConfig = {
    dining: {
      name: 'Dining Room',
      defaultLen: 4.8,
      defaultWid: 3.8,
      unit: 'm',
      furnitureName: 'Dining Table Suite',
      calculate: (lenM, widM) => {
        // Ideal table length leaves ~90cm walkway on both ends
        const maxTableLen = Math.max(1.4, (lenM - 1.8).toFixed(1));
        const maxTableWid = Math.max(0.8, (widM - 1.8).toFixed(1));
        const seats = Math.min(12, Math.max(4, Math.floor((maxTableLen * 100) / 30)));
        return {
          recSize: `${(maxTableLen * 100).toFixed(0)}cm × ${(maxTableWid * 100).toFixed(0)}cm`,
          clearance: '90cm (35") walkway perimeter for effortless chair push-out',
          suggestedPiece: `Oslo Trestle Table (${seats} Chairs Config)`
        };
      }
    },
    living: {
      name: 'Living Room',
      defaultLen: 5.5,
      defaultWid: 4.2,
      unit: 'm',
      furnitureName: 'Modular Sofa & Credenza',
      calculate: (lenM, widM) => {
        const sofaLen = Math.max(1.8, (lenM * 0.55).toFixed(1));
        const credenzaLen = Math.max(1.4, (widM * 0.45).toFixed(1));
        return {
          recSize: `Sofa: ${(sofaLen * 100).toFixed(0)}cm | Credenza: ${(credenzaLen * 100).toFixed(0)}cm`,
          clearance: '45cm between sofa and coffee table; 75cm traffic path',
          suggestedPiece: 'Bergen Minimalist Credenza + Teak Armchairs'
        };
      }
    },
    bedroom: {
      name: 'Bedroom',
      defaultLen: 4.5,
      defaultWid: 4.0,
      unit: 'm',
      furnitureName: 'King/Queen Platform Bed',
      calculate: (lenM, widM) => {
        const isKing = lenM >= 4.2 && widM >= 3.6;
        return {
          recSize: isKing ? '215cm × 195cm (King Suite)' : '205cm × 165cm (Queen Suite)',
          clearance: '70cm beside nightstands to wardrobe door clearance',
          suggestedPiece: 'Kobenhavn Floating Bed & Malmö Nightstand Pair'
        };
      }
    },
    office: {
      name: 'Executive Office',
      defaultLen: 4.0,
      defaultWid: 3.2,
      unit: 'm',
      furnitureName: 'Bespoke Executive Desk',
      calculate: (lenM, widM) => {
        const deskLen = Math.max(1.4, (lenM * 0.45).toFixed(1));
        return {
          recSize: `${(deskLen * 100).toFixed(0)}cm × 85cm Executive Format`,
          clearance: '110cm rear chair swivel clearance and client seating',
          suggestedPiece: 'Aarhus Executive Desk + Helsinki Open Bookshelf'
        };
      }
    }
  };

  const updateCalculator = () => {
    if (!roomLengthInput || !roomWidthInput || !roomUnitSelect) return;

    let len = parseFloat(roomLengthInput.value) || 4.5;
    let wid = parseFloat(roomWidthInput.value) || 3.8;
    const unit = roomUnitSelect.value;

    // Convert to meters for calculation
    let lenM = unit === 'ft' ? len * 0.3048 : len;
    let widM = unit === 'ft' ? wid * 0.3048 : wid;

    const areaM2 = (lenM * widM).toFixed(1);
    const areaSqFt = (areaM2 * 10.7639).toFixed(0);

    if (calcAreaDisplay) {
      calcAreaDisplay.textContent = unit === 'ft'
        ? `${areaSqFt} sq ft (${areaM2} m²)`
        : `${areaM2} m² (${areaSqFt} sq ft)`;
    }

    const conf = roomConfig[currentRoomType];
    const rec = conf.calculate(lenM, widM);

    if (calcRecFurniture) calcRecFurniture.textContent = rec.recSize;
    if (calcClearanceText) calcClearanceText.textContent = rec.clearance;
    if (calcPieceSuggest) calcPieceSuggest.textContent = rec.suggestedPiece;

    // Update 2D schematic aspect ratio
    if (schematicRoom && schematicFurniture) {
      const roomRatio = Math.min(1.8, Math.max(0.6, lenM / widM));
      schematicRoom.style.width = `${Math.min(240, 160 * roomRatio)}px`;
      schematicRoom.style.height = `${Math.min(170, 160 / roomRatio)}px`;
      schematicFurniture.textContent = conf.furnitureName;
    }
  };

  roomTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      roomTypeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentRoomType = btn.getAttribute('data-room');
      const conf = roomConfig[currentRoomType];
      if (roomUnitSelect.value === 'ft') {
        roomLengthInput.value = (conf.defaultLen * 3.28084).toFixed(1);
        roomWidthInput.value = (conf.defaultWid * 3.28084).toFixed(1);
      } else {
        roomLengthInput.value = conf.defaultLen;
        roomWidthInput.value = conf.defaultWid;
      }
      updateCalculator();
    });
  });

  [roomLengthInput, roomWidthInput, roomUnitSelect].forEach(el => {
    if (el) el.addEventListener('input', updateCalculator);
  });

  if (applyPlannerToQuoteBtn) {
    applyPlannerToQuoteBtn.addEventListener('click', () => {
      const conf = roomConfig[currentRoomType];
      const len = roomLengthInput.value;
      const wid = roomWidthInput.value;
      const unit = roomUnitSelect.value;
      prefillQuoteForm({
        furnitureType: conf.name,
        dims: `Room: ${len}${unit} × ${wid}${unit} (Rec: ${calcRecFurniture.textContent})`,
        notes: `Dimensions derived from Room Planner tool for ${conf.name}. Suggested piece: ${calcPieceSuggest.textContent}.`
      });
    });
  }

  // Initial calculation
  updateCalculator();

  // =========================================================================
  // 10. Material Swatches Interactive Selector
  // =========================================================================
  const materialCards = document.querySelectorAll('.material-card');
  materialCards.forEach(card => {
    card.addEventListener('click', () => {
      const woodName = card.getAttribute('data-wood');
      showToast(`Selected ${woodName}. Click 'Request Quote' to apply this finish.`, 'info');
      // Scroll smoothly to quote section if desired, or pre-select wood
      const woodSelect = document.getElementById('quoteMaterial');
      if (woodSelect) {
        for (let opt of woodSelect.options) {
          if (opt.value.toLowerCase().includes(woodName.toLowerCase())) {
            woodSelect.value = opt.value;
            break;
          }
        }
      }
    });
  });

  // =========================================================================
  // 11. Quote Request Form (Frontend Validation & Success Modal)
  // =========================================================================
  const quoteForm = document.getElementById('quoteForm');
  const quoteSuccessModal = document.getElementById('quoteSuccessModal');
  const quoteRefId = document.getElementById('quoteRefId');
  const quoteSummaryContent = document.getElementById('quoteSummaryContent');

  function prefillQuoteForm({ name, wood, dims, furnitureType, notes }) {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }

    if (furnitureType) {
      const fTypeSelect = document.getElementById('quoteFurnitureType');
      if (fTypeSelect) {
        for (let opt of fTypeSelect.options) {
          if (opt.text.toLowerCase().includes(furnitureType.toLowerCase())) {
            fTypeSelect.value = opt.value;
            break;
          }
        }
      }
    }

    if (wood) {
      const matSelect = document.getElementById('quoteMaterial');
      if (matSelect) {
        for (let opt of matSelect.options) {
          if (opt.text.toLowerCase().includes(wood.toLowerCase()) || opt.value.toLowerCase().includes('teak')) {
            matSelect.value = opt.value;
            break;
          }
        }
      }
    }

    if (dims) {
      const dimInput = document.getElementById('quoteDimensions');
      if (dimInput) dimInput.value = dims;
    }

    if (name || notes) {
      const msgArea = document.getElementById('quoteMessage');
      if (msgArea) {
        const textToAdd = name ? `Inquiring about bespoke crafting for the "${name}".` : '';
        const notesToAdd = notes ? `\n${notes}` : '';
        msgArea.value = `${textToAdd}${notesToAdd}`.trim();
      }
    }
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const fields = [
        { id: 'quoteFullName', check: (v) => v.trim().length >= 2, msg: 'Please enter your full name.' },
        { id: 'quoteEmail', check: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: 'Please provide a valid email address.' },
        { id: 'quotePhone', check: (v) => v.trim().length >= 7, msg: 'Please enter a contact phone number.' },
        { id: 'quoteFurnitureType', check: (v) => v !== '', msg: 'Please choose a furniture category.' },
        { id: 'quoteMaterial', check: (v) => v !== '', msg: 'Please select your preferred timber.' },
        { id: 'quoteDimensions', check: (v) => v.trim().length >= 2, msg: 'Please provide target dimensions.' }
      ];

      fields.forEach(({ id, check, msg }) => {
        const fieldEl = document.getElementById(id);
        const parent = fieldEl?.closest('.form-field');
        if (fieldEl && parent) {
          const valid = check(fieldEl.value);
          if (!valid) {
            isValid = false;
            parent.classList.add('has-error');
            const errSpan = parent.querySelector('.form-field-error');
            if (errSpan) errSpan.textContent = msg;
          } else {
            parent.classList.remove('has-error');
          }
        }
      });

      if (!isValid) {
        showToast('Please complete all required fields.', 'info');
        return;
      }

      // Generate random reference code
      const randomCode = `NT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const fullName = document.getElementById('quoteFullName').value;
      const email = document.getElementById('quoteEmail').value;
      const phone = document.getElementById('quotePhone').value;
      const fType = document.getElementById('quoteFurnitureType').options[document.getElementById('quoteFurnitureType').selectedIndex].text;
      const material = document.getElementById('quoteMaterial').options[document.getElementById('quoteMaterial').selectedIndex].text;
      const dims = document.getElementById('quoteDimensions').value;
      const budget = document.getElementById('quoteBudget')?.value || 'Standard Bespoke';
      const city = document.getElementById('quoteCity')?.value || 'Not specified';

      if (quoteRefId) quoteRefId.textContent = randomCode;
      if (quoteSummaryContent) {
        quoteSummaryContent.innerHTML = `
          <div style="background: var(--bg-surface-subtle); padding: 18px; border-radius: var(--radius-md); font-size: 0.88rem; line-height: 1.7; border: 1px solid var(--border-light);">
            <div><strong>Client Name:</strong> ${fullName}</div>
            <div><strong>Email:</strong> ${email}</div>
            <div><strong>Phone:</strong> ${phone}</div>
            <div><strong>Furniture Piece:</strong> ${fType}</div>
            <div><strong>Selected Timber:</strong> ${material}</div>
            <div><strong>Dimensions:</strong> ${dims}</div>
            <div><strong>Budget Range:</strong> ${budget}</div>
            <div><strong>Delivery City:</strong> ${city}</div>
          </div>
        `;
      }

      if (quoteSuccessModal) {
        quoteSuccessModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }

      quoteForm.reset();
      showToast('Quote specification received! Reference: ' + randomCode, 'success');
    });

    // Real-time error clearing
    quoteForm.querySelectorAll('input, select, textarea').forEach(el => {
      el.addEventListener('input', () => {
        const parent = el.closest('.form-field');
        if (parent) parent.classList.remove('has-error');
      });
    });
  }

  // =========================================================================
  // 12. Testimonials Luxury Slider
  // =========================================================================
  const testimonialTrack = document.getElementById('testimonialTrack');
  const prevTestimonialBtn = document.getElementById('prevTestimonialBtn');
  const nextTestimonialBtn = document.getElementById('nextTestimonialBtn');
  const sliderDots = document.querySelectorAll('.slider-dot');

  let currentSlide = 0;
  const totalSlides = document.querySelectorAll('.testimonial-slide').length;

  const goToSlide = (index) => {
    if (!testimonialTrack) return;
    currentSlide = (index + totalSlides) % totalSlides;
    testimonialTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    sliderDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlide);
    });
  };

  if (prevTestimonialBtn) {
    prevTestimonialBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  }
  if (nextTestimonialBtn) {
    nextTestimonialBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
  }
  sliderDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => goToSlide(idx));
  });

  // Auto slide every 7 seconds
  let autoSlideTimer = setInterval(() => goToSlide(currentSlide + 1), 7000);
  const sliderBox = document.querySelector('.testimonials-slider-box');
  if (sliderBox) {
    sliderBox.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
    sliderBox.addEventListener('mouseleave', () => {
      autoSlideTimer = setInterval(() => goToSlide(currentSlide + 1), 7000);
    });
  }

  // =========================================================================
  // 13. Gallery & Lightbox
  // =========================================================================
  const galleryGrid = document.getElementById('galleryGrid');
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');

  let activeGalleryCategory = 'all';

  const renderGallery = () => {
    if (!galleryGrid) return;
    const filtered = galleryData.filter(item => activeGalleryCategory === 'all' || item.category === activeGalleryCategory);

    galleryGrid.innerHTML = filtered.map(item => `
      <div class="gallery-item ${item.span ? 'span-2' : ''} reveal revealed" data-id="${item.id}" data-img="${item.image}" data-title="${item.title}">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <div class="gallery-overlay">
          <span class="gallery-category">${item.category.toUpperCase()}</span>
          <h4 class="gallery-title">${item.title}</h4>
        </div>
      </div>
    `).join('');

    // Attach click to open Lightbox
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const src = item.getAttribute('data-img');
        const title = item.getAttribute('data-title');
        if (lightboxImg && lightboxCaption && lightboxModal) {
          lightboxImg.src = src;
          lightboxCaption.textContent = title;
          lightboxModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });
  };

  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeGalleryCategory = btn.getAttribute('data-cat');
      renderGallery();
    });
  });

  renderGallery();

  // =========================================================================
  // 14. FAQ Accordion
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // =========================================================================
  // 15. Contact & Newsletter Forms
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value || 'Guest';
      showToast(`Thank you, ${name}! Your consultation inquiry has been submitted.`, 'success');
      contactForm.reset();
    });
  }

  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        showToast(`Subscribed! Our seasonal bespoke lookbook has been dispatched.`, 'success');
        newsletterForm.reset();
      }
    });
  }

  // =========================================================================
  // 16. Toast Notification Helper
  // =========================================================================
  function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-message toast-${type}`;
    const icon = type === 'success'
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#55D688" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;

    toast.innerHTML = `${icon}<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastOut 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards';
      setTimeout(() => toast.remove(), 400);
    }, 3800);
  }

  // =========================================================================
  // 17. Scroll Reveal Observer
  // =========================================================================
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  });

  revealElements.forEach(el => revealObserver.observe(el));
});
