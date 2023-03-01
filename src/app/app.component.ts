import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YokDesign';
  role: string = 'admin'
  ngOnInit() {
    localStorage.setItem('role', 'admin')
  }
}
