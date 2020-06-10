import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { CurrentStatusService } from '../current-status.service';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  // @ViewChild(HomeComponent) homeComponent: HomeComponent;
  @ViewChild('stateCSVData') stateCSVInfo: ElementRef
  getRoute;
  // lastUpdate: any;
  bannerData: any = [];
  name: any = [];
  isShowStatData: boolean = true;

  constructor(private statusService: CurrentStatusService, 
    private route: ActivatedRoute,
    private location: Location) {

    this.getRoute = location.path();
    // console.log('thiis.getroute', this.getRoute);
    let url = this.route.url.subscribe((res) => {
      return res.values
    });
    console.log('url',url);
  }

  ngOnInit() {
    // console.log('getroute',this.getRoute);
    this.getBannerData();
    // if (this.stateCSVInfo) {
    //   // debugger;
    //   this.isShowStatData = false;
    // } else {
    //   this.isShowStatData = true;
    // }

    //  console.log(this.route.snapshot.paramMap.get('name'));
    
    
  }

  ngAfterViewInit() {

    // this.lastUpdate = this.homeComponent.sendToNav;
    // console.log('update from home in navbar', this.homeComponent.sendToNav);

  }


  getBannerData() {
    this.statusService.getBannerData().subscribe((res) => {
      // console.log(res);
      this.bannerData = res.factoids;
      // console.log('res.facotids', this.bannerData);
      let fetchBanner: any = [];
      let index = 0;
      fetchBanner = this.bannerData.map((bname) => {
        return bname.banner
      });
      // console.log(fetchBanner);

      let interval = setInterval(() => {
        if (index == 25) {
          clearInterval(interval);
        }
        // console.log(fetchBanner[index++]);
        fetchBanner[index++];
        this.name = fetchBanner[index];
        if (index == fetchBanner.length) {
          index = 0
        }
      }, 6000)
    });
    console.log('name', name);

  }

  getRouteName(routeName) {
    console.log('routtename', routeName);
    (routeName === "home") ? this.isShowStatData = true : this.isShowStatData = false;
    //  this.isShowStatData = false : this.isShowStatData = false;
    // if (routeName === "home") {
    //   // debugger
    //   this.isShowStatData = true;
    // } else if (routeName === "world-count") {
    //   this.isShowStatData = false;
    // }
    // else {
    //   this.isShowStatData === false;
    // }

  }

}
