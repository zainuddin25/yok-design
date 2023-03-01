import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardAdminComponent {

  public chart: any 
  public pie: any 
  chartSelected : string = 'year'
  week: boolean = false
  month: boolean = false
  year: boolean = true

  constructor(private router: Router) {}

  ngOnInit() {
    this.createChartPie();
    if (localStorage.getItem('role') !== null) {
      console.log('local storage not null')
    } else {
      this.router.navigate(['restriction'])
    }
  }

  createChartPie(){
    this.pie = new Chart("MyChartPie", {
      type: 'pie', //this denotes tha type of chart

      data: {
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

  handleWeek() {
    this.week = true
    this.month = false
    this.year = false
    this.chartSelected = 'week'
  }

  handleMonth() {
    this.week = false
    this.month = true
    this.year = false
    this.chartSelected = 'month'
  }

  handleYear() {
    this.week = false
    this.month = false
    this.year = true
    this.chartSelected = 'year'
  }

}
