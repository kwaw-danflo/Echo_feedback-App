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
    'id':'banks',
    'icon':'cash',
    'title':'Banks and ATMs',
    'class' :'',
    
  
  },
  {
    'id':'departments',
    'icon':'home',
    'title':'Departments',
    'class':''
  },
  {
    'id':'eateries',
    'icon':'restaurant',
    'title':'Eateries & Vendors',
    'class':''
  },

  {
    'id':'halls',
    'icon':'home',
    'title':'Halls of Residence',
    'class':''
  },
  {
    'id':'hair',
    'icon':'home',
    'title':'Hair & Beauty',
    'class':''
  },
  {
    'id':'health',
    'icon':'medkit',
    'title':'Health Care',
    'class':''
  },
  {
    'id':'worship',
    'icon':'home',
    'title':'Places of Worship',
    'class':''
    
  },
  {
    'id':'sports',
    'icon':'basketball',
    'title':'Sports & Recreation',
    'class':''
    
  },
  {
    'id':'supermarkets',
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

 goCategory(id){
  document.getElementById(id).click()
 }

}
