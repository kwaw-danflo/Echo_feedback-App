import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the PollProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PollProvider {

  apiBaseUrl: string = '';
  access_token: string = '';

  constructor(public http: HttpClient) {
    this.access_token = 'access_token=' + localStorage.getItem('token');
   this.apiBaseUrl = 'https://uniapp-api.herokuapp.com/api/';
    
  }

  getPolls() {
    return new Promise(resolve => {
    
      this.http.get(this.apiBaseUrl + 'Polls?' + this.access_token).subscribe(data => {
        resolve(data);
    
      },
        err => {
          console.log(err);
        }
      )
    });
    
  }


  postChoice(id:string, pollAnswer:any){
    return new Promise(resolve => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.patch(this.apiBaseUrl + 'Polls/' + id + "?" + this.access_token, pollAnswer, {headers:headers}).subscribe(data =>{
        resolve(data);
      }, error =>{
        console.log(error)
      });
    });
  }

}
