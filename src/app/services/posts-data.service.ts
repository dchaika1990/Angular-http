import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import { HttpHeaders } from "@angular/common/http";
// import { HttpParams } from "@angular/common/http";
import 'rxjs/add/operator/retry'

@Injectable()
export class PostsDataService {

  constructor(
    public http: HttpClient
  ) { }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts').retry(3)
  }

  addPost(post){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }

  deletePost(post){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1', post)
  }

}
