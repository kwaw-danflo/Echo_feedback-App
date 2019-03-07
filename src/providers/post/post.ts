import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationProvider } from '../authentication/authentication';



/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

  apiBaseUrl: string = '';
  access_token: string = '';

  constructor(public http: HttpClient, private auth: AuthenticationProvider) {
     this.access_token = localStorage.getItem('token');
    this.apiBaseUrl = 'https://uniapp-api.herokuapp.com/api/';
      // this.apiBaseUrl = 'http://localhost:3000/api/'
  }
  getPost(id){

    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl + 'Posts/' + id + '?access_token=' + this.access_token).subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        }
      )
    });
    

  }
  getPosts(){

    return new Promise(resolve => {
      
      this.http.get(this.apiBaseUrl + 'Posts/?access_token=' + this.access_token ).subscribe(data => {
        resolve(data);
    
      },
        err => {
          console.log(err);
        }
      )
    });
    

  }

}
