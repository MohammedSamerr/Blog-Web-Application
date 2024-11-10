import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const Basic_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  createNewPost(data:any):Observable<any>{
    return this.http.post(Basic_URL+`home/posts`, data);
  }

  getAllPosts():Observable<any>{
    return this.http.get(Basic_URL+`home/allposts`);
  }

  getPostById(postId:number):Observable<any>{
    return this.http.get(Basic_URL+`home/allposts/${postId}`);
  }

  likePost(postId:number):Observable<any>{
    return this.http.put(Basic_URL+`home/allposts/${postId}/like`,{});
  }

  searchByName(name:String):Observable<any>{
    return this.http.get(Basic_URL+`home/allposts/search/${name}`);
  }
}
