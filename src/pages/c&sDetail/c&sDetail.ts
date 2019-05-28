

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




@Component({
 selector: 'page-clubsDetail',
 templateUrl: 'c&sDetail.html',
})
export class clubsDetailPage {
club

 constructor(public navCtrl: NavController, public navParams: NavParams,) {

   this.club = this.navParams.get("club");
   console.log(this.club)
  
 }


}



