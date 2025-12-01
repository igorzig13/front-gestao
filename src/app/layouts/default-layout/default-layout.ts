import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Sidebar} from '../../components/sidebar/sidebar';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-default-layout',
  imports: [
    RouterOutlet,
    Sidebar
  ],
  templateUrl: './default-layout.html',
  styleUrl: './default-layout.css',
})
export class DefaultLayout implements OnInit {
    constructor(private matIconRegistry: MatIconRegistry) {
    }

    ngOnInit() {
      this.matIconRegistry.setDefaultFontSetClass('material-symbols-outlined')
    }
}
