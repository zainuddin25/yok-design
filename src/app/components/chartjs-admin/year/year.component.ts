import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent {

  public chart: any 

  ngOnInit() {
    this.createChart()
  }

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2020', '2021', '2022', '2023'], 
	       datasets: [
          {
            label: "User Joined",
            data: ['100', '84', '75', '129'],
            backgroundColor: 'blue'
          },
          {
            label: "Contest Created",
            data: ['21', '53', '32', '93'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
}
