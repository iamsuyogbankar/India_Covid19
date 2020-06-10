import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  rawData: string = "https://api.covid19india.org/raw_data.json";
  zoneData: string = "https://api.covid19india.org/zones.json";

  constructor(private httpClient: HttpClient) { }


  getRawData(): Observable<any> {
    return this.httpClient.get(this.rawData)
  }

  getZoneData(): Observable<any> {
    return this.httpClient.get(this.zoneData);
  }
}
