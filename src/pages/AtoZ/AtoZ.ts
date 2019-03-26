import { Component } from '@angular/core';
import {App, NavController,IonicPage,LoadingController, ToastController} from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account';
import{LocationsPage} from '../../pages/locations/locations'


import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-AtoZ',
  templateUrl: 'AtoZ.html'
})
export class AtoZPage {
  userData: any = {};
  loading: any;
  userid;
 
  
  constructor(public app: App,public navCtrl: NavController) {
   
  }

 routeMe(){
   this.navCtrl.push(LocationsPage);
 }


}
