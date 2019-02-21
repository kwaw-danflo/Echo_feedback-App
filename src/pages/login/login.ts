import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import{SignupPage} from '../signup/signup'
import {TabsPage} from '../tabs/tabs'


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,private app: App) {

  }

  user={}
login(){
console.log(this.user)
this.app.getRootNav().push(TabsPage)
}

goSignup(){
  this.app.getRootNav().push(SignupPage)
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
