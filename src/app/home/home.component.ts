import { Component, OnInit } from '@angular/core';
import { CurrentStatusService } from '../current-status.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
// import 'rxjs/add/operator/mergeMap';
import { map, max, filter } from 'rxjs/operators';
import { Color } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { forkJoin, merge } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getStatusData: any = [];
  getState_District_WiseDetails: any = [];
  arr: any = [];
  isModalshow: boolean = true;
  total: any = [];
  lastUpdates: any;
  searchText: any = "";
  sendToNav: string = "suyog bankar";
  stateName: string;
  stateCode: string;
  zoneColor: any = "";
  red: string = "red";
  green: string = "green";
  orange: string = "orange";

  constructor(private statusService: CurrentStatusService, private spinner: NgxSpinnerService,
    private toastr: ToastrService, private http: HttpClient) { }

  ngOnInit() {
    this.getDailyCoronaStatus();
    // this.bindZoneColor();
    this.getStateData();
    this.getResourcesData();

  }

  //get daily corona virus status and live update timing
  getDailyCoronaStatus() {
    this.spinner.show();
    this.statusService.getStatus().subscribe((response) => {
      this.spinner.hide();
      this.getStatusData = response;
      // console.log(" before status data", this.getStatusData);
      for (let key in response) {
        if (key == "statewise") {
          this.getStatusData = response[key];
          this.total.push(this.getStatusData[0]);
        }
      }

      this.total.forEach(element => {
        this.lastUpdates = element.lastupdatedtime
      });

      this.getStatusData = this.getStatusData.sort((a: any, b: any) => {
        return a.state.localeCompare(b.state)
      });
    });
  }


  //get destrict details onClick of State
  getDistrictDetails(name: string) {
    this.stateName = name;
    this.arr = [];
    let stateValue: any;
    let statecode: any = [];
    this.statusService.getIndiasDistrictwiseDetails().subscribe((response) => {
      // console.log('getIndiaDistrictWiseDetails', response);
      stateValue = Object.values(response);
      stateValue.forEach((res: any) => {
        statecode.push(res.statecode + '');
      })

      for (let key in response) {
        if (this.stateName == key) {
          this.getState_District_WiseDetails = response[name].districtData;

          this.stateCode = response[name].statecode;
          
          Object.keys(this.getState_District_WiseDetails).forEach((res: any) => {
            this.arr.push(Object.assign({ key: res, value: this.getState_District_WiseDetails[res] }));
            // console.log('arr', this.arr);

          });
        }
      }
    });
    let zoneRes: any = [];
    this.statusService.getZoneData().subscribe((res) => {

      let zone = res.zones;
      // console.log('zone res',zone);
      zone.forEach((res) => {
        // debugger
        if (res.statecode == this.stateCode)
          zoneRes.push(res)
      })

      zoneRes.forEach((color) => {
        // debugger
        if (color.zone == "Green") {
          this.zoneColor = this.green;
        } else if (color.zone == "Red") {
          this.zoneColor = this.red;
        } else if (color.zone == "Orange") {
          this.zoneColor = this.orange;
        }
      });
    });


    //API CALLING FOR GET RESOURCES ACCORDING TO STATE
   


    //CODE FOR FORKJOIN OF TWO APIS
    // let districtData = this.http.get('https://api.covid19india.org/state_district_wise.json');
    // let zoneData = this.http.get('https://api.covid19india.org/zones.json');

    // forkJoin([districtData, zoneData]).subscribe((response) => {
    //   console.log('forkjoinREs', response);

    // })
  }







  getStateData() {
    this.statusService.getStateTested().subscribe((res) => {
      console.log('getStateTested', res.states_tested_data);

    })

  }

  getResourcesData() {



  }



}
