import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import Chart, { Title } from 'chart.js/auto';

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
          labels: ['Worked-Hours', 'billable-Hours', 'non-billable-Hours'],
          datasets: [{
              label: 'jun month summary',
              data: [171, 90, 81],
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
              borderWidth: 1,
              barPercentage: 0.5
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Hours'
                  }
              },
          }
      }
  });
  const myCha = new Chart("myChart-1", {
    type: 'bar',
    data: {
        labels: ['Worked-Hours', 'billable-Hours', 'non-billable-Hours'],
        datasets: [{
            label: 'may month Summary',
            data: [181, 110, 71],
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
            borderWidth: 1,
            barPercentage: 0.5,
        }]
    },
    
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Hours'
                },
                
            },
            
        }
    },

});

  }
}


