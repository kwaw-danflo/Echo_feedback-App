import { Component, ViewChild} from '@angular/core';
import { NavController,App, AlertController, LoadingController, Loading, Platform, NavControllerBase, Slides } from 'ionic-angular';
import{LoginPage} from '../login/login';
import{SignupPage} from '../signup/signup';
import {TabsPage} from '../tabs/tabs';



import { AuthenticationProvider } from '../../providers/authentication/authentication';


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})



export class WelcomePage {

  @ViewChild(Slides) slides: Slides;  

  constructor(
    public navCtrl: NavController,
    private app: App, 
    private auth: AuthenticationProvider, 
    private alertControl:AlertController,
    private loadingControl: LoadingController
    
    ) {}


goLogin(){
  this.app.getRootNav().push(LoginPage)
}

next() {
  this.slides.slideNext();
}

goSignUp(){
  this.navCtrl.push(SignupPage);
}

}

