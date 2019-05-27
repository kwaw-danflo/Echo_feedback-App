import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
passedData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public view:ViewController, public launchNavigator: LaunchNavigator) {
  }

  closeModal(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    this.passedData = this.navParams.get('data');
  }
  viewLocation(coordinates){
    let app = this.launchNavigator.APP.GOOGLE_MAPS

    this.launchNavigator.navigate(coordinates, {app:app});
  }
}
