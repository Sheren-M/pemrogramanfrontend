import { Component } from '@angular/core';

@Component({
  selector: 'app-laporan',
  standalone: true,
  template: `
    <section class="report-box">

      <!-- TAB A DAN B -->
      <div class="top-bar">
        <div class="tab-switcher" role="tablist" aria-label="Pilihan laporan">

          <button
            type="button"
            class="tab-button"
            [class.active]="!showB"
            (click)="showB = false"
          >
            A
          </button>

          <button
            type="button"
            class="tab-button"
            [class.active]="showB"
            (click)="showB = true"
          >
            B
          </button>

        </div>
      </div>


      <!-- AREA KOTAK -->
      <div
        class="content-grid"
        [class.with-extra]="showB"
      >

        <!-- =========================
             KOTAK A
             ========================= -->
        <div class="view-panel report-card">

          <div class="panel-header">

            <div class="panel-title">
              <span class="panel-label">
                Laporan A
              </span>

              <h2>
                Laporan penjualan minggu ini
              </h2>
            </div>

            <span class="tag success">
              Terkirim
            </span>

          </div>


          <!-- ISI KOTAK A -->
          <div class="panel-body">

            <div class="chart-area">

              <div class="chart-line line-1"></div>
              <div class="chart-line line-2"></div>
              <div class="chart-line line-3"></div>
              <div class="chart-line line-4"></div>
              <div class="chart-line line-5"></div>

            </div>

          </div>


          <div class="panel-footer">

            <span>
              Dibuat 2 hari lalu
            </span>

            <strong>
              14 halaman
            </strong>

          </div>

        </div>


        <!-- =========================
             KOTAK B
             ========================= -->
        @if (showB) {

          <div class="view-panel report-card">

            <div class="panel-header">

              <div class="panel-title">

                <span class="panel-label">
                  Laporan B
                </span>

                <h2>
                  Ringkasan penjualan
                </h2>

              </div>

              <span class="tag success">
                Aktif
              </span>

            </div>


            <!-- ISI KOTAK B -->
            <div class="panel-body">

              <div class="summary-list">

                <div class="summary-row">

                  <span>
                    Penjualan hari ini
                  </span>

                  <strong>
                    Rp 12,8 juta
                  </strong>

                </div>


                <div class="summary-row">

                  <span>
                    Produk terjual
                  </span>

                  <strong>
                    42 unit
                  </strong>

                </div>


                <div class="summary-row">

                  <span>
                    Target bulan ini
                  </span>

                  <strong>
                    68%
                  </strong>

                </div>

              </div>

            </div>


            <div class="panel-footer">

              <span>
                Performa bulan ini
              </span>

              <strong>
                Naik 18%
              </strong>

            </div>

          </div>

        }

      </div>

    </section>
  `,

  styles: [`

    /* =====================================
       CONTAINER UTAMA
       ===================================== */

    :host {
      display: block;
      width: 100%;
    }

    .report-box {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
    }


    /* =====================================
       TAB A / B
       ===================================== */

    .top-bar {
      display: flex;
      align-items: center;
    }

    .tab-switcher {
      display: inline-flex;
      gap: 6px;

      padding: 4px;

      background: #eef3ee;

      border: 1px solid #dfe8df;

      border-radius: 12px;
    }

    .tab-button {
      border: none;
      outline: none;

      background: transparent;

      color: #4c5f4c;

      border-radius: 9px;

      padding: 8px 20px;

      font-size: 0.85rem;
      font-weight: 700;

      cursor: pointer;

      transition:
        background 0.2s ease,
        color 0.2s ease,
        box-shadow 0.2s ease;
    }

    .tab-button:hover {
      background: #e1ebe2;
    }

    .tab-button.active {
      background: #2f5644;
      color: white;

      box-shadow:
        0 6px 14px rgba(47, 86, 68, 0.15);
    }


    /* =====================================
       AREA KOTAK
       ===================================== */

    .content-grid {

      /*
       * Saat hanya A:
       * A tetap ukuran card,
       * tidak melebar memenuhi halaman.
       */
      display: grid;

      grid-template-columns: 380px;

      gap: 18px;

      align-items: stretch;

      width: 100%;
    }


    /*
     * Saat B diklik:
     * A + B memiliki ukuran yang sama.
     */
    .content-grid.with-extra {

      grid-template-columns:
        repeat(2, 380px);

      gap: 18px;
    }


    /* =====================================
       CARD / KOTAK
       ===================================== */

    .report-card {

      width: 380px;
      min-height: 300px;

      box-sizing: border-box;

      padding: 22px;

      border:
        1px solid
        #e7efe2;

      border-radius: 16px;

      background:
        linear-gradient(
          180deg,
          #ffffff,
          #fafcf9
        );

      box-shadow:
        0 10px 24px
        rgba(47, 86, 68, 0.06);

      display: flex;
      flex-direction: column;

      gap: 18px;
    }


    /* =====================================
       HEADER CARD
       ===================================== */

    .panel-header {

      display: flex;

      justify-content: space-between;

      align-items: flex-start;

      gap: 15px;
    }

    .panel-title {
      min-width: 0;
    }

    .panel-label {

      display: block;

      margin-bottom: 6px;

      color: #7f8d7f;

      font-size: 0.7rem;

      font-weight: 700;

      letter-spacing: 0.05em;

      text-transform: uppercase;
    }

    .panel-header h2 {

      margin: 0;

      color: #1f2d1f;

      font-size: 1rem;

      line-height: 1.4;

      font-weight: 700;
    }


    /* =====================================
       TAG
       ===================================== */

    .tag {

      flex-shrink: 0;

      padding:
        6px
        10px;

      border-radius: 999px;

      font-size: 0.7rem;

      font-weight: 700;
    }

    .tag.success {

      background: #edf9ef;

      color: #2f5644;
    }


    /* =====================================
       BODY CARD
       ===================================== */

    .panel-body {

      flex: 1;

      display: flex;

      flex-direction: column;

      justify-content: center;
    }


    /* =====================================
       KONTEN KOTAK A
       ===================================== */

    .chart-area {

      display: flex;

      flex-direction: column;

      gap: 12px;

      padding:
        15px
        5px;
    }

    .chart-line {

      height: 8px;

      border-radius: 999px;

      background: #dfe9df;
    }

    .line-1 {
      width: 90%;
    }

    .line-2 {
      width: 72%;
    }

    .line-3 {
      width: 84%;
    }

    .line-4 {
      width: 62%;
    }

    .line-5 {
      width: 45%;
    }


    /* =====================================
       KONTEN KOTAK B
       ===================================== */

    .summary-list {

      display: flex;

      flex-direction: column;
    }

    .summary-row {

      display: flex;

      align-items: center;

      justify-content: space-between;

      gap: 15px;

      padding:
        14px
        0;

      border-bottom:
        1px solid
        #edf1ed;
    }

    .summary-row:last-child {
      border-bottom: none;
    }

    .summary-row span {

      color: #6f7d6f;

      font-size: 0.78rem;
    }

    .summary-row strong {

      color: #1f2d1f;

      font-size: 0.82rem;

      text-align: right;
    }


    /* =====================================
       FOOTER CARD
       ===================================== */

    .panel-footer {

      display: flex;

      align-items: center;

      justify-content: space-between;

      gap: 12px;

      padding-top: 14px;

      border-top:
        1px solid
        #edf1ed;

      color: #6f7d6f;

      font-size: 0.72rem;
    }

    .panel-footer strong {

      color: #2f5644;

      font-weight: 700;
    }


    /* =====================================
       RESPONSIVE / HP
       ===================================== */

    @media (max-width: 850px) {

      .content-grid {

        grid-template-columns:
          minmax(0, 1fr);
      }

      .content-grid.with-extra {

        grid-template-columns:
          minmax(0, 1fr);
      }

      .report-card {

        width: 100%;
      }
    }


    /* =====================================
       HP KECIL
       ===================================== */

    @media (max-width: 480px) {

      .report-card {

        min-height: 270px;

        padding: 18px;
      }

      .panel-header h2 {

        font-size: 0.9rem;
      }

      .tab-button {

        padding:
          7px
          16px;
      }

      .panel-footer {

        font-size: 0.68rem;
      }
    }

  `]
})
export class LaporanComponent {

  /*
   * A selalu ada.
   */
  showB = false;

}