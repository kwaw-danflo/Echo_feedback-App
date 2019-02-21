import { Component } from '@angular/core';

import { InfoPage } from '../info/info';
import { CampusPage } from '../campus/campus';
import { HomePage } from '../home/home';
import { TalkPage} from '../talk/talk';
import { AccountPage} from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = InfoPage;
  tab3Root = CampusPage;
  tab4Root = TalkPage;
  tab5Root = AccountPage;

  constructor() {

  }
}
