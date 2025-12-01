import { Component } from '@angular/core';
import {Header} from '../../components/header/header';
import {DashboardCard, DashboardStat} from '../../components/dashboard-card/dashboard-card';
import {MatIcon} from '@angular/material/icon';

export const stats: DashboardStat[] = [
  {
    id: 1,
    title: "Associados Ativos",
    value: "1,247",
    icon: 'group',
    color: "bg-blue-500",
    trend: "+5.2%",
  },
  {
    id: 2,
    title: "Próximos Aniversários",
    value: "18",
    icon: 'celebration',
    color: "bg-green-500",
    subtitle: "Este mês",
  },
  {
    id: 3,
    title: "Pendências Financeiras",
    value: "34",
    icon: 'error',
    color: "bg-yellow-500",
    subtitle: "Requer atenção",
  },
  {
    id: 4,
    title: "Próximos Eventos",
    value: "3",
    icon: 'calendar_today',
    color: "bg-purple-500",
    subtitle: "Próximos 30 dias",
  },
];

const recentActivities = [
  { id: 1, text: "Novo associado cadastrado: João Silva", time: "Há 2 horas" },
  { id: 2, text: "Pagamento recebido: Maria Santos - R$ 150,00", time: "Há 3 horas" },
  { id: 3, text: "Evento criado: Assembleia Geral", time: "Há 5 horas" },
  { id: 4, text: "Comunicado enviado: Renovação de Anuidades", time: "Há 1 dia" },
];

const upcomingBirthdays = [
  { id: 1, name: "Ana Costa", date: "28 Nov", age: 45 },
  { id: 2, name: "Carlos Lima", date: "29 Nov", age: 52 },
  { id: 3, name: "Fernanda Souza", date: "30 Nov", age: 38 },
  { id: 4, name: "Roberto Alves", date: "01 Dez", age: 61 },
];

@Component({
  selector: 'app-dashboard',
  imports: [
    Header,
    DashboardCard,
    MatIcon
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  protected readonly stats = stats;
  protected readonly recentActivities = recentActivities;
  protected readonly upcomingBirthdays = upcomingBirthdays;
}
