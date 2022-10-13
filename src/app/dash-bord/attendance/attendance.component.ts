import { Component, OnInit } from '@angular/core';
import Chart, { Title } from 'chart.js/auto';
import { AuthenticationService } from '../authuGaurd/authentication.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
})
export class AttendanceComponent implements OnInit {
  selectedDate: any;

  constructor(private Authentication: AuthenticationService) {}

  ngOnInit(): void {
    const myChart = new Chart('myChart-3', {
      type: 'bar',
      data: {
        labels: ['Working-Days', 'HoliDay', 'Leave-Days'],
        datasets: [
          {
            label: 'jun month summary',
            data: [18, 9, 0],
            backgroundColor: ['#66ff76', '#ff003d', '#fca452'],
            borderColor: ['#66ff76', '#ff003d', '#fca452'],
            borderWidth: 1,
            barPercentage: 0.5,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Hours',
            },
          },
        },
      },
    });
  }
  // data:any
  // readData() {
  //   this.data = localStorage.getItem('loginStatus') ? JSON.parse(localStorage.getItem('loginStatus')!):{}
  // }
  logOff() {
    localStorage.removeItem('loginStatus');
  }
}
