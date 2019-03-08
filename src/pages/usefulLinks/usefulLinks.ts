

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




@Component({
  selector: 'page-usefulLinks',
  templateUrl: 'usefulLinks.html',
})
export class usefulLinksPage {
postId;
post:any={} ;

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
    this.postId = this.navParams.get('id');
   
    
  }

 

 
  

}

