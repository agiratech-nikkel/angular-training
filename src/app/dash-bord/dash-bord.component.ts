import { Component, OnInit } from '@angular/core';
import Chart, { Title } from 'chart.js/auto';
import { AuthenticationService } from './authuGaurd/authentication.service';
@Component({
  selector: 'app-dash-bord',
  templateUrl: './dash-bord.component.html',
  styleUrls: ['./dash-bord.component.scss']
})
export class DashBordComponent implements OnInit {
  constructor(private Authentication: AuthenticationService) { }

  labels = ['Worked-Hours', 'billable-Hours', 'non-billable-Hours']

  ngOnInit() {
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: this.labels,
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
        labels: this.labels,
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
  logginStatus(value: string) {
    console.log('Login Fun', value)
    // this.Authentication.loginStatus(value)
  }
  logOff() {
    this.logginStatus('false')
    localStorage.removeItem('userName');
    localStorage.removeItem('loginStatus');
  }
}


