import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Byron Armijos — enbyronment.dev'
  },
  {
    path: 'notes/:slug',
    loadComponent: () => import('./features/notes/note-detail.component').then(m => m.NoteDetailComponent),
    title: 'Byron Armijos — Technical Note'
  },
  {
    path: 'case-studies/:id',
    loadComponent: () => import('./features/case-studies/case-study-detail.component').then(m => m.CaseStudyDetailComponent),
    title: 'Byron Armijos — Case Study'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

