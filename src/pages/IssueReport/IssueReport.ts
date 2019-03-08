import { Component } from '@angular/core';
import { NavController,App, AlertController, LoadingController, Loading, Alert } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';




@Component({
  selector: 'page-issue',
  templateUrl: 'issueReport.html'
})
export class ReportPage {
    report={};

  constructor(
    public navCtrl: NavController,
    private app: App, 

    private alertControl:AlertController,
    private loadingControl: LoadingController
    
    ) {}



reportIssue(){
  
}
    
  

  

}