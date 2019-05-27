

import { Component } from '@angular/core';
import { NavController,ToastController,AlertController,Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import * as JsSIP from 'jssip'
@Component({
  selector: 'page-talk',
  templateUrl: 'talk.html'
})

export class TalkPage {
  // @ViewChild('audioSrc') audio :ElementRef

socket
configuration
ua
eventHandlers
options
session: any
Remoteaudio
answer
decline
outgoingAudio
incomingAudio
searchTerm: string = "";
searchControl: FormControl;
searching: any = false;
newArray=[]

contacts= []

  constructor(public navCtrl: NavController, private toastCtrl: ToastController,  public alertCtrl: AlertController, private storage: Storage,public events: Events) {
    this.searchControl = new FormControl();

    
    // events.subscribe('contact:added',() => {
    //   // user and time are the same arguments passed in `events.publish(user, time)`
    //   this.getContacts()
    // });
  }

//SIP 100 is Virgo's Laptop
    //SIP 200 is Prince's Phone
    //SIP 300 is Paschal's Phone
    //SIP 400 is Danflo's Laptop




  ionViewDidEnter(){
    this.getContacts()
    
    this.setFilteredItems("");

    this.searchControl.valueChanges.debounceTime(700)
      .subscribe(search => {
        this.searching = false;
        this.setFilteredItems(search);
      });

    var text=document.getElementById('text')
    var callName=document.getElementById('callName')
    var phoneStatus=document.getElementById('phoneStatus')
    // var Remoteaudio=document.getElementById('remoteAudio')  as HTMLElement
    this.outgoingAudio=document.getElementById('outgoing')  as HTMLElement
    this.answer=document.getElementById('answer')  as HTMLElement
    this.decline=document.getElementById('terminate')
    this.socket = new JsSIP.WebSocketInterface('wss://uniapp.ml:8089/ws');
    this.configuration = {
      sockets  : [ this.socket ],
      uri      : 'sip:300@uniapp.ml',
      password : 'jollof'
    };
    
    this.ua = new JsSIP.UA(this.configuration);
    
    this.ua.start();
    this.ua.on('connected', (e)=>{ 
      console.log(e)
      this.ua.on('registered', (e)=>{ 
        phoneStatus.innerHTML='Ready'
      });
      
    });
    // Register callbacks to desired call events
     this.eventHandlers = {
      'progress': (e)=> {
        // this.presentToast('call is in progress')
        console.log('call is in progress');
        
       
      },
      'failed': (e)=>  {

        if(e.cause== 'SIP Failure Code')
        {
          this.presentToast('User cannot be reached')
        }
        
        text.innerHTML="Welcome To";
        callName.innerHTML="UniTalk";
        console.log('call failed with cause: '+ e.cause);
        var audioOut: any  = document.getElementById('outgoing')
        audioOut.pause()
        this.decline.classList.add("hide")
        this.answer.classList.add("hide")
        // this.terminate();
        
        
      },
      'ended': (e)=>  {
        console.log('call ended with cause: '+ e.cause);
        this.presentToast('Call has been Terminated')
        text.innerHTML="Welcome To";
        callName.innerHTML="UniTalk";
        this.decline.classList.add("hide")
        this.answer.classList.add("hide")
        // this.terminate();
      },
      'canceled': (e)=>  {
        console.log('call cancelled with cause: '+ e.cause);
        // this.presentToast('Call has been Terminated')
        // text.innerHTML="Welcome To";
        // callName.innerHTML="UniTalk";
        // this.decline.classList.add("hide")
        // this.answer.classList.add("hide")
        // this.terminate();
      },
      'confirmed': (e)=>  {
        console.log('call confirmed');
        text.innerHTML="Connected To";
        var audioOut: any = document.getElementById('outgoing')
        audioOut.pause()
        // this.presentToast('In call');
       

      
      }
    };
    
    this.options = {
      'eventHandlers'    : this.eventHandlers,
      'mediaConstraints' : { 'audio': true, 'video': false}
    };

   

    this.ua.on('newRTCSession', (e)=>{

      var newSession=e.session

      if(this.session){
        this.session.terminate();
    }
      this.session=newSession

      // terminate.addEventListener('click',()=>{
      //   console.log(this.session)
      //   if(this.session){
      //     this.session.terminate();

      //   terminate.classList.add("hide")
      //   answer.classList.add("hide")
      //   }
        
        
      // }) 
        document.getElementById('terminate').addEventListener('click',()=>{
        if(this.session){
        this.session.terminate();
        text.innerHTML="Welcome To";
        callName.innerHTML="UniTalk";
        
        
        }}) 
      console.log('new')
      console.log(e)
      
      if (e.originator === 'local') {
        console.log('outgoing call')
        this.decline.classList.toggle("hide")

        }
        else if (e.originator === 'remote') {

          if(this.session._is_canceled == false){


            console.log('Incomingcall');
            console.log( this.session._is_canceled)
             console.log(e.request.from._display_name);
             text.innerHTML="Incoming";
             callName.innerHTML= e.request.from._display_name;
             this.decline.classList.toggle("hide")
             this.answer.classList.toggle("hide")
             var incomingCall: any = document.getElementById('incoming')
             incomingCall.play()
             if(this.session._is_canceled)
             {
               this.terminate;
             }
             this.answer.addEventListener('click',()=>{
               var incoming: any = document.getElementById('incoming')
               incoming.pause()
               console.log(this.session)
               this.session.answer();
               this.session.connection.onaddstream = function(e){
           console.log(e)
           console.log(e.stream)
           var audioRemote: any = document.getElementById('remoteAudio')
           audioRemote.srcObject = e.stream
         
     
         }
               
             }
             )
          }
  }
      })

 
  }

  call(contact){
    this.session = this.ua.call('sip:'+contact.extension+'@uniapp.ml', this.options)
    document.getElementById('text').innerHTML='calling'
    document.getElementById('callName').innerHTML=contact.name
    var outgoingcall: any = document.getElementById('outgoing')
    outgoingcall.play()

  }
  terminate(){
    console.log(this.session)
    if(this.session){
      this.session.terminate();
      this.session= null;
      var audioOut: any  = document.getElementById('incoming')
      audioOut.pause()
    this.decline.classList.add("hide")
    this.answer.classList.add("hide")
    }
    

  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
      
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  onSearchInput(){
    this.searching = true;
}
  filterItems(searchTerm) {
    return this.contacts.filter(contact => {
      return contact.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  setFilteredItems(searchTerm)
  {
    // document.getElementById('404').classList.add("hide")
   this.contacts=this.newArray
    this.contacts=this.filterItems(searchTerm)
    console.log(this.contacts.length)
    if (this.contacts.length==0)
    {
      // document.getElementById('404').classList.remove("hide")
      // console.log(this.contacts.length)
    }
  }

  addContacts(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Add contact');
  
    alert.addInput({
      type: 'text',
      name: 'name',
      placeholder:'Name'
    });
  
    alert.addInput({
      type: 'text',
      name: 'extension',
      placeholder:'Extension'
    });
  
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Contact data:', data);
        this.newArray.push(data)
        console.log(this.newArray)
        this.storage.set('contacts',this.newArray)
         document.location.reload
      }
    });
    alert.present();
  }

getContacts(){
  this.storage.get('contacts').then((result) => {
    console.log('fetch')
    if(result)
    {
      console.log(result)
     this.contacts=result
     this.newArray=this.contacts
    }
  });

}
}

