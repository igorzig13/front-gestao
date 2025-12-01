import { Routes } from '@angular/router';
import {Login} from './pages/login/login';
import {DefaultLayout} from './layouts/default-layout/default-layout';
import {Dashboard} from './pages/dashboard/dashboard';
import {Associados} from './pages/associados/associados';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
    title: 'Página de Login'
  },
  {
    path: '',
    component: DefaultLayout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
        title: 'Dashboard'
      },
      {
        path: 'associados',
        component: Associados,
        title: 'Gestão de Associados'
      }
    ]
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }

];
