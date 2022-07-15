import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dash-bord',
  templateUrl: './dash-bord.component.html',
  styleUrls: ['./dash-bord.component.scss']
})
export class DashBordComponent implements OnInit {

  ngOnInit() {
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['WorkedHours', 'billable', 'non-billable'],
          datasets: [{
              label: 'may month summary',
              data: [10, 5, 5],
              backgroundColor: [
                '#66ff76',
                '#ff003d',
                '#fca452',
              ],
              borderColor: [
                '#66ff76',
                '#ff003d',
                '#fca452',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  const myCha = new Chart("myChart-1", {
    type: 'bar',
    data: {
        labels: ['WorkedHours', 'billable', 'non-billable'],
        datasets: [{
            label: 'Jun month Summary',
            data: [10, 6, 4],
            backgroundColor: [
              '#66ff76',
              '#ff003d',
              '#fca452',
            ],
            borderColor: [
              '#66ff76',
              '#ff003d',
              '#fca452',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
  }
}


