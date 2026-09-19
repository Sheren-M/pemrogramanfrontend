import { Component } from '@angular/core';

@Component({
  selector: 'app-tanaman',
  standalone: true,
  template: `
    <section class="panel">
      <div class="plant-list">
        <article class="plant-item">
          <div class="plant-thumb thumb-green">🌱</div>
          <div class="plant-copy">
            <strong>Monstera Deliciosa</strong>
            <span>Tanaman hias indoor favorit</span>
          </div>
        </article>

        <article class="plant-item">
          <div class="plant-thumb thumb-purple">🌼</div>
          <div class="plant-copy">
            <strong>Lavender</strong>
            <span>Wangi dan cocok untuk dekorasi</span>
          </div>
        </article>

        <article class="plant-item">
          <div class="plant-thumb thumb-gold">🌿</div>
          <div class="plant-copy">
            <strong>Sansevieria</strong>
            <span>Tahan cuaca dan mudah dirawat</span>
          </div>
        </article>

        <article class="plant-item">
          <div class="plant-thumb thumb-amber">🌵</div>
          <div class="plant-copy">
            <strong>Cactus Mini</strong>
            <span>Pilihan populer untuk ruang kerja</span>
          </div>
        </article>
      </div>
    </section>
  `,
  styles: [
    `:host { display: block; }`,
    `.panel { padding: 22px; background: #fff; border: 1px solid #e7efe2; border-radius: 16px; box-shadow: 0 12px 30px rgba(33,57,41,0.08); }`,
    `.plant-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }`,
    `.plant-item { display: grid; grid-template-columns: 80px minmax(0, 1fr); align-items: center; gap: 16px; padding: 14px 16px; border: 1px solid #e7efe2; border-radius: 14px; background: linear-gradient(180deg, #ffffff, #fafcf9); box-shadow: 0 8px 18px rgba(47,86,68,0.03); }`,
    `.plant-thumb { display: grid; place-items: center; width: 80px; height: 80px; border-radius: 18px; font-size: 30px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.4); }`,
    `.thumb-green { background: linear-gradient(135deg, #edf8e7, #dfeecf); }`,
    `.thumb-purple { background: linear-gradient(135deg, #9782a6, #e3d8f0); }`,
    `.thumb-gold { background: linear-gradient(135deg, #f5f5e7, #e9e2b8); }`,
    `.thumb-amber { background: linear-gradient(135deg, #fff3e7, #f6dabb); }`,
    `.plant-copy { display: grid; gap: 6px; }`,
    `.plant-copy strong { color: #1f2d1f; font-size: 1rem; }`,
    `.plant-copy span { color: #6f7d6f; font-size: 0.78rem; line-height: 1.5; }`,
    `@media (max-width: 980px) { .plant-list { grid-template-columns: 1fr; } }`
  ]
})
export class TanamanComponent {}
