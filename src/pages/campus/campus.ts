import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
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
  lectureVenues: any
  banks: any
  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private campusProvider: CampusProvider) {

  }
  childPages=[{
    'id':1,
    'icon':'cash',
    'title':'Banks and ATMs',
    'data' : [
      {
        name: 'Cal Bank',
        coordinates: '5.673305,-0.2448345'
      },
      {
        name: 'Stanbic Bank',
        coordinates: '5.6426308,-0.1879159'
      },
      {
        name: 'Standard Chartered Bank',
        coordinates: '5.6524315,-0.2062711'
      }
    ]
    
  
  },
  {
    'id':2,
    'icon':'home',
    'title':'Departments',
    'data' : [
      {
        name: 'Computer Science',
        coordinates: '5.6545341,-0.1862821'
      },
      {
        name: 'Economics',
        coordinates: '5.6510632,-0.1896379'
      },
      {
        name: 'Political Science',
        coordinates: '5.6546539,-0.188569'
      }
    ]
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
    'data': [
      {
        name: 'Commonwealth Hall',
        coordinates: '5.6506381,-0.1957423'
      },
      {
        name: 'Elizabeth Frances Sey Hall',
        coordinates: '5.6360716,-0.1895923'
      },
      {
        name: 'TF Hostels',
        coordinates: '5.6630965,-0.1819153'
      }
    ]
  },
  {
    'id':5,
    'icon':'medkit',
    'title':'Health Care',
    'data':[
      {
        name: 'UG School Clinic',
        coordinates: '5.6478942,-0.1889854'
      },
      {
        name: 'UG Main Hospital',
        coordinates: '5.6483935,-0.1914959'
      }
    ]
  },
  {
    'id':6,
    'icon':'basketball',
    'title':'Sports & Recreation',
    'data':[
      {
        name: 'Jean Nelson Basketball Court',
        coordinates: '5.6630954,-0.2147463'
      }
    ]
    
  },
  {
    'id':7,
    'icon':'cash',
    'title':'Supermarkets',
    'data':[
      {
        name: 'All Needs Supermarket',
        coordinates: '5.6429658,-0.1883384'
      }
    ]
    
  }

  
]
ionViewDidLoad(){
  this.lectureVenues = [
    {
    name: 'Jones Quartey Building',
    coordinates: '5.6523044,-0.1831866'
  }
]
  this.banks = [
    {
      name: 'Cal Bank',
      coordinates: '5.673305,-0.2448345'
    },
    {
      name: 'Cal Bank',
      coordinates: '5.673305,-0.2448345'
    }
  ]
}

getCategory(title) {
  this.navCtrl.push(AtoZPage,{title: title});
}


openModal(data){
  let modal = this.modalCtrl.create('ModalPage',{data: data})
  modal.present();
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
