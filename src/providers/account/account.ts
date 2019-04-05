import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AccountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccountProvider {
  apiBaseUrl: string = '';
  access_token: string = '';

  constructor(public http: HttpClient) {
    this.access_token = '?access_token=' + localStorage.getItem('token');
    this.apiBaseUrl = 'https://uniapp-api.herokuapp.com/api/Students';
    //this.apiBaseUrl = 'localhost:3000/api/Students';
  }


  getUserData(id) {
    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl + '/' + id + '/' + this.access_token ).subscribe(data => {
        resolve(data);
      }, err =>{
        console.log(err);
      });
    });
  }

  logout() {
    return new Promise (resolve =>{
      this.http.post(this.apiBaseUrl + '/logout/' + this.access_token,{} ).subscribe(res =>{
        localStorage.removeItem('token');
        resolve(res);
      }, error =>{
        console.log(error)
      });
    });
  }
}
