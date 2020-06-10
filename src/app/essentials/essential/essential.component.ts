import { Component, OnInit } from '@angular/core';
import { CurrentStatusService } from 'src/app/current-status.service';
import { map } from 'rxjs/internal/operators/map';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-essential',
  templateUrl: './essential.component.html',
  styleUrls: ['./essential.component.css']
})
export class EssentialComponent implements OnInit {
  essentials: any = [];
  isEmpty: string;
  constructor(private statusService: CurrentStatusService,
    private toastrService: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // this.statusService.getGeoResources().subscribe((res) => {
    //   console.log('getGeoResources', res);

    // })
  }

  getSerchInput(value: string) {
    // console.log(value);
    this.essentials = [];
    let cityName = value.toLowerCase().split(' ')
      .map(word => word[0].toUpperCase() + word.substr(1).toLowerCase()).join(' ');
    console.log('searchedInput', cityName);
    this.spinner.show();
    this.statusService.getResources()
      .pipe(
        map(data => data.resources),
        // filter(data => data.state == this.stateName)
      )
      .subscribe((res) => {
        this.spinner.hide();
        console.log('resourcessdf', res);
        res.filter((details) => {
          return (details.city == cityName) ? this.essentials.push(details) : null;
        });
        if (this.essentials.length <= 0) {
          this.toastrService.error(`Sorry no data found of essential service for "${cityName}" Location`);
          this.isEmpty = '';
        } else {
          this.toastrService.success(`Details of Services from "${cityName}" Location are Listed below`);
        }

        console.log('final', this.essentials);
        // console.log('find last category',this.essentials[this.essentials.length - 1]['category']);

      }, (err) => {
        this.toastrService.error(`Sorry This ${err.value} Occurs`)
      });
  }


  inputLength() {
    if (this.isEmpty.length) {
      this.essentials = [];
    }

  }

}
