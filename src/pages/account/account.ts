import { Component } from '@angular/core';
import {App, NavController,IonicPage,LoadingController, ToastController} from 'ionic-angular';
import {ReportPage} from '../IssueReport/IssueReport';
import {infoChannelPage} from '../infoChannel/infoChannel';
import {usefulLinksPage} from '../usefulLinks/usefulLinks';
import {TradePage} from '../trade/trade';
import {BookmarksPage} from '../bookmarks/bookmarks';
import{PollsPage} from '../polls/polls'
import{usefulContactsPage} from '../usefulContacts/usefulContacts';
import { AccountProvider } from '../../providers/account/account';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  userData: any = {};
  loading: any;
  userid;
 
  
  constructor(public app: App,public navCtrl: NavController, private accountProvider: AccountProvider,
                private toastControl: ToastController) {
    this.userid = localStorage.getItem('userID');
    this.getUserData(this.userid);
  }

  getUserData(id) {
    this.accountProvider.getUserData(id).then(data => {
      this.userData = data;
      localStorage.setItem('user', this.userData.firstName)
      console.log(data)
    });
  }


  logout(){
    this.accountProvider.logout().then(result =>{
      let nav = this.app.getRootNav();
      nav.setRoot(LoginPage);
      this.presentToast('Logged Out.')
    }, error =>{
  
      this.presentToast(error);
    })
  }

  childPages=[{
    'id':1,
    'icon':'bookmark',
    'title':'Bookmarks',
    'class' :BookmarksPage
  },
  {
    'id':2,
    'icon':'notifications',
    'title':'Information Channels',
    'class':infoChannelPage
  },
  {
    'id':3,
    'icon':'information-circle',
    'title':'Report an Issue',
    'class':ReportPage
  },

  {
    'id':4,
    'icon':'stats',
    'title':'Polls & Surveys',
    'class':PollsPage
  },
  {
    'id':5,
    'icon':'cash',
    'title':'Uni Trade Account',
    'class':TradePage
  },
  {
    'id':6,
    'icon':'laptop',
    'title':'Useful Links',
    'class':usefulLinksPage
  },
  {
    'id':7,
    'icon':'call',
    'title':'Useful Contacts',
    'class': usefulContactsPage
    
  },
]
routeMe(child){

this.navCtrl.push(child.class)
 
}




presentToast(msg) {
  let toast = this.toastControl.create({
    message: msg,
    duration: 3000,
    position: 'bottom'
    
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
}
