import { Component } from '@angular/core';
import {App, NavController,IonicPage,LoadingController, ToastController, NavParams} from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account';
import{LocationsPage} from '../../pages/locations/locations'


import { LoginPage } from '../login/login';
import { CampusProvider } from '../../providers/campus/campus';

// @IonicPage()
@Component({
  selector: 'page-AtoZ',
  templateUrl: 'AtoZ.html'
})
export class AtoZPage {
  
  locationList: any;
 
 category: string = '';
  constructor(public app: App,public navCtrl: NavController, public navParams: NavParams, public campusProvider: CampusProvider) {
   this.category = this.navParams.get("title");
   this.filterLocation();
   
  }
  
  filterLocation(){
    this.campusProvider.filterLocation(this.category).then(data => {
      this.locationList = data;
      console.log(data);
    });
   
  }

 routeMe(location){
   this.navCtrl.push(LocationsPage,{location:location});
 }


}
