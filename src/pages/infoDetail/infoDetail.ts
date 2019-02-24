

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InfoProvider  } from '../../providers/info/info';


@Component({
  selector: 'page-infoDetail',
  templateUrl: 'infoDetail.html',
})
export class infoDetailPage {
infoId;
info:any={} ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public infoProvider: InfoProvider) {
    this.infoId = this.navParams.get('id');
    this.getInfo(this.infoId);
    
  }

  getInfo(id){
    this.infoProvider.getinfo(id).then(data =>{
      this.info = data;
      console.log(data);
    })
  }

 
  

}

