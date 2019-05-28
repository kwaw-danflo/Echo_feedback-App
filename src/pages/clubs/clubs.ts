import { Component } from '@angular/core';
import {App, NavController,IonicPage,LoadingController, ToastController} from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account';


import { clubsDetailPage  } from '../../pages/c&sDetail/c&sDetail';

// @IonicPage()
@Component({
 selector: 'page-clubs',
 templateUrl: 'clubs.html'
})
export class ClubsPage {
 userData: any = {};
 loading: any;
 userid;
  childPages=[{
   'id':1,
   'name':'Student Representative Council',
   'description':'University of Ghanas SRC concerns itself with all aspects of students welfare within the University. In addition to that, it coordinates the activities of academic, cultural, religious, political and recreational clubs and societies. It also links the students with external organizations. Immediately an individual becomes a registered student of the University of Ghana, that person automatically becomes a member of the SRC. Therefore, all students are eligible and encouraged to participate in one or more of the various programs and events of the SRC. University of Ghana’s SRC is a constituent organization of the National Union of Ghana Students, which coordinates all aspects of students activities nationally and internationally. The University Council Boards Committees that deal with Students welfare have slots for SRC representation.',
   'imageLink' :'https://citinewsroom.com/wp-content/uploads/2018/10/shuttle-rstc.jpeg',
  
  },
 {
   'id':2,
   'name':'University of Ghana Debate Society',
   'description':'The University of Ghana Debate Society comprises of students of the university who share a common passion in debating and public speaking. The aim of the society is to promote the use of debate and dialogue as a tool for finding solutions to critical issues facing the society and to promote civil participation in our respective communities. In order to ensure efficiency and sustainability of our activities, UGDS was placed under the direct supervision of the University of Ghana Sports Directorate. For the past five years, the Sports Directorate has supported and continues to support and facilitate intellectual discourses among students of the university. Join us each and every Monday and Friday at 8pm at Alex Kwapong Hall Room 4001.',
   'imageLink':'https://hypercitigh.com/wp-content/uploads/2019/01/University-of-Ghana-Debate-Society.jpg'
 },
 {
   'id':3,
   'name':'Model United Nations',
   'description':'University of Ghana Model United Nations seeks to explore the world of international diplomacy through the structured debates model on the United Nations. This club teaches its members the skills of diplomacy, as well as offers a platform to improve public speaking and debating skills. Additionally, UG Model UN encourages people to work together to figure out solutions to the worlds problems.',
   'imageLink':'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/1200px-Flag_of_the_United_Nations.svg.png'
 },

 {
   'id':4,
   'name':'UG Muslim Students Association',
   'description':'UGMSA is an association of Muslims at University of Ghana, to gather, pray and share the Islamic faith.',
   'imageLink':'http://thetodaysmuslim.com/wp-content/uploads/2018/03/6BA815AD-F377-4C24-82B8-C6858E2E3524-1060x650.jpeg'
 },
] 
  constructor(public app: App,public navCtrl: NavController) {
 
 }

 viewClub(club){
 
    this.navCtrl.push(clubsDetailPage,{club: club})
 }


}


