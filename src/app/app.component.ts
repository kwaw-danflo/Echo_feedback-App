import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any= WelcomePage;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage:Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault(); 
      splashScreen.hide();

      this.storage.get('introShown').then((result) => {
        if (result==true) {
          ;
          this.rootPage=LoginPage
        }
  
        else{
         this.storage.set('introShown', true)
        }
      
       })
    });


  }

  // ionViewWillEnter(){

  //   }
}
