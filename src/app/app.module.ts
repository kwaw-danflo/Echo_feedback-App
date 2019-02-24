import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 

import { InfoPage } from '../pages/info/info';
import { CampusPage } from '../pages/campus/campus';
import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { TalkPage } from '../pages/talk/talk';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import{PostPage} from '../pages/post/post';
import{infoDetailPage} from '../pages/infoDetail/infoDetail'
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PostProvider } from '../providers/post/post';
import { InfoProvider } from '../providers/info/info';


@NgModule({
  declarations: [
    MyApp,
    InfoPage,
    CampusPage,
    HomePage,
    TalkPage,
    AccountPage,
    TabsPage,
     LoginPage,
     SignupPage,
     PostPage,
     infoDetailPage
     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      
    }
      , {
      links: [
       { component: HomePage, name: 'Home', segment: 'home' },
       { component: AccountPage, name: 'Account', segment: 'account' },
       { component: InfoPage, name: 'Info', segment: 'info' },
       { component: CampusPage, name: 'Campus', segment: 'campus' },
       { component: TalkPage, name: 'Talk', segment: 'talk' },
       { component: LoginPage, name: 'Login', segment: 'login' },
       { component: SignupPage, name: 'Signup', segment: 'signup' },
       { component: PostPage, name: 'Post', segment: 'post/:postId' },
       { component: PostPage, name: 'infoDetail', segment: 'infoDetail/:infoId' }
       
     ]
   }
   )
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InfoPage,
    CampusPage,
    HomePage,
    TalkPage,
    AccountPage,
    TabsPage,
    LoginPage,
    SignupPage ,
    PostPage,
    infoDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostProvider,
    InfoProvider
    
  ]
})
export class AppModule {}
