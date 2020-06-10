import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldService {

  worldCount: any = "https://api.covid19api.com/summary";
  getAllCountryName: any = "https://api.covid19api.com/countries";
  getCasesAccordingToCountry: any = "https://api.covid19api.com/total/dayone/country";


  constructor(private httpService: HttpClient) { }

  getWorldCount(): Observable<any> {
    return this.httpService.get(this.worldCount);
  }

  getCountryName(): Observable<any> {
    return this.httpService.get(this.getAllCountryName);
  }

  getCasesValuesAccordingToCounty(countryname): Observable<any>{
    return this.httpService.get(this.getCasesAccordingToCountry + '/' + countryname);
  }
}
