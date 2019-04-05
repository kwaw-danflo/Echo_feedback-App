import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the CampusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CampusProvider {
  apiBaseUrl: string = '';
  access_token: string = '';
  constructor(public http: HttpClient) {
    this.access_token = '&access_token=' + localStorage.getItem('token');
    this.apiBaseUrl = 'https://uniapp-api.herokuapp.com/api/';
    //this.apiBaseUrl = 'http://localhost:3000/api/'
  }

  filterLocation(title) {
    return new Promise(resolve => {
    
      this.http.get(this.apiBaseUrl + 'Campus?filter={"where":{"category":"'+ title + '"}}' + this.access_token)
      .subscribe(data => {resolve(data)},
        err => {
          console.log(err);
        }
      )
    });
}






}