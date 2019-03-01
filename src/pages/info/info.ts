import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import{InfoProvider } from '../../providers/info/info';
import{infoDetailPage} from '../infoDetail/infoDetail'
@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  infoList;

  constructor(public navCtrl: NavController, public infoProvider:InfoProvider ) {
    this.getinfo();
  }

  
  viewInfo(id) {
    this.navCtrl.push(infoDetailPage,{id:id});
     
  }

  getinfo(){
    this.infoProvider.getinfos().then(data =>{
      this.infoList = data;

      
    })
  }

  

}
