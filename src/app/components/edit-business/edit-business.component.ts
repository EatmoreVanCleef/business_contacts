import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-edit-business',
  templateUrl: './edit-business.component.html',
  styleUrls: ['./edit-business.component.css']
})
export class EditBusinessComponent implements OnInit {
   @Input('activeBusiness') activeBusiness:{};
   @Input('activeKey') activeKey:string;
   @Output() notify: EventEmitter<string> = new EventEmitter();

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
  }

  cancelEdit() {
    this.notify.emit('default');
  }
  updateBusiness() {
      this.firebaseService.updateBusiness(this.activeKey, this.activeBusiness);
      this.cancelEdit();
    }

}
