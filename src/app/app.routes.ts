import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'services', loadComponent: () => import('./pages/services/services').then(m => m.Services) },
  { path: 'equipe', loadComponent: () => import('./pages/team/team').then(m => m.Team) },
  { path: 'galerie', loadComponent: () => import('./pages/gallery/gallery').then(m => m.Gallery) },
  { path: 'a-propos', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
  { path: 'reservation', loadComponent: () => import('./pages/booking/booking').then(m => m.Booking) },
  { path: '**', redirectTo: '' }
];
