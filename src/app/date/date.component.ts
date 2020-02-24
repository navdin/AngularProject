import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  msg;
  arr;
  @Input('name') uname;
  a = 5;
  constructor() {
    this.arr=[1,2,3,4,5];
    this.msg=this.uname;
  }

  ngOnInit() {
    this.msg=this.uname;
  }

}
