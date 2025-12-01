import {MenuItem} from './sidebar';

export const sideBarItems: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
  { id: 'associados', label: 'Associados', icon: 'group', route: '/associados' },
  { id: 'financeiro', label: 'Financeiro', icon: 'attach_money', route: '/financeiro' },
  { id: 'eventos', label: 'Eventos', icon: 'calendar_today', route: '/eventos' },
  { id: 'mensagens', label: 'Mensagens', icon: 'mail', route: '/mensagens' },
  { id: 'comunicados', label: 'Comunicados', icon: 'chat_bubble', route: '/comunicados' },
  { id: 'config', label: 'Configurações', icon: 'settings', route: '/config' }
]
