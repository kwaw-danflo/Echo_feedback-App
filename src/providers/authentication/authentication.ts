import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  credentials: any = {};
  authBaseURL: string = '';
  // registerURL: string = '';
  // loginURL: string = '';
  // logoutURL: string = '';
  
  
  token: string;
  data: any = {};

  constructor(public http: HttpClient) {
    this.authBaseURL = 'https://uniapp-api.herokuapp.com/api/Students';
    // this.registerURL = 'http://localhost:3000/api/Students';
    // this.loginURL = 'http://localhost:3000/api/Students/login';
    // this.logoutURL = 'http://localhost:3000/api/Students/logout'
  }

  register(credentials){

    return new Promise(resolve =>{
      let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
      this.http.post(this.authBaseURL, credentials).subscribe(data =>{
        resolve(data);
      }, err =>{
        console.log(err)
      })
    });
  }

  login(credentials) {
      return new Promise((resolve, reject) =>{
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        this.http.post(this.authBaseURL + '/login', credentials, {headers: headers}).subscribe(res =>{
          resolve(res);
        }, error =>{
          reject(error);
        });
      });
  }


  logout() {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('X-Auth-Token', localStorage.getItem('token'));

      this.http.post(this.authBaseURL + '/logout', {}, {headers: headers}).subscribe(res =>{
        localStorage.clear();
      }, error =>{
        reject(error);
      });
    });
  }

  
}
  


