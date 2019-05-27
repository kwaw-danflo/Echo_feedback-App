import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { PollProvider } from '../../providers/poll/poll';

import { DomSanitizer } from '@angular/platform-browser';






@Component({
  selector: 'page-polls',
  templateUrl: 'polls.html',
})

export class PollsPage {
  pollList: any;  
  polls:string= "Active";
  response:any;
  message:any;
  sanitizedMessage:any


  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public pollProvider: PollProvider, public domSanitizer: DomSanitizer) {
    
  }

  ionViewDidLoad(){
    this.pollProvider.getPolls().then(data =>{
      
      this.pollList = data;
      console.log(data)
    });
}



replyPoll(poll){
  
  let alert = this.alertCtrl.create();
  
  alert.setTitle(poll.topic);
  
  alert.addInput({
    type: 'radio',
    label: 'Yes',
    value: '0'
  });

  alert.addInput({
    type: 'radio',
    label: 'No',
    value: '1'
  });

  alert.addInput({
    type: 'radio',
    label: 'Maybe',
    value: '2'
  });
  alert.addButton('Cancel');
  alert.addButton({
    text: 'Okay',
    handler: input_data => {
      console.log('checkbox_data:', input_data);
      // this.testCheckboxOpen = false;
      // this.testCheckboxResult = data;

      
      // {poll.choices[input_data].votes:
      //  let vote = poll.choices[input_data]
             let accum;
             accum = poll.choices[input_data].votes + 1

       poll.choices[input_data].votes= accum;
       console.log(poll.choices)
     let response={'choices': poll.choices}
      this.pollProvider.postChoice(poll.id, response)
      
    }

   


  });

  // this.pollProvider.postChoice(pollID, )
  alert.present();
 
}

pollResult(result){  
  
  this.message = '<div><ion-list>' +
  '<ion-item>'+
  '<ion-label>Yes: ' +  result.choices[0].votes + '</ion-label>'+
  '</ion-item>' +
  '<ion-item>'+
  '<ion-label>No: ' +  result.choices[1].votes + '</ion-label>'+
  '</ion-item>' +
  '<ion-item>'+
  '<ion-label>Maybe: ' +  result.choices[2].votes + '</ion-label>'+
  '</ion-item>'  + 
'</ion-list></div>'     

this.sanitizedMessage = this.domSanitizer.bypassSecurityTrustHtml(this.message)


  let alert = this.alertCtrl.create()
  
  alert.setTitle(result.topic);
  alert.setMessage(this.sanitizedMessage)
  alert.addButton('Okay')
    
  alert.present();
  


  }
 





}

    
  

  

