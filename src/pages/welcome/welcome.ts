import { Component } from '@angular/core';
import { NavController,App, AlertController, LoadingController, Loading, Platform } from 'ionic-angular';
import{SignupPage} from '../signup/signup';
import {TabsPage} from '../tabs/tabs';


import { AuthenticationProvider } from '../../providers/authentication/authentication';


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

    
  constructor(
    public navCtrl: NavController,
    private app: App, 
    private auth: AuthenticationProvider, 
    private alertControl:AlertController,
    private loadingControl: LoadingController
    
    ) {}



  

}

