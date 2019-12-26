import { Component, OnInit } from '@angular/core';
import { OverviewService } from 'src/app/services/overview.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview-detail',
  templateUrl: './overview-detail.component.html',
  styleUrls: ['./overview-detail.component.scss']
})
export class OverviewDetailComponent implements OnInit {
  overViewDetailServiceldata: Object;

  username: string;
  id: number;
  private sub: any;


  constructor(private overViewDetailService: OverviewService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {    
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.username = params['username'];
      this.id = params['id'];
      this.getOverViewDetailData();
    });
  }

  getOverViewDetailData() {
    this.overViewDetailService.getOverViewDetaildata(this.id).subscribe((res) => {
      this.overViewDetailServiceldata = res;
    })
  }

}
