

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';




@Component({
  selector: 'page-usefulContacts',
  templateUrl: 'usefulContacts.html',
})
export class usefulContactsPage {
postId;
post:any={} ;

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
    this.postId = this.navParams.get('id');
   
    
  }

 

 
  

}

