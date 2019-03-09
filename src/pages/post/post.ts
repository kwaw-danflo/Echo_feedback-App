

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PostProvider } from '../../providers/post/post';


@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
postId;
post:any={} ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public postProvider: PostProvider) {
    this.postId = this.navParams.get('id');
    this.getPost(this.postId);
    
  }

  getPost(id){
    this.postProvider.getPost(id).then(data =>{
      this.post = data;
      console.log(data);
    })
  }

 
  

}

