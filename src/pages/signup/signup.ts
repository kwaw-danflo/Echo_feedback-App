import { Component } from '@angular/core';
import { NavController,App, AlertController } from 'ionic-angular';
import{LoginPage} from '../login/login'


import { AuthenticationProvider } from '../../providers/authentication/authentication';


import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  registrationSuccess = false;
<<<<<<< HEAD
  regData = {email:'', studentID:'',firstName:'', lastName:'', password: ''};
  confirm = {password:''}
=======
  regData = {email:'', studentID:'',firstName:'', lastName:'', password:'', confirmPassword:''};
>>>>>>> 483b1b14d39ad1081585658420ddfd3e436d399f

  constructor(
    public navCtrl: NavController, 
    private app:App, 
    private auth: AuthenticationProvider, 
    private alertControl: AlertController
    ) {
   
<<<<<<< HEAD
  }

  register(){
    if (this.regData.password != this.confirm.password) {
      this.showPopup("Error", 'The passwords do not match.');
    } else {
      this.auth.register(this.regData).then(success => {
        if (success) {
          this.registrationSuccess = true;
          this.showPopup("Success", "Account created.");
        } else {
          this.showPopup("Error", "Problem creating account.");
        }
      },
        error => {
          this.showPopup("Error", error);
        });
    }
=======
>>>>>>> 483b1b14d39ad1081585658420ddfd3e436d399f
  }
  
  
  showPopup(title, text) {
    let alert = this.alertControl.create({
      title : title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.registrationSuccess) {
              this.navCtrl.push(LoginPage);
            }
          }
        }
      ]
  
  
    });
    alert.present();
  }
  goLogin(){
    this.app.getRootNav().push(LoginPage)
  }
  
  

<<<<<<< HEAD

=======
  register(){
    if (this.regData.password != this.regData.confirmPassword) {
      this.showPopup("Error", 'The passwords do not match.');
    } else {
      this.auth.register(this.regData).then(success => {
        if (success) {
          this.registrationSuccess = true;
          this.showPopup("Success", "Account created.");
        } else {
          this.showPopup("Error", "Problem creating account.");
        }
      },
        error => {
          this.showPopup("Error", error);
        });
    }
  }
  
  
  showPopup(title, text) {
    let alert = this.alertControl.create({
      title : title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.registrationSuccess) {
              this.navCtrl.push(LoginPage);
            }
          }
        }
      ]
  
  
    });
    alert.present();
  }
  goLogin(){
    this.app.getRootNav().push(LoginPage)
  }
  
  


>>>>>>> 483b1b14d39ad1081585658420ddfd3e436d399f
}
