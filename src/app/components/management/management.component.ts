import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  private step: number = 0;
  private page:string = "About";

  constructor() { }

  ngOnInit() {
  }

  next() {
    if (this.step < 3) {
      this.step = this.step + 1;
    }
  }

  previous() {
    if (this.step > 0) {
      this.step = this.step - 1;
    }
  }

  submit() {
    console.log("Submitted");
  }
}
