import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommentService } from 'src/app/service/comment.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent {

  postId = this.activeRoute.snapshot.params['id']
  postData:any;
  allComments: any;

  commentForm!:FormGroup;
  

  constructor(private postService: PostService,
    private activeRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private fb: FormBuilder,
    private commentService: CommentService
  ){}

  

  ngOnInit(){
    console.log(this.postId);
    this.getPostById();
    this.commentForm =this.fb.group({
      postedBy : [null,Validators.required],
      content : [ null, Validators.required]
    })
  }

  publishComment(){
    const postedBy = this.commentForm.get('postedBy')?.value;
    const content = this.commentForm.get('content')?.value;
    this.commentService.createNewPost(this.postId,postedBy,content).subscribe(res=>{
    this.matSnackBar.open("Comment Published","OK");
    this.getCommentsByPostId();
    }, error=>{
      this.matSnackBar.open("Something went Wrong!!","OK");
    })
  }

  getCommentsByPostId(){
    this.commentService.getAllComments(this.postId).subscribe(res=>{
        console.log(res);
        this.allComments =res;
        
    },error=>{
      this.matSnackBar.open("Something went Wrong!!","OK");
    })

  }
  getPostById(){
    this.postService.getPostById(this.postId).subscribe(res=>{
      this.postData = res; 
      console.log(res);
      this.getCommentsByPostId();
    },error=>{
        this.matSnackBar.open("Something went Wrong!!","OK");
    })
  }

  likePost(){
    this.postService.likePost(this.postId).subscribe((response)=>{
      this.matSnackBar.open("Post Liked Successfully","OK");
      if (this.postData) {
        this.postData.likeCount += 1;
      }
    },error=>{
      this.matSnackBar.open("Something went Wrong!","OK");
    });
  }

  
}
