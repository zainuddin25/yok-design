import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideRight', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.3s ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.3s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class HeaderAdminComponent {
  constructor(private router : Router) {}

  sidebarVisibility: boolean = true

  isActive(routePath: string): boolean {
    return this.router.url === routePath;
  }

  openSidebar() {
    this.sidebarVisibility = true
  }

  closeSidebar() {
    this.sidebarVisibility = false
  }

}
