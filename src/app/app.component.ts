import { Component, OnInit } from '@angular/core';
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

} // end class
