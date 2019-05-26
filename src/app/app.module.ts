import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http'; 
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';


import { InfoPage } from '../pages/info/info';
import { CampusPage } from '../pages/campus/campus';
import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { TalkPage } from '../pages/talk/talk';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PostPage} from '../pages/post/post';
import { infoDetailPage} from '../pages/infoDetail/infoDetail';
import { ReportPage} from '../pages/IssueReport/IssueReport';
import { infoChannelPage } from '../pages/infoChannel/infoChannel';
import { usefulLinksPage} from '../pages/usefulLinks/usefulLinks';
import { TradePage} from '../pages/trade/trade';
import { BookmarksPage} from '../pages/bookmarks/bookmarks';
import { PollsPage} from '../pages/polls/polls';
import{usefulContactsPage} from '../pages/usefulContacts/usefulContacts'
import{ClubsPage} from '../pages/clubs/clubs';
import{AtoZPage} from '../pages/AtoZ/AtoZ'
import{clubsDetailPage} from '../pages/c&sDetail/c&sDetail';
import{LocationsPage} from '../pages/locations/locations'
import{MapPage} from '../pages/map/map'
import{WelcomePage} from '../pages/welcome/welcome'
import{NewsPage} from '../pages/news/news'
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PostProvider } from '../providers/post/post';
import { InfoProvider } from '../providers/info/info';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { AccountProvider } from '../providers/account/account';
import { IssueReportProvider } from '../providers/issue-report/issue-report';
import { CampusProvider } from '../providers/campus/campus';
import { PollProvider } from '../providers/poll/poll';



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
     BookmarksPage,
     PollsPage,
     usefulContactsPage,
     ReportPage,
     ClubsPage,
     AtoZPage,
     LocationsPage,
     clubsDetailPage,
     MapPage,
     WelcomePage,
     NewsPage,

     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      backButtonIcon: 'ios-arrow-back',
      backButtonText: '',
    }
  //     , {
  //     links: [
  //      { component: HomePage, name: 'Home', segment: 'home' },
  //      { component: AccountPage, name: 'Account', segment: 'account' },
  //      { component: InfoPage, name: 'Info', segment: 'info' },
  //      { component: CampusPage, name: 'Campus', segment: 'campus' },
  //      { component: TalkPage, name: 'Talk', segment: 'talk' },
  //      { component: LoginPage, name: 'Login', segment: 'login' },
  //      { component: SignupPage, name: 'Signup', segment: 'signup' },
  //      { component: ReportPage, name: 'issueReport', segment: 'issueReport' },
  //      { component: infoChannelPage, name: 'infoChannel', segment: 'infoChannel' },
  //      { component: usefulLinksPage, name: 'usefulLinks', segment: 'usefulLinks' },  
  //      { component: TradePage, name: 'Trade', segment: 'trade' },  
  //      { component: BookmarksPage, name: 'Bookmarks', segment: 'bookmarks' },   
  //      { component: PollsPage, name: 'Polls', segment: 'polls' },   
  //      { component: PostPage, name: 'Post', segment: 'post/:postId' },
  //      { component: usefulContactsPage, name: 'usefulContacts', segment: 'usefulContacts' },
  //      { component: infoDetailPage, name: 'infoDetail', segment: 'infoDetail/:infoId' },
  //      { component: WelcomePage, name: 'welcome', segment: 'welcome' }
       
  //    ]
  //  }
   ),
   IonicStorageModule.forRoot()
    
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
    BookmarksPage,
    PollsPage,
    ReportPage,
    ClubsPage,
    AtoZPage,
    LocationsPage,
    clubsDetailPage,
    MapPage,
    WelcomePage,
    NewsPage,
    usefulContactsPage,

  ],
  providers: [

    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostProvider,
    InfoProvider,
    AuthenticationProvider,
    AccountProvider,
    IssueReportProvider,
    CampusProvider,
    PollProvider,
    AndroidPermissions
    
  ]
})
export class AppModule {}
