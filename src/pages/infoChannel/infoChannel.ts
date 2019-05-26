

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



// @IonicPage({
//   name:'infoChannelPage'
// })
@Component({
  selector: 'page-infoChannel',
  templateUrl: 'infoChannel.html',
})
export class infoChannelPage {
postId;
post:any={} ;

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
    this.postId = this.navParams.get('id');
   
    
  }

 

 
  

}

