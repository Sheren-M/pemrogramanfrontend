<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard | RuangKerja</title>
  <style>
    :root {
      --ink: #1f2d1f;
      --muted: #6f7d6f;
      --line: #e7efe2;
      --paper: #ffffff;
      --canvas: #f4f7f1;
      --accent: #d9774f;
      --accent-soft: #fff1e8;
      --green: #4f7d5d;
      --green-deep: #2f5644;
      --navy: #243a3a;
      --navy-deep: #1d2f2d;
      --soft-shadow: 0 12px 30px rgba(33, 57, 41, 0.08);
      --leaf: #dfeecf;
    }

    * { box-sizing: border-box; }

    body {
      min-height: 100vh;
      margin: 0;
      background: var(--canvas);
      color: var(--ink);
      font-family: "Segoe UI", Arial, sans-serif;
    }

    button { font: inherit; }

    .app-shell {
      display: grid;
      grid-template-columns: 252px minmax(0, 1fr);
      min-height: 100vh;
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      padding: 30px 18px 18px;
      background: linear-gradient(180deg, #fbfbfc 0%, #f5f6f8 100%);
      border-right: 1px solid var(--line);
      box-shadow: inset -1px 0 0 rgba(159, 175, 193, 0.18);
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 0 8px 34px;
      color: var(--navy);
      font-size: 20px;
      font-weight: 750;
      letter-spacing: -0.6px;
    }

    .brand-mark {
      display: grid;
      width: 29px;
      height: 29px;
      place-items: center;
      border-radius: 8px;
      background: linear-gradient(135deg, #d9835a, #bf6738);
      color: white;
      font-size: 16px;
      font-weight: 800;
      box-shadow: 0 8px 18px rgba(217, 119, 79, 0.26);
    }

    .menu-label {
      margin: 0 12px 12px;
      color: #9aa4b2;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1.1px;
      text-transform: uppercase;
    }

    .menu-list { display: grid; gap: 5px; }

    .menu-link, .special-menu__trigger, .sub-menu button {
      width: 100%;
      border: 0;
      cursor: pointer;
      text-align: left;
    }

    .menu-link, .special-menu__trigger {
      display: flex;
      align-items: center;
      gap: 13px;
      min-height: 48px;
      padding: 0 12px;
      border-radius: 10px;
      background: transparent;
      color: #667085;
      transition: all .18s ease;
    }

    .menu-link:hover { background: #f5f7fa; color: var(--ink); }

    .menu-link.active {
      background: linear-gradient(90deg, #eef7ec, #f6efe8);
      color: var(--navy);
      font-weight: 700;
      box-shadow: inset 0 0 0 1px rgba(79, 125, 93, 0.08);
    }

    .menu-icon {
      width: 20px;
      height: 20px;
      flex: 0 0 20px;
      stroke: currentColor;
      stroke-width: 1.8;
      fill: none;
    }

    .special-menu {
      margin-top: 8px;
      overflow: hidden;
      border: 1px solid #ebd7c8;
      border-radius: 12px;
      background: linear-gradient(180deg, #fff6f1, #f9f6ef);
      box-shadow: 0 6px 14px rgba(217, 119, 79, 0.05);
    }

    .special-menu__trigger {
      color: #a44730;
      font-weight: 700;
    }

    .special-menu__trigger .arrow {
      width: 16px;
      height: 16px;
      margin-left: auto;
      transition: transform .2s;
    }

    .special-menu.open .arrow { transform: rotate(180deg); }

    .sub-menu {
      display: grid;
      gap: 4px;
      padding: 0 12px 12px 45px;
    }

    .sub-menu button {
      padding: 8px 10px;
      border-radius: 7px;
      background: transparent;
      color: #9a5c4c;
      font-size: 13px;
    }

    .sub-menu button:hover, .sub-menu button.selected { background: #fff; color: #9e4028; }

    .sidebar-footer {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: auto;
      padding: 16px 10px 0;
      border-top: 1px solid var(--line);
    }

    .avatar {
      display: grid;
      width: 34px;
      height: 34px;
      place-items: center;
      border-radius: 50%;
      background: linear-gradient(135deg, #dfeaf4, #c7d6e9);
      color: var(--navy);
      font-size: 11px;
      font-weight: 800;
      box-shadow: inset 0 0 0 1px rgba(37, 58, 77, 0.08);
    }

    .user-name { font-size: 13px; font-weight: 700; }
    .user-role { margin-top: 2px; color: var(--muted); font-size: 11px; }

    .main-content { padding: 30px clamp(24px, 5vw, 68px); }

    .topbar {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 36px;
    }

    .topbar-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 12px;
    }

    .eyebrow { margin: 0 0 8px; color: var(--green); font-size: 12px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; }
    h1 { margin: 0; color: var(--navy); font-size: clamp(27px, 3vw, 38px); letter-spacing: -1.2px; }
    .date { margin: 0; color: var(--muted); font-size: 14px; }

    .new-button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      border: 0;
      border-radius: 10px;
      background: linear-gradient(180deg, #2f5644, #224335);
      color: white;
      cursor: pointer;
      font-weight: 700;
      box-shadow: 0 10px 18px rgba(47, 86, 68, 0.16);
      transition: transform .18s ease, box-shadow .18s ease;
    }

    .new-button:hover {
      transform: translateY(-1px);
      box-shadow: 0 12px 20px rgba(47, 86, 68, 0.2);
    }

    .overview { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(300px, .9fr); gap: 22px; }
    .card {
      border: 1px solid var(--line);
      border-radius: 16px;
      background: var(--paper);
      box-shadow: var(--soft-shadow);
    }

    .dashboard-cards {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 18px;
      margin-bottom: 24px;
    }

    .metric-card {
      padding: 18px 18px 16px;
      background: linear-gradient(180deg, #fff, #f8faf7);
      border: 1px solid var(--line);
      border-radius: 16px;
      box-shadow: 0 6px 18px rgba(47, 86, 68, 0.05);
    }

    .metric-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;
    }

    .metric-icon {
      display: grid;
      place-items: center;
      width: 42px;
      height: 42px;
      border-radius: 12px;
      background: linear-gradient(135deg, #edf7ea, #e8f0ea);
      color: var(--green-deep);
    }

    .metric-symbol {
      font-size: 21px;
      font-weight: 700;
      color: var(--navy);
      margin-bottom: 8px;
    }

    .metric-label {
      color: var(--muted);
      font-size: 12px;
      margin: 0 0 4px;
    }

    .metric-change {
      font-size: 12px;
      font-weight: 700;
      color: var(--green);
    }

    .activity-card { min-height: 320px; padding: 26px; }
    .card-heading { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    h2 { margin: 0; color: var(--navy); font-size: 18px; letter-spacing: -.3px; }
    .more { border: 0; background: none; color: var(--accent); cursor: pointer; font-size: 13px; font-weight: 700; }

    .activity-list { margin: 23px 0 0; padding: 0; list-style: none; }
    .activity-list li { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 16px; padding: 15px 0; border-bottom: 1px solid var(--line); }
    .activity-list li:last-child { border-bottom: 0; }
    .activity-title { font-size: 14px; font-weight: 700; }
    .activity-detail { margin-top: 3px; color: var(--muted); font-size: 12px; }
    .activity-time { color: #98a2b3; font-size: 12px; }

    .summary-card {
      padding: 26px;
      background: linear-gradient(180deg, #2f5644, #24473a);
      color: white;
      box-shadow: 0 16px 30px rgba(34, 67, 53, 0.18);
    }
    .summary-card h2 { color: white; }
    .summary-card > p { margin: 10px 0 25px; color: #d3e5d9; font-size: 13px; line-height: 1.5; }
    .summary-number { margin: 0; font-size: 52px; font-weight: 750; letter-spacing: -2px; }
    .summary-number span { margin-left: 5px; color: #dfeee4; font-size: 14px; font-weight: 500; letter-spacing: 0; }
    .progress { height: 8px; margin: 21px 0 10px; overflow: hidden; border-radius: 99px; background: rgba(255,255,255,0.18); }
    .progress > span { display: block; width: 68%; height: 100%; border-radius: inherit; background: linear-gradient(90deg, #e9b489, #d9774f); }
    .progress-label { display: flex; justify-content: space-between; color: #dcefe0; font-size: 12px; }
    .summary-note { margin-top: 32px; padding: 14px; border-radius: 10px; background: rgba(255,255,255,.08); color: #edf7ef; font-size: 13px; line-height: 1.45; }

    .plant-list {
      display: grid;
      gap: 12px;
      margin-top: 18px;
    }

    .plant-item {
      display: grid;
      grid-template-columns: 52px 1fr auto;
      align-items: center;
      gap: 14px;
      padding: 12px 14px;
      border: 1px solid var(--line);
      border-radius: 12px;
      background: #fafcf9;
    }

    .plant-thumb {
      display: grid;
      place-items: center;
      width: 52px;
      height: 52px;
      border-radius: 14px;
      background: linear-gradient(135deg, #edf8e7, #dfeecf);
      font-size: 24px;
    }

    .plant-name {
      font-size: 14px;
      font-weight: 700;
      color: var(--navy);
    }

    .plant-meta {
      font-size: 12px;
      color: var(--muted);
      margin-top: 4px;
    }

    .plant-stock {
      font-size: 12px;
      font-weight: 700;
      color: var(--green);
      padding: 6px 10px;
      border-radius: 999px;
      background: #edf7eb;
    }

    .sales-panel {
      background: linear-gradient(180deg, #ffffff, #f6faf4);
      border: 1px solid var(--line);
      border-radius: 16px;
      padding: 18px 18px 12px;
      box-shadow: var(--soft-shadow);
    }

    .chart-bars {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 12px;
      height: 130px;
      margin-top: 18px;
    }

    .bar-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      flex: 1;
    }

    .bar {
      width: 100%;
      max-width: 28px;
      border-radius: 10px 10px 0 0;
      background: linear-gradient(180deg, #d9ead2, #7aa07d);
      min-height: 30px;
    }

    .bar.active {
      background: linear-gradient(180deg, #e7b489, #d9774f);
    }

    .bar-label {
      font-size: 11px;
      color: var(--muted);
    }

    .report-box {
      display: grid;
      gap: 12px;
      margin-top: 24px;
    }

    .report-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      padding: 14px 16px;
      border: 1px solid var(--line);
      border-radius: 12px;
      background: linear-gradient(180deg, #ffffff, #fafcf9);
    }

    .report-name {
      font-size: 14px;
      font-weight: 700;
      color: var(--navy);
    }

    .report-meta {
      font-size: 12px;
      color: var(--muted);
      margin-top: 3px;
    }

    .report-tag {
      font-size: 12px;
      font-weight: 700;
      padding: 6px 10px;
      border-radius: 999px;
      background: #eefaf1;
      color: var(--green-deep);
    }

    .report-tag.warning {
      background: #fff4ee;
      color: #b7643a;
    }

    @media (max-width: 820px) {
      .app-shell { grid-template-columns: 1fr; }
      .sidebar { padding: 18px 20px; border-right: 0; border-bottom: 1px solid var(--line); }
      .brand { margin: 0 0 18px; }
      .menu-label, .sidebar-footer { display: none; }
      .menu-list { display: flex; gap: 7px; overflow-x: auto; }
      .menu-link, .special-menu { flex: 0 0 auto; }
      .menu-link, .special-menu__trigger { min-height: 42px; }
      .menu-link span:not(.menu-icon), .special-menu__trigger span:not(.menu-icon):not(.arrow) { font-size: 13px; }
      .sub-menu { display: none; }
      .main-content { padding-top: 28px; }
      .overview { grid-template-columns: 1fr; }
    }

    @media (max-width: 520px) {
      .topbar { align-items: flex-start; flex-direction: column; margin-bottom: 26px; }
      .new-button { width: 100%; justify-content: center; }
      .activity-card, .summary-card { padding: 20px; }
      .activity-list li { grid-template-columns: 34px 1fr; }
      .activity-time { display: none; }
    }
  </style>
</head>
<body>
  <div class="app-shell">
    <aside class="sidebar">
      <div class="brand"><span class="brand-mark">S</span> Sheren</div>
      <p class="menu-label">Navigasi utama</p>
      <nav class="menu-list" aria-label="Menu utama">
        <button class="menu-link active" type="button" data-title="Dashboard">
          <svg class="menu-icon" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
          <span>Dashboard</span>
        </button>
        <button class="menu-link" type="button" data-title="Tanaman">
          <svg class="menu-icon" viewBox="0 0 24 24"><path d="M12 20c3.8-1.7 6-4.6 6-8a4 4 0 0 0-6-3.7A4 4 0 0 0 6 12c0 3.4 2.2 6.3 6 8z"/><path d="M12 12V4"/></svg>
          <span>Tanaman</span>
        </button>
        <button class="menu-link" type="button" data-title="Penjualan">
          <svg class="menu-icon" viewBox="0 0 24 24"><path d="M4 18h16"/><path d="M7 18V8l5-4 5 4v10"/><path d="M10 12h4"/></svg>
          <span>Penjualan</span>
        </button>
        <button class="menu-link" type="button" data-title="Laporan">
          <svg class="menu-icon" viewBox="0 0 24 24"><path d="M5 20V10"/><path d="M12 20V4"/><path d="M19 20v-7"/></svg>
          <span>Laporan</span>
        </button>
        <div class="special-menu open">
          <button class="special-menu__trigger" type="button" aria-expanded="true">
            <svg class="menu-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>
            <span>Menu Pilihan</span>
            <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="sub-menu">
            <button type="button" data-title="Agenda Saya">Agenda Saya</button>
            <button class="selected" type="button" data-title="Pengingat">Pengingat</button>
          </div>
        </div>
      </nav>
      <div class="sidebar-footer">
        <div class="avatar">SM</div>
        <div><div class="user-name">Sheren Maybeline</div><div class="user-role">Administrator</div></div>
      </div>
    </aside>

    <main class="main-content">
      <header class="topbar">
        <div><p class="eyebrow">Selamat datang kembali</p><h1 id="page-title">Dashboard</h1></div>
        <div class="topbar-right">
          <p class="date">Jumat, 18 September 2026</p>
          <button class="new-button" type="button">+ Buat baru</button>
        </div>
      </header>

      <section class="dashboard-cards">
        <div class="metric-card">
          <div class="metric-top">
            <div class="metric-icon">🌿</div>
          </div>
          <div class="metric-label">Produk aktif</div>
          <div class="metric-symbol">128</div>
          <div class="metric-change">+12% bulan ini</div>
        </div>
        <div class="metric-card">
          <div class="metric-top">
            <div class="metric-icon">💰</div>
          </div>
          <div class="metric-label">Omzet</div>
          <div class="metric-symbol">Rp 48J</div>
          <div class="metric-change">+18% dari minggu lalu</div>
        </div>
        <div class="metric-card">
          <div class="metric-top">
            <div class="metric-icon">🛒</div>
          </div>
          <div class="metric-label">Transaksi</div>
          <div class="metric-symbol">342</div>
          <div class="metric-change">+9% penjualan</div>
        </div>
        <div class="metric-card">
          <div class="metric-top">
            <div class="metric-icon">📈</div>
          </div>
          <div class="metric-label">Target</div>
          <div class="metric-symbol">68%</div>
          <div class="metric-change">89/125 target</div>
        </div>
      </section>

      <section class="overview">
        <article class="card activity-card">
          <div class="card-heading"><h2>Aktivitas terbaru</h2><button class="more" type="button">Lihat semua</button></div>
          <ul class="activity-list">
            <li><div><div class="activity-title">Stok tanaman hias menipis</div><div class="activity-detail">Tiga varietas paling laris sudah berada di bawah target stok</div></div><span class="activity-time">10 menit</span></li>
            <li><div><div class="activity-title">Penjualan hari ini naik 18%</div><div class="activity-detail">Total omzet hari ini sudah mencapai Rp 12,8 juta</div></div><span class="activity-time">1 jam</span></li>
            <li><div><div class="activity-title">Promo paket tanaman baru</div><div class="activity-detail">Campaign bundle tanaman indoor siap dipublikasikan ke pelanggan</div></div><span class="activity-time">Kemarin</span></li>
          </ul>
        </article>
        <aside class="card summary-card">
          <h2>Progres bulan ini</h2><p>Ringkasan penjualan tanaman yang telah tercapai pada bulan September.</p>
          <p class="summary-number">68<span>% selesai</span></p>
          <div class="progress"><span></span></div><div class="progress-label"><span>17 dari 25 target</span><span>Target 80%</span></div>
          <div class="summary-note">Anda sudah lebih cepat 12% dibandingkan bulan lalu.</div>
        </aside>
      </section>

      <section class="overview" style="margin-top: 22px;">
        <article class="card" style="padding: 22px 22px 18px;">
          <div class="card-heading" style="margin-bottom: 10px;"><h2>Daftar tanaman</h2><button class="more" type="button">Kelola</button></div>
          <div class="plant-list">
            <div class="plant-item">
              <div class="plant-thumb">🌱</div>
              <div>
                <div class="plant-name">Monstera Deliciosa</div>
                <div class="plant-meta">Jenis tanaman hias indoor</div>
              </div>
              <div class="plant-stock">42 stok</div>
            </div>
            <div class="plant-item">
              <div class="plant-thumb">🌼</div>
              <div>
                <div class="plant-name">Lavender</div>
                <div class="plant-meta">Tanaman aromatik dan dekoratif</div>
              </div>
              <div class="plant-stock">18 stok</div>
            </div>
            <div class="plant-item">
              <div class="plant-thumb">🌿</div>
              <div>
                <div class="plant-name">Sansevieria</div>
                <div class="plant-meta">Tahan cuaca dan mudah dirawat</div>
              </div>
              <div class="plant-stock">29 stok</div>
            </div>
            <div class="plant-item">
              <div class="plant-thumb">🌵</div>
              <div>
                <div class="plant-name">Cactus Mini</div>
                <div class="plant-meta">Favorit untuk desk dan kantor</div>
              </div>
              <div class="plant-stock">56 stok</div>
            </div>
          </div>
        </article>

        <aside class="sales-panel">
          <div class="card-heading" style="margin-bottom: 12px;"><h2>Penjualan</h2><button class="more" type="button">Detail</button></div>
          <div style="font-size: 12px; color: var(--muted);">Penjualan 7 hari terakhir</div>
          <div class="chart-bars">
            <div class="bar-group"><div class="bar" style="height: 38%;"></div><div class="bar-label">Sen</div></div>
            <div class="bar-group"><div class="bar" style="height: 52%;"></div><div class="bar-label">Sel</div></div>
            <div class="bar-group"><div class="bar active" style="height: 72%;"></div><div class="bar-label">Rab</div></div>
            <div class="bar-group"><div class="bar" style="height: 60%;"></div><div class="bar-label">Kam</div></div>
            <div class="bar-group"><div class="bar active" style="height: 84%;"></div><div class="bar-label">Jum</div></div>
            <div class="bar-group"><div class="bar" style="height: 63%;"></div><div class="bar-label">Sab</div></div>
            <div class="bar-group"><div class="bar active" style="height: 90%;"></div><div class="bar-label">Min</div></div>
          </div>
        </aside>
      </section>

      <section class="report-box">
        <div class="report-row">
          <div>
            <div class="report-name">Laporan penjualan minggu ini</div>
            <div class="report-meta">Dibuat 2 hari lalu • 14 halaman</div>
          </div>
          <div class="report-tag">Terkirim</div>
        </div>
        <div class="report-row">
          <div>
            <div class="report-name">Rekap stok tanaman</div>
            <div class="report-meta">Periode 1-30 September • 7 kategori</div>
          </div>
          <div class="report-tag warning">Perlu review</div>
        </div>
      </section>
    </main>
  </div>
  <script>
    const specialMenu = document.querySelector('.special-menu');
    const trigger = document.querySelector('.special-menu__trigger');
    const pageTitle = document.querySelector('#page-title');

    trigger.addEventListener('click', () => {
      const isOpen = specialMenu.classList.toggle('open');
      trigger.setAttribute('aria-expanded', isOpen);
    });

    document.querySelectorAll('[data-title]').forEach((item) => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.menu-link').forEach((link) => link.classList.remove('active'));
        document.querySelectorAll('.sub-menu button').forEach((link) => link.classList.remove('selected'));
        if (item.classList.contains('menu-link')) item.classList.add('active');
        if (item.parentElement.classList.contains('sub-menu')) item.classList.add('selected');
        pageTitle.textContent = item.dataset.title;
      });
    });
  </script>
</body>
</html>
