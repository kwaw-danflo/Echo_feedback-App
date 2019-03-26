import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ClubsPage} from '../clubs/clubs'
import{AtoZPage} from '../AtoZ/AtoZ'
@Component({
  selector: 'page-campus',
  templateUrl: 'campus.html'
})
export class CampusPage {

  constructor(public navCtrl: NavController) {

  }
  childPages=[{
    'id':1,
    'icon':'cash',
    'title':'Banks & ATMs',
    'class' :''
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
    'title':'Eateries & Vendors',
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
    'icon':'home',
    'title':'Hair & Beauty',
    'class':''
  },
  {
    'id':6,
    'icon':'medkit',
    'title':'Health Care',
    'class':''
  },
  {
    'id':7,
    'icon':'home',
    'title':'Places of Worship',
    'class':''
    
  },
  {
    'id':8,
    'icon':'basketball',
    'title':'Sports & Recreation',
    'class':''
    
  },
  {
    'id':9,
    'icon':'cash',
    'title':'Supermarkets',
    'class':''
    
  }
]

goClubs(){
  this.navCtrl.push(ClubsPage)
 }
 goAtoZ(){
  this.navCtrl.push(AtoZPage)
 }

}
