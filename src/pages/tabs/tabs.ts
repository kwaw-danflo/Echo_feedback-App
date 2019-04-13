import { Component } from '@angular/core';

import { InfoPage } from '../info/info';
import { CampusPage } from '../campus/campus';
import { HomePage } from '../home/home';
import { TalkPage} from '../talk/talk';
import { NewsPage} from '../news/news';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CampusPage;
  tab3Root = TalkPage;
  tab4Root = NewsPage;
  tab5Root = InfoPage;

  constructor(public navCtrl: NavController) {
    if(!localStorage.getItem('token')) {
      navCtrl.setRoot(LoginPage);
  }

}


}