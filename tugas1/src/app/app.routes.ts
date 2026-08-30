import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AdminPage } from './admin-page/admin-page';
import { AboutPage } from './about-page/about-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'admin',
    component: AdminPage
  },
  {
    path: 'about',
    component: AboutPage
  }
];