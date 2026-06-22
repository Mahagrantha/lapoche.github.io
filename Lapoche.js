function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const navEl = document.getElementById('nav-' + id);
    if (navEl) navEl.classList.add('active');
    window.scrollTo(0, 0);
  }

  function showDash(id) {
    document.querySelectorAll('.dash-view').forEach(v => v.classList.remove('active'));
    document.getElementById('dash-' + id).classList.add('active');
    document.querySelectorAll('.dash-nav a').forEach(a => a.classList.remove('active'));
    const el = document.getElementById('d' + id);
    if (el) el.classList.add('active');
  }

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.shop-controls, .dash-card-header').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  document.querySelectorAll('.sidebar-items li').forEach(li => {
    li.addEventListener('click', function() {
      this.closest('ul').querySelectorAll('li').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
