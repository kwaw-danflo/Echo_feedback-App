import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the InfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InfoProvider {

  apiBaseUrl: string = '';
  access_token: string = '';
  constructor(public http: HttpClient) {
    this.access_token = '?access_token=' + localStorage.getItem('token');
    this.apiBaseUrl = 'https://uniapp-api.herokuapp.com/api/';

  }
  getinfo(id){

    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl + 'Posts/' + id + this.access_token).subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        }
      )
    });
    

  }

  getinfos(){

    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl + 'Posts/' + this.access_token).subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        }
      )
    });
    

  }

}
