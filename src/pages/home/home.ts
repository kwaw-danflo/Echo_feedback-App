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
  
        console.log(this.postList)
      });

      

      console.log(this.postList)
  }
  viewPost(post) {
    this.navCtrl.push(PostPage,{post:post});
     
  }


  // clicked:Boolean=false;
 

  like(e){

  //  this.clicked=!this.clicked;

//    if(this.clicked){
    
//       e.target.setAttribute("name","heart")
//     e.target.classList.remove("ion-md-heart-outline")
//     e.target.classList.add("ion-md-heart")
//    }
//  else{

//   e.target.setAttribute("name","heart-outline")
//   e.target.classList.remove("ion-md-heart")
//   e.target.classList.add("ion-md-heart-outline")
//  }
e.target.classList.toggle("ion-md-heart-outline")
e.target.classList.toggle("ion-md-heart")

  }

  bookmark(e,post){
    // this.bookmarks.push(post);
    // localStorage.setItem('bookmarks',JSON.stringify(this.bookmarks))
e.target.classList.toggle("ion-ios-bookmark-outline")
e.target.classList.toggle("ion-ios-bookmark")
  }
  
}

