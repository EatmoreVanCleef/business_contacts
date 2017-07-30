import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FirebaseService } from './services/firebase.service';
import { Business } from './models/business.model';
import { Category } from './models/category.model';
import { BusinessDetailsComponent } from './components/business-details/business-details.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ FirebaseService ],
})
export class AppComponent implements OnInit {
  businesses:Business[];
  categories:Category[];
  appState:string;
  activeKey:string;
  activeBusiness:Business;

  constructor(private firebaseService:FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getBusinesses().subscribe(businesses => {
      this.businesses = businesses;
    });
    this.firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

  onNotify(message:string) {
      this.changeState(message, null);
  }

  changeState(state, key) {
    // console.log('Changing State to: ' + state);
    if (key) {
      // console.log('Changing activeKey to: ' + key);
      this.activeKey = key;
    }
    this.appState = state;
    console.log(this.appState, this.activeKey);
  }

  filterCategory(category) {
    console.log(category);
    this.firebaseService.getBusinesses(category).subscribe(businesses => {
      this.businesses = businesses;
    });
  }

  showEdit(business) {
    this.changeState('edit', business.$key);
    this.activeBusiness = {
      // $key: business.$key, /* trying to update $key will result in firebase error */
      category: business.category,
      city: business.city,
      company: business.company,
      description: business.description,
      email: business.email,
      phone: business.phone,
      state: business.state,
      street_address: business.street_address,
      years_in_business: business.years_in_business,
      zipcode: business.zipcode,
    }
  }


  deleteBusiness(key) {
    this.firebaseService.deleteBusiness(key);
  }
} // end class
