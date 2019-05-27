import { Component, ViewChild,ElementRef } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';


declare var google;
 // @IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  lectureVenues: any
  banks: any


  @ViewChild('map') mapElement: ElementRef;
  map: any;
  // start = 'chicago, il';
  // end = 'chicago, il';
  // directionsService = new google.maps.DirectionsService;
  // directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ionViewDidLoad(){
    this.initMap();

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
      }
    ]
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: {lat: 5.6506, lng: -0.1962}
    });

    
  }


  openLocations(data){
    let modal = this.modalCtrl.create('ModalPage',{data:data})
    modal.present()
  }

}
