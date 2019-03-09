import { Component } from '@angular/core';
import { NavController,App, AlertController, LoadingController, Loading, Alert, ModalController } from 'ionic-angular';



@Component({
  selector: 'page-polls',
  templateUrl: 'polls.html'
})
export class PollsPage {
    
  polls:string= "Active";
  reponse=[];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController ) {

  }


replyPoll(){
  let alert = this.alertCtrl.create();
  alert.setTitle('Should the University invest in more shuttles?');

  alert.addInput({
    type: 'radio',
    label: 'yes, Definately',
    value: 'yes',
    checked: true
  });

  alert.addInput({
    type: 'radio',
    label: 'No, please',
    value: 'no'
  });

  alert.addInput({
    type: 'radio',
    label: 'Maybe, Not Sure',
    value: 'maybe'
  });
  alert.addButton('Cancel');
  alert.addButton({
    text: 'Okay',
    handler: data => {
      console.log('Checkbox data:', data);
      // this.testCheckboxOpen = false;
      // this.testCheckboxResult = data;
    }
  });
  alert.present();
}
}

    
  

  

