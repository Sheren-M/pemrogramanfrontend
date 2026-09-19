import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TanamanComponent } from './tanaman/tanaman.component';
import { PenjualanComponent } from './penjualan/penjualan.component';
import { LaporanComponent } from './laporan/laporan.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
  { path: 'tanaman', component: TanamanComponent, data: { title: 'Katalog Tanaman' } },
  { path: 'penjualan', component: PenjualanComponent, data: { title: 'Penjualan Produk' } },
  { path: 'laporan', component: LaporanComponent, data: { title: 'Laporan Bulanan' } },
  { path: '**', redirectTo: '' }
];
