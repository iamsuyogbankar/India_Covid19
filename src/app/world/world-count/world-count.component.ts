import { Component, OnInit } from '@angular/core';
import { WorldService } from '../world.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { map } from 'rxjs/operators';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-world-count',
  templateUrl: './world-count.component.html',
  styleUrls: ['./world-count.component.css']
})
export class WorldCountComponent implements OnInit {
  isShowGlobalData: boolean = true;
  worldData: any = [];
  globalData: any = [];
  aciveCases: number;
  lastUpdates: any = "";
  searchCountry: any = "";

  countries: any = [];
  counTotalConfirm: number;
  counTotalRecovered: number;
  counTotalDeathes: number;
  //   count = {
  //     countTo: 100,
  //     from: 0,
  //     duration: 1
  // };
  // count = {};

  constructor(private worldService: WorldService, private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getWorldData();
    this.getCountryName();
  }

  getWorldData() {
    this.spinner.show();
    this.worldService.getWorldCount().subscribe((response) => {
      this.spinner.hide();
      this.worldData = response;
      // console.log(this.worldData);

      for (let key in response) {
        if (key == "Countries") {
          this.worldData = response[key];
        }
        if (key == "Global") {
          this.globalData.push(response[key]);
        }
        if (key == "Date") {
          this.lastUpdates = response[key];
        }
      }

      this.globalData.forEach(data => {
        this.aciveCases = data.TotalConfirmed - data.TotalRecovered - data.TotalDeaths;
      });
      // console.log(this.worldData);
      // console.log('global', this.globalData);
      // this.count = {
      //   countTo: this.globalData.TotalConfirmed,
      //   from: 0,
      //   duration: 4
      // }
      // console.log('active Cases', this.aciveCases);
      // console.log('last update', this.lastUpdates);
    });


  }

  getCountryName() {
    this.worldService.getCountryName().subscribe((res) => {
      this.countries = res;
      console.log('country json', this.countries);
    })
  }

  getCountry(countryName: string) {
    console.log('countryName', countryName);
    // debugger
    this.spinner.show();
    this.worldService.getCasesValuesAccordingToCounty(countryName).subscribe((res) => {
      this.spinner.hide();
      console.log('countryDetail', res);
      if (res.length > 0) {
        let index = res.length - 1;
        this.counTotalConfirm = res[index].Confirmed;
        this.counTotalRecovered = res[index].Recovered;
        this.counTotalDeathes = res[index].Deaths;
        this.aciveCases = this.counTotalConfirm - this.counTotalRecovered - this.counTotalDeathes;
        console.log('this.active', this.aciveCases);
        this.isShowGlobalData = false;
      } else {
        this.toastr.error('No Data Found', 'Sorry!', {
          timeOut: 3000
        });
        // this.globalData = [];
        // this.counTotalConfirm = 0;
        // this.counTotalDeathes = 0;
        // this.counTotalRecovered = 0;
        // this.aciveCases = 0;
      }

    },
      err => {
        console.log('error API is not ececuted', err);
        this.toastr.error('No Data Found', 'Sorry!', {
          timeOut: 3000
        });
      })
  }

}
