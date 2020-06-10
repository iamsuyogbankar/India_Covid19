import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { CurrentStatusService } from 'src/app/current-status.service';
import * as Chart from 'chart.js';
import { ChartService } from '../chart.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-chart-deepdive',
  templateUrl: './chart-deepdive.component.html',
  styleUrls: ['./chart-deepdive.component.css']
})
export class ChartDeepdiveComponent implements OnInit {
  statewise: any = [];
  data: any = [];
  statename: any = [];
  chart: any = [];

  lineChart: any = [];
  keys: any = [];
  values: any = [];

  currentStatus: any = [];
  chartDataWise: any = [];

 

  constructor(private currentStatusService: CurrentStatusService, private chartService: ChartService, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.getCurrentStat();
    this.getZoneWiseData();
  }

   getCurrentStat() {
    this.spinner.show();
    this.currentStatusService.getStatus().subscribe((res) => {
      this.spinner.hide();
      this.currentStatus = res;
      for (let key in res) {
        if (key == "statewise") {
          this.statewise = res[key];
        }
      }

      this.statename = this.statewise.map((name) => {
        return name.state
      });

      this.data = this.statewise.map((confirmed) => {
        return confirmed.confirmed;
      })
      console.log('data', this.data);

      // this.getTotalCaseForChart();

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.statename,
          datasets: [
            {
              data: this.data,
              borderColor: 'black',
              backgroundColor: 'orange',
              fill: false
            }
          ]
        },
        options: {
          legend: { display: false },
          scales: { xAxes: [{ display: true }], yAxes: [{ display: true }] }
        }
      });

    });
  }

  getZoneWiseData() {
    this.chartService.getZoneData()
      .subscribe((res) => {
        let takeRes: any = [];
        takeRes = res.zones;

        console.log('res', takeRes);
        let green: any = [];
        let orange: any = [];
        let red: any = [];

        takeRes.forEach(element => {
          // debugger
          // console.log(element.zone);
          if (element.zone == "Green") {
            green.push(element.district);
          } else if (element.zone == "Orange") {
            orange.push(element.district);
          } else if (element.zone == "Red") {
            red.push(element.district);
          }
        });
      })
  }






}
