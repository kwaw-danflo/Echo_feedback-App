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

  
  
  data: any = {};


  constructor(public http: HttpClient) {
    //this.authBaseURL = 'http://localhost:3000/api/Students';
    this.authBaseURL = 'https://uniapp-api.herokuapp.com/api/Students';
  
  }
  register(credentials){

    return new Promise(resolve =>{
      let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
      this.http.post(this.authBaseURL, credentials, {headers: headers}).subscribe(res =>{
        resolve(res);
      }, err =>{
        console.log(err)
      })
    });
  }

  login(credentials) {
      return new Promise((resolve, reject) =>{
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        this.http.post(this.authBaseURL + '/login', credentials, {headers: headers}).subscribe(data =>{ 
          resolve(data);   
        }, error =>{
          reject(error);
        });
      });
  }


  

  
}
  


