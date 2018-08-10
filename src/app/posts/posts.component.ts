import { Component, OnInit } from '@angular/core';
import {PostService} from './post.service';
import {AppError} from './app-error';
import {NotFoundError} from './not-found-error';
import {BadInput} from './bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];


  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe((response: any[]) => {
        this.posts = response;
      });
  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    this.posts.splice(0, 0, post);
    input.value = '';

    this.service.create(post)
      .subscribe(response => {
        post['id'] = response['id'];
      },
        (error: AppError) => {
          this.posts.splice(0, 1);
          if (error instanceof BadInput) {
           // this.form.setErrors(error.originalError);
            // alert('This post has already been posted.');
          } else {
            alert('An unexpected error occurred.');
            console.log(error);
          }
      });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(response => {
        console.log(response);
      },
      error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }

  deletePost(post) {
  this.service.delete(345)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
        (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted.');
        } else {
          alert('An unexpected error occurred.');
          console.log(error);
        }
      });
  }

}
