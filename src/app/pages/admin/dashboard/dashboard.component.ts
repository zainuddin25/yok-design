import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardAdminComponent {

  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('role') !== null) {
      console.log('local storage not null')
    } else {
      this.router.navigate(['restriction'])
    }
  }
}
