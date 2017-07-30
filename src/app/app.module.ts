import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { EditBusinessComponent } from './components/edit-business/edit-business.component';
import { NewBusinessComponent } from './components/new-business/new-business.component';
import { BusinessDetailsComponent } from './components/business-details/business-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EditBusinessComponent,
    NewBusinessComponent,
    BusinessDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
