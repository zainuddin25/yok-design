import { Component } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  sidebarVisibility: boolean = true

  openSidebar() {
    this.sidebarVisibility = true
  }

}
