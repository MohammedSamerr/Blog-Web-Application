import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.scss']
})
export class SearchByNameComponent {


  result:any=[];
  name:any ="";


  constructor(private postService: PostService,
    private activeRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private fb: FormBuilder){}

  ngOnInit(){
    
  }

  searchByName(){
    this.postService.searchByName(this.name).subscribe(res=>{
      this.result =res;
      console.log(this.result);
    },error=>{
      this.matSnackBar.open("Something went Wrong!!","OK");
    })
  }
}
