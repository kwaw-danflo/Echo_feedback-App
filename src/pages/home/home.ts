import { Component,  ElementRef } from '@angular/core';
import { NavController,App } from 'ionic-angular';


import { AccountPage } from '../account/account';
import { NewsPage } from '../news/news';
import { InfoPage } from '../info/info';
import { CampusPage } from '../campus/campus';
import { TalkPage } from '../talk/talk';
import { AccountProvider } from '../../providers/account/account';
import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user= localStorage.getItem('user')
  today= Date.now();
  // userID=localStorage.getItem('userID')
  // userData: any = {};

  constructor(public navCtrl: NavController, public app:App, private eleRef: ElementRef, private accountProvider: AccountProvider) {
    

}

// ionViewWillEnter(){
//   this.accountProvider.getUserData(this.userID).then(data => {
//     this.userData = data;

//           localStorage.setItem('user', this.userData.firstName)
//   })
// }

goNews(){
  document.getElementById('tab-t0-3').click();
  }
  goCampus(){

 document.getElementById('tab-t0-1').click();


  }
  goTalk(){
    document.getElementById('tab-t0-2').click();
  }
  goInfo(){
    document.getElementById('tab-t0-4').click();
 
  }
  goAccount(){
    this.navCtrl.push(AccountPage);
  }

}

