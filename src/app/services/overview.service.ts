import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(private httpClient:HttpClient) { }

  getOverviewData(){
    return this.httpClient.get("/assets/overview.json");
  }

  getOverViewDetaildata(id){
    return this.httpClient.get("/assets/overViewDetail.json");
  }
}
