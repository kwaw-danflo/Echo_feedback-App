import { Component ,ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as JsSIP from 'jssip'
import { CommentStmt } from '@angular/compiler';
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
outgoingAudio
incomingAudio

contacts=[
  {
    'name':'Augustine Virgo',
    'extension':'200',
    
},
{
  'name':'Kwaw Danflo',
  'extension':'300',

}
]

  constructor(public navCtrl: NavController) {

  }
  ionViewDidEnter(){

    // var Remoteaudio=document.getElementById('remoteAudio')  as HTMLElement
    this.outgoingAudio=document.getElementById('outgoing')  as HTMLElement
    var answer=document.getElementById('answer')  as HTMLElement
    this.socket = new JsSIP.WebSocketInterface('wss://uniapp.ml:8089/ws');
    this.configuration = {
      sockets  : [ this.socket ],
      uri      : 'sip:500@uniapp.ml',
      password : 'jollof'
    };
    
    this.ua = new JsSIP.UA(this.configuration);
    
    this.ua.start();
    
    // Register callbacks to desired call events
     this.eventHandlers = {
      'progress': function(e) {
        console.log('call is in progress');
        
       
      },
      'failed': function(e) {
        console.log('call failed with cause: '+ e.cause);
        var audioOut: any  = document.getElementById('outgoing')
        audioOut.pause()
      },
      'ended': function(e) {
        console.log('call ended with cause: '+ e.cause);
      },
      'confirmed': function(e) {
        console.log('call confirmed');
        var audioOut: any = document.getElementById('outgoing')
        audioOut.pause()

      
      }
    };
    
    this.options = {
      'eventHandlers'    : this.eventHandlers,
      'mediaConstraints' : { 'audio': true, 'video': false}
    };

   

    this.ua.on('newRTCSession', function(e){
      var newSession=e.session
      if(session){
        session.terminate()
      }
      var session=newSession
      document.getElementById('terminate').addEventListener('click',function(){
        session.terminate()
      }) 
      
      console.log('new')
      console.log(e)
      if (e.originator === 'local') {
        console.log('outgoing call')
        session.connection.onaddstream = function(e)
        {
          console.log(e)
          console.log(e.stream)
          var audioRemote: any = document.getElementById('remoteAudio')
          // Watch out here...............
          navigator.getUserMedia({audio:true, video:false},function(stream){
            audioRemote.srcObject = e.stream
          },function(e){console.log(e)})
          
    
        }
        }
        else if (e.originator === 'remote') {
        console.log('Incomingcall');
        console.log("Event is: ", e)
        console.log("Session is ", session.isInProgress())
        var incomingCall: any = document.getElementById('incoming')
        while(session.isInProgress() == true){
        incomingCall.play()
        }
   
        
        
        document.getElementById('answer').addEventListener('click',function(){
          var incoming: any = document.getElementById('incoming')
          incoming.pause()
          console.log(session)
          session.answer();
          session.connection.onaddstream = function(e)
    {
      console.log(e)
      console.log(e.stream)
      var audioRemote: any = document.getElementById('remoteAudio')
      audioRemote.srcObject = e.stream
    

    }
          
        })}
      })

 
  }


  call(){
    this.session = this.ua.call('sip:300@uniapp.ml', this.options)
  
    var context=document.getElementById('remoteAudio')
    var outgoingcall: any = document.getElementById('outgoing')
    outgoingcall.play()

    
    //SIP 100 is Virgo's Laptop
    //SIP 200 is Prince's Phone
    //SIP 300 is Paschal's Phone
    //SIP 400 is Danflo's Laptop
    //SIP 500 is Beryl
  }




}

