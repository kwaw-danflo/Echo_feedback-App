import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import {ReportPage} from '../IssueReport/IssueReport';
import {infoChannelPage} from '../infoChannel/infoChannel';
import {usefulLinksPage} from '../usefulLinks/usefulLinks';
import {TradePage} from '../trade/trade';
import {BookmarksPage} from '../bookmarks/bookmarks';
import{PollsPage} from '../polls/polls'

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  
  
  constructor(public navCtrl: NavController) {

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
    'class':''
    
  },

]


routeMe(child){

this.navCtrl.push(child.class)
 
}

logout(){
  
}
}
