import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import{InfoProvider } from '../../providers/info/info';
import{infoDetailPage} from '../infoDetail/infoDetail'
@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  infoList: any;

  constructor(public navCtrl: NavController, public infoProvider:InfoProvider ) {
    
  }

  ionViewDidLoad(){
    this.infoProvider.getInfos().then(data =>{
      this.infoList = data;
    });
  }

  
  viewInfo(info) {
    this.navCtrl.push(infoDetailPage,{info:info});
     
  }

  
  

  

}
