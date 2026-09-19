import { Component } from '@angular/core';

@Component({
  selector: 'app-penjualan',
  standalone: true,
  template: `
    <section class="panel">
      <div class="sales-grid">
        <article class="sales-card highlight">
          <span class="label">Total penjualan</span>
          <strong>Rp 12,8 Juta</strong>
          <small>+18% dari hari sebelumnya</small>
        </article>

        <article class="sales-card">
          <span class="label">Produk paling laku</span>
          <strong>Monstera Deliciosa</strong>
          <small>42 unit terjual</small>
        </article>

        <article class="sales-card">
          <span class="label">Pelanggan baru</span>
          <strong>31 orang</strong>
          <small>8% dari target harian</small>
        </article>
      </div>
    </section>
  `,
  styles: [
    `:host { display: block; }`,
    `.panel { padding: 22px; background: linear-gradient(180deg, #ffffff, #f6faf4); border: 1px solid #e7efe2; border-radius: 16px; box-shadow: 0 12px 30px rgba(33,57,41,0.08); }`,
    `.sales-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }`,
    `.sales-card { min-height: 170px; padding: 24px; border: 1px solid #e7efe2; border-radius: 14px; background: #fafcf9; display: grid; align-content: center; gap: 12px; }`,
    `.sales-card.highlight { background: linear-gradient(135deg, #edf7eb, #f8efe8); border-color: #d9ead2; }`,
    `.label { color: #6f7d6f; font-size: 0.72rem; }`,
    `.sales-card strong { color: #1f2d1f; font-size: 1.35rem; letter-spacing: -0.04em; }`,
    `.sales-card small { color: #4f7d5d; font-size: 0.72rem; }`,
    `@media (max-width: 760px) { .sales-grid { grid-template-columns: 1fr; } }`
  ]
})
export class PenjualanComponent {}
