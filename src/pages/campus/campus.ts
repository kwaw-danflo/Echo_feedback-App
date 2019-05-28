import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{MapPage} from '../map/map'
import{ClubsPage} from '../clubs/clubs'
import{AtoZPage} from '../AtoZ/AtoZ'

import { CampusProvider } from '../../providers/campus/campus';
import { getPluralCategory } from '@angular/common/src/i18n/localization';
@Component({
 selector: 'page-campus',
 templateUrl: 'campus.html'
})
export class CampusPage {
  constructor(public navCtrl: NavController, private campusProvider: CampusProvider) {

 }
 childPages=[{
   'id':1,
   'icon':'cash',
   'title':'Banks and ATMs',
   'class' :'',
  
  },
 {
   'id':2,
   'icon':'home',
   'title':'Departments',
   'class':''
 },
 {
   'id':3,
   'icon':'restaurant',
   'title':'Eateries and Vendors',
   'class':''
 },

 {
   'id':4,
   'icon':'home',
   'title':'Halls of Residence',
   'class':''
 },

 {
   'id':5,
   'icon':'medkit',
   'title':'Health Care',
   'class':''
 },

 {
   'id':6,
   'icon':'basketball',
   'title':'Sports and Recreation',
   'class':''
  
 },
 {
   'id':7,
   'icon':'cash',
   'title':'Supermarkets',
   'class':''
  
 }

 ]

getCategory(title) {
 this.navCtrl.push(AtoZPage,{title: title});
}




goClubs(){
 this.navCtrl.push(ClubsPage)
}
goAtoZ(){
 this.navCtrl.push(AtoZPage)
}
goMap(){
 this.navCtrl.push(MapPage)
}

}


