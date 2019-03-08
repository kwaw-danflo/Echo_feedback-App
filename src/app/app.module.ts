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
import { PostPage} from '../pages/post/post';
import { infoDetailPage} from '../pages/infoDetail/infoDetail';
import { ReportPage} from '../pages/issueReport/issueReport';
import { infoChannelPage } from '../pages/infoChannel/infoChannel';
import { usefulLinksPage} from '../pages/usefulLinks/usefulLinks';
import { TradePage} from '../pages/trade/trade';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PostProvider } from '../providers/post/post';
import { InfoProvider } from '../providers/info/info';
import { AuthenticationProvider } from '../providers/authentication/authentication';


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
     infoDetailPage,
     infoChannelPage,
     usefulLinksPage,
     TradePage,
     ReportPage
     
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
       { component: ReportPage, name: 'issueReport', segment: 'issueReport' },
       { component: infoChannelPage, name: 'infoChannel', segment: 'infoChannel' },
       { component: usefulLinksPage, name: 'usefulLinks', segment: 'usefulLinks' },  
       { component: TradePage, name: 'Trade', segment: 'trade' },     
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
    infoDetailPage,
    infoChannelPage,
    usefulLinksPage,
    TradePage,
    ReportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostProvider,
    InfoProvider,
    AuthenticationProvider
    
  ]
})
export class AppModule {}
