import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <section class="stats-grid">
      <article class="stat-card">
        <div class="stat-icon">🌿</div>
        <div class="stat-label">Produk aktif</div>
        <div class="stat-value">128</div>
        <div class="stat-change positive">+12% bulan ini</div>
      </article>

      <article class="stat-card">
        <div class="stat-icon">💰</div>
        <div class="stat-label">Omzet</div>
        <div class="stat-value">Rp 48J</div>
        <div class="stat-change positive">+18% dari minggu lalu</div>
      </article>

      <article class="stat-card">
        <div class="stat-icon">🛒</div>
        <div class="stat-label">Transaksi</div>
        <div class="stat-value">342</div>
        <div class="stat-change positive">+9% penjualan</div>
      </article>

      <article class="stat-card">
        <div class="stat-icon">📈</div>
        <div class="stat-label">Target</div>
        <div class="stat-value">68%</div>
        <div class="stat-change">89/125 target</div>
      </article>
    </section>

  `,
  styles: [
    `:host { display: block; }`,
    `.stats-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; margin-bottom: 24px; }`,
    `.stat-card { padding: 18px 18px 16px; border: 1px solid #e7efe2; border-radius: 16px; background: linear-gradient(180deg, #fff, #f8faf7); box-shadow: 0 6px 18px rgba(47,86,68,0.05); }`,
    `.stat-icon { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 12px; background: linear-gradient(135deg, #edf7ea, #e8f0ea); margin-bottom: 12px; }`,
    `.stat-label { color: #6f7d6f; font-size: 12px; margin-bottom: 8px; }`,
    `.stat-value { font-size: 2rem; font-weight: 800; letter-spacing: -0.04em; color: #1f2d1f; margin-bottom: 6px; }`,
    `.stat-change { font-size: 12px; color: #4f7d5d; font-weight: 700; }`,
    `.stat-change:not(.positive) { color: #b7643a; }`,
    `@media (max-width: 980px) { .stats-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }`,
    `@media (max-width: 520px) { .stats-grid { grid-template-columns: 1fr; } }`
  ]
})
export class DashboardComponent {}

