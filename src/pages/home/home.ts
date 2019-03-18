import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { PostPage } from '../post/post';
import { PostProvider } from '../../providers/post/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
//   clicked:Boolean=false;
//   heartIcon:string="heart-outline";
//   toggleHeart(e){
// console.log(e)
//    this.clicked=!this.clicked;

// this.heartIcon= this.clicked ? 'heart' : 'heart-outline'
//   }

  
}

