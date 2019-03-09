import { Component } from '@angular/core';
import { NavController,App, AlertController, LoadingController, ToastController } from 'ionic-angular';

import { IssueReportProvider } from '../../providers/issue-report/issue-report';




@Component({
  selector: 'page-issue',
  templateUrl: 'issueReport.html'
})
export class ReportPage {

    report={category:'', fullName:'', StudentID:'', issueDescription:''};
    reportSent:boolean = false;

   

  constructor(
    public navCtrl: NavController,
    public app: App, 
    public issueprovider: IssueReportProvider,
    public alertControl:AlertController,
    public toastControl: ToastController,
    public loadingControl: LoadingController
    
    ) {}




reportIssue(){
    this.issueprovider.sendReport(this.report).then(success => {
      if (success) {
        this.reportSent = true;
        this.presentToast('Your Report Has Been Sent.')
      }
      else {
        this.presentToast("Could Not Send Report.")
      }
    })
}
    


presentToast(msg) {
  const toast = this.toastControl.create({
    message: msg,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}


  

  

}