import { ErrorHandler, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class AppErrorHandler implements  ErrorHandler {

  constructor(private http: HttpClient) {
  }
  handleError(error) {
    alert('An unexpected error occurred.');
    console.log(error);
  }
}
