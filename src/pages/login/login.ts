import { Component } from '@angular/core';
import { NavController,App, AlertController, LoadingController, Loading, Alert } from 'ionic-angular';
import{SignupPage} from '../signup/signup';
import {TabsPage} from '../tabs/tabs';


import { AuthenticationProvider } from '../../providers/authentication/authentication';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: Loading;
  user = {email:'', password:''};
  data:any;

  constructor(
    public navCtrl: NavController,
    private app: App, 
    private auth: AuthenticationProvider, 
    private alertControl:AlertController,
    private loadingControl: LoadingController
    
    ) {}

    login(){
      this.showLoading();
      this.auth.login(this.user).then (result => {
          this.loading.dismiss();
          this.data = result;
          localStorage.setItem('token', this.data.id);
          

          this.navCtrl.setRoot(TabsPage);
      }, (err) =>{
        this.showError("Incorrect Login Details");
        console.log(err)
        
      })
        
    
    
    
    }


    showLoading() {
      this.loading = this.loadingControl.create({
        content: 'Please wait...',
        dismissOnPageChange: true
      });
      this.loading.present();
    }
    
    showError(text) {
      this.loading.dismiss();
    
      let alert = this.alertControl.create({
        title: 'Fail',
        subTitle: text,
        buttons: ['OK']
      });
      alert.present();
    }
    
    
    goSignup(){
      this.app.getRootNav().push(SignupPage)
    }

    
  

  

}

