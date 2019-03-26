import { Component } from '@angular/core';
import {App, NavController,IonicPage,LoadingController, ToastController} from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account';


import { clubsDetailPage  } from '../../pages/c&sDetail/c&sDetail';

@IonicPage()
@Component({
  selector: 'page-clubs',
  templateUrl: 'clubs.html'
})
export class ClubsPage {
  userData: any = {};
  loading: any;
  userid;
 
  
  constructor(public app: App,public navCtrl: NavController) {
   
  }

  viewClub(){
     this.navCtrl.push(clubsDetailPage)
  }
 


}
