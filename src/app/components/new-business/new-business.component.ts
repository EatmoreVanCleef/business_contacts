import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-new-business',
  templateUrl: './new-business.component.html',
  styleUrls: ['./new-business.component.css']
})
export class NewBusinessComponent implements OnInit {
  @ViewChild('newBusinessForm') newBusinessForm:NgForm;
  @Input('categories') categories;
  @Output() notify: EventEmitter<string> = new EventEmitter();

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
  }

  addBusiness() {
    const created_at = new Date().toString();
    const newBusiness = {
      category: this.newBusinessForm.value.category,
      city: this.newBusinessForm.value.city,
      company: this.newBusinessForm.value.company,
      description: this.newBusinessForm.value.description,
      email: this.newBusinessForm.value.email,
      phone: this.newBusinessForm.value.phone,
      state: this.newBusinessForm.value.state,
      street_address: this.newBusinessForm.value.street_address,
      years_in_business: this.newBusinessForm.value.years_in_business,
      zipcode: this.newBusinessForm.value.zipcode,
      created_at: created_at
    }
    this.firebaseService.addBusiness(newBusiness);
    this.newBusinessForm.reset();
    this.notify.emit('default');

  }

}
