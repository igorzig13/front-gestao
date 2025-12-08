import {Component, OnInit} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import { sideBarItems } from './menu-items';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth/auth';

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  route: string;
}

export interface UserInfo {
  name: string;
  email: string;
  avatar?: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [
    MatIcon,
    RouterLink
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {

  menuItems: MenuItem[] = [];
  currentPage = 'dashboard';
  userInfo: UserInfo = {email: 'admin@amapm.org', name: 'Administrador'}

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.menuItems.push(...sideBarItems)
  }

  onNavigate(pageId: string) {
    this.currentPage = pageId;

    const menuItem = this.menuItems.find(item => item.id === pageId);
    if (menuItem?.route) {
      this.router.navigate([menuItem.route]).finally();
    }
  }

  getButtonClass(pageId: string): string {
    const baseClasses = 'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors';
    const isActive = this.router.url === '/' + pageId;
    console.log(this.router.url)

    if (isActive) {
      return `${baseClasses} bg-sidebar-primary text-sidebar-primary-foreground`;
    } else {
      return `${baseClasses} text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground`;
    }
  }

  protected handleLogout() {
    this.authService.logout();
  }
}
