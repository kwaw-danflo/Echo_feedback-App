

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
})
export class LocationsPage {

  location: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,) {
    this.location = this.navParams.get("location");
  }

 
 
  

}

