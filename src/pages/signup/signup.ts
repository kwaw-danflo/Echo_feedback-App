import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import{LoginPage} from '../login/login'
import {TabsPage} from '../tabs/tabs'

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController, private app:App) {

  }

  regData={}
register(){
console.log(this.regData)
this.app.getRootNav().push(TabsPage)
}
goLogin(){
  this.app.getRootNav().push(LoginPage)
}

// ionViewWillEnter() {
//   let tabs = document.querySelectorAll('.tabbar');
//   if ( tabs !== null ) {
//     Object.keys(tabs).map((key) => {
//       tabs[ key ].style.transform = 'translateY(56px)';
//     });
//   } // end if
// }

// ionViewDidLeave() {
//   let tabs = document.querySelectorAll('.tabbar');
//   if ( tabs !== null ) {
//     Object.keys(tabs).map((key) => {
//       tabs[ key ].style.transform = 'translateY(0)';
//     });
//   } // end if
// }
}
