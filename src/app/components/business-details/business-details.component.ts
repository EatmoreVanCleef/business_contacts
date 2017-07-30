import { Component, OnInit, Input } from '@angular/core';
import { Business } from '../../models/business.model';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.css']
})
export class BusinessDetailsComponent implements OnInit {
   @Input('businesses') businesses:Business[];
   @Input('activeKey') activeKey:string;

  constructor() { }

  ngOnInit() {
    console.log(this.activeKey);
    console.log(this.businesses);
  }

}
