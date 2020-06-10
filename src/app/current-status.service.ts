import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentStatusService {

  statusUrl: string = "https://api.covid19india.org/data.json";

  banner: string = "https://api.covid19india.org/website_data.json";

  // state_district_json: string = "https://api.covid19india.org/v2/state_district_wise.json";
  state_district_json: string = "https://api.covid19india.org/state_district_wise.json";

  zoneData: string = "https://api.covid19india.org/zones.json";

  state_tested: string = "https://api.covid19india.org/state_test_data.json";
  resources: string = "https://api.covid19india.org/resources/resources.json";

  georesources: string = "https://api.covid19india.org/resources/geoResources.json";

  constructor(private httpClient: HttpClient) { }

  getStatus(): Observable<any> {
    return this.httpClient.get(this.statusUrl);
  }

  getBannerData(): Observable<any> {
    return this.httpClient.get(this.banner);
  }

  getIndiasDistrictwiseDetails(): Observable<any> {
    return this.httpClient.get(this.state_district_json);
  }
  // getIndiasDistrictwiseDetails(): Observable<any> {
  //   return this.httpClient.get(this.zoneData);
  // }

  getZoneData(): Observable<any> {
    return this.httpClient.get(this.zoneData);
  }

  getStateTested(): Observable<any> {
    return this.httpClient.get(this.state_tested);
  }

  getResources(): Observable<any> {
    return this.httpClient.get(this.resources);
  }

  getGeoResources(): Observable<any> {
    return this.httpClient.get(this.georesources);
  }


}
