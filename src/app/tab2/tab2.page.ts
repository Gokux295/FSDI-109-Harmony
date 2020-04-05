import { Component } from '@angular/core';
import { Message } from '../models/message'; 
import { DataService } from '../services/data.service';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  message: Message = new Message();
  constructor( private shared: SharedService , private data: DataService ) {}

  onPost(){
      this.message.from = this.shared.userName;
      this.message.createdOn = new Date();

      this.data.saveMessage(this.message);

//clear form


  this.message = new Message();
  }
}
