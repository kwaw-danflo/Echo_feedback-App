

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-infoDetail',
  templateUrl: 'infoDetail.html',
})
export class infoDetailPage {

info:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.info = this.navParams.get("info");
      console.log(this.info)
    
  }



 
  

}

