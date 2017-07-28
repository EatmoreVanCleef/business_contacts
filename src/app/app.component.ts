import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FirebaseService } from './services/firebase.service';
import { Business } from './models/business.model';
import { Category } from './models/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ FirebaseService ]
})
export class AppComponent implements OnInit {
  @ViewChild('newBusinessForm') newBusinessForm:NgForm;
  businesses:Business[];
  categories:Category[];
  appState:string;
  activeKey:string;

  constructor(private firebaseService:FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getBusinesses().subscribe(businesses => {
      this.businesses = businesses;
    });
    this.firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

  changeState(state, key) {
    console.log('Changing State to: ' + state);
    if (key) {
      console.log('Changing activeKey to: ' + key);
      this.activeKey = key;
    }
    this.appState = state;
    console.log(this.appState, this.activeKey)
  }

  filterCategory(category) {
    console.log(category);
    this.firebaseService.getBusinesses(category).subscribe(businesses => {
      this.businesses = businesses;
    });
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
    this.changeState('default', null);
  }

} // end class
