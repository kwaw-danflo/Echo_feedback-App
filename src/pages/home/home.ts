import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { PostPage } from '../post/post';
import { PostProvider } from '../../providers/post/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  postList: any;

  constructor(public navCtrl: NavController, public postProvider:PostProvider ) {
  }

  ionViewDidLoad(){
      this.postProvider.getPosts().then(data =>{
        
        this.postList = data;
  
        
      });
  }
  viewPost(post) {
    this.navCtrl.push(PostPage,{post:post});
     
  }

 
//   clicked:Boolean=false;
//   heartIcon:string="heart-outline";
//   toggleHeart(e){
// console.log(e)
//    this.clicked=!this.clicked;

// this.heartIcon= this.clicked ? 'heart' : 'heart-outline'
//   }

  
}

