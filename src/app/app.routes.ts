import { Routes } from '@angular/router';
import {Login} from './pages/login/login';
import {DefaultLayout} from './layouts/default-layout/default-layout';
import {Dashboard} from './pages/dashboard/dashboard';
import {Associados} from './pages/associados/associados';
import {Financeiro} from './pages/financeiro/financeiro';
import {Eventos} from './pages/eventos/eventos';
import {Mensagens} from './pages/mensagens/mensagens';
import {Config} from './pages/config/config';
import {Comunicados} from './pages/comunicados/comunicados';
import {authGuard} from './guards/auth-guard';
import {CadastroAssociado} from './pages/associados/cadastro/cadastro-associado/cadastro-associado';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
    title: 'Página de Login'
  },
  {
    path: '',
    component: DefaultLayout,
    canActivate: [authGuard],
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
      },
      {
        path: 'associados/cadastrar',
        component: CadastroAssociado,
        title: 'Cadastro de Associado'
      },
      {
        path: 'financeiro',
        component: Financeiro,
        title: 'Gestão Financeira'
      },
      {
        path: 'eventos',
        component: Eventos,
        title: 'Eventos'
      },
      {
        path: 'mensagens',
        component: Mensagens,
        title: 'Mensagens Automáticas'
      },
      {
        path: 'comunicados',
        component: Comunicados,
        title: 'Comunicados'
      },
      {
        path: 'config',
        component: Config,
        title: 'Configurações'
      },
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      }
    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }

];
