import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';


import { PostPage } from '../post/post';
import { PostProvider } from '../../providers/post/post';

@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html'
})
export class BookmarksPage {
  postList;

  constructor(public navCtrl: NavController, public postProvider:PostProvider ) {
    this.getPosts();
  }

  
  viewPost(id) {
    this.navCtrl.push(PostPage,{id:id});
     
  }

  getPosts(){
    this.postProvider.getPosts().then(data =>{
      this.postList = data;

      
    })
  }

}

