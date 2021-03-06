import { Component, OnInit } from '@angular/core';
import { PostsDataService } from '../../services/posts-data.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any;
  post = {
    title: '',
    body: '',
    edit: false
  };
  addSuccess:boolean = false;
  addError: boolean = false;
  deleteSuccess: boolean = false;
  deleteError: boolean = false;
  saveSuccess:boolean = false;
  saveError:boolean = false;
  edit:boolean = false;

  constructor(
    public postsService: PostsDataService
  ) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe( posts=>{
      console.log(posts);
      this.posts = posts;
    }, error=>{
      console.log(error)
    } )
  }

  addPost(form){
    this.postsService.addPost(this.post).subscribe(post=>{
      this.posts.unshift(post);
      form.resetForm();
      this.addSuccess = true;
      setTimeout(()=>{
        this.addSuccess = false;
      }, 4000)
    }, error=>{
      console.log(error);
      this.addError = true;
      setTimeout(()=>{
        this.addError = false;
      }, 4000)
    })
  }

  deletePost(post, i){

    this.postsService.deletePost(post).subscribe(post=>{
      this.posts.splice(i, 1);
      this.deleteSuccess = true;
      setTimeout(()=>{
        this.deleteSuccess = false;
      }, 4000)
    }, error=>{
      console.log(error);
      this.deleteError = true;
      setTimeout(()=>{
        this.deleteError = false;
      }, 4000)
    })
  }

  editPost(post){
    this.postsService.editPost(post).subscribe(post=>{
      console.log(post);
      this.saveSuccess = true;
      setTimeout(()=>{
        this.saveSuccess = false;
      },4000)
    }, error=>{
      console.log(error);
      this.saveError = true;
      setTimeout(()=>{
        this.saveError = false;
      },4000)
    })
  }

}
