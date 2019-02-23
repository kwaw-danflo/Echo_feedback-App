import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

  // apiBaseUrl: string = '';

  constructor(public http: HttpClient) {
    
    // this.apiBaseUrl = 'http://localhost:3000/api/';

  }
  // getPost(id){

  //   return new Promise(resolve => {
  //     this.http.get(this.apiBaseUrl + 'Posts/' + id).subscribe(data => {
  //       resolve(data);
  //     },
  //       err => {
  //         console.log(err);
  //       }
  //     )
  //   });
    

  // }

  // getPosts(){

  //   return new Promise(resolve => {
  //     this.http.get(this.apiBaseUrl + 'Posts').subscribe(data => {
  //       resolve(data);
  //     },
  //       err => {
  //         console.log(err);
  //       }
  //     )
  //   });
    

  // }

}
