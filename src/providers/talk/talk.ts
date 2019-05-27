import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AccountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TalkProvider {
  apiBaseUrl: string = '';
  access_token: string = '';

  constructor(public http: HttpClient ,public storage: Storage) {
    this.access_token = '?access_token=' + localStorage.getItem('token');
    this.apiBaseUrl = 'https://uniapp-api.herokuapp.com/api/Students';
    //this.apiBaseUrl = 'localhost:3000/api/Students';
  }


  getContacts() {
    return this.storage.get('contacts')
    
  }

  setContacts(contacts) {
    return this.storage.set('contacts',contacts)
    
  }


}
