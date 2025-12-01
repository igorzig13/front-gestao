import {Component, Input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

export interface DashboardStat {
  id: number,
  title: string,
  subtitle?: string,
  value: string,
  icon: string,
  color: string,
  trend?: string,
}

@Component({
  selector: 'app-dashboard-card',
  imports: [
    MatIcon
  ],
  templateUrl: './dashboard-card.html',
  styles: ``,
})
export class DashboardCard {
  @Input() stat!: DashboardStat;
}
