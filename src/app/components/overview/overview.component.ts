import { ActivatedRoute } from '@angular/router';
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
  count = 0;
  username: string;
  id: number;
  private sub: any;

  constructor(private overviewService: OverviewService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.username = params['username'];
      this.id = params['id'];
      this.getOverviewData();
    });

  }

  getOverviewData() {
    this.overviewService.getOverviewData().subscribe((res) => {
      this.overViewData = res;
    })
  }

}
