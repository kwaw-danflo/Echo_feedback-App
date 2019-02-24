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

  constructor(public http: HttpClient) {
    
    this.apiBaseUrl = 'https://uniapp-api.herokuapp.com/api/';

  }
  getinfo(id){

    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl + 'Posts/' + id).subscribe(data => {
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
      this.http.get(this.apiBaseUrl + 'Posts').subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        }
      )
    });
    

  }

}
