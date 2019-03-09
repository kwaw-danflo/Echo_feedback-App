import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the IssueReportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IssueReportProvider {
  apiBaseUrl: string = '';
  constructor(public http: HttpClient, public toastControl: ToastController) {
    this.apiBaseUrl = 'https://uniapp-api.herokuapp.com/api/Issues';
   
  }


sendReport(report){
  return new Promise ( resolve => {
    this.http.post(this.apiBaseUrl, report).subscribe( data =>{
      resolve(data);
    }, error =>{
      this.presentToast("Check Details Entered.");
      console.log(error);

    })
  })

}

presentToast(msg) {
  const toast = this.toastControl.create({
    message: msg,
    duration: 3000,
    position: 'middle'
  });
  toast.present();
}


}