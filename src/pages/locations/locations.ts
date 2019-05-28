

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';




@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
})
export class LocationsPage {

  location: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public launchNavigator: LaunchNavigator) {
    this.location = this.navParams.get("location");
  }

  viewLocation(){
    let app = this.launchNavigator.APP.GOOGLE_MAPS
    var coordinates = '5.654957, -0.185122'

    this.launchNavigator.navigate(coordinates, {app:app});
  }
 
 
  

}


