import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const Basic_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  

  createNewPost(postId:number, postedBy:string, content:string):Observable<any>{
    const params ={
        postId :postId,
        postedBy : postedBy
    }
    return this.http.post<any>(Basic_URL+`home/comment/create`,content,{params});
  }

  getAllComments(postId:number):Observable<any>{
    return this.http.get(Basic_URL+`home/comment/getall/${postId}`)
  }
}
