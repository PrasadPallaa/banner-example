import { Component, OnInit } from '@angular/core';
import { OverviewService } from 'src/app/services/overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  title = "Overview of messages";
  activeMsg = "No active messages are available";
  overViewData: Object;
  overViewDetailData: Object;

  constructor(private overviewService:OverviewService) { }

  ngOnInit() {
    this.getOverviewData();
  }

  getOverviewData(){
    this.overviewService.getOverviewData().subscribe((res)=>{
      this.overViewData = res;
    })
  }

}
