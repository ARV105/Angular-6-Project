import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {
   form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });

  }

addTopic(topic: HTMLInputElement) {
  (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
  topic.value = '';

}

removeTopic(topic: FormControl) {
  const index = this.topics.controls.indexOf(topic);
  this.topics.removeAt(index);
}

  get topics() {
    return this.form.get('topics') as FormArray;
  }



  ngOnInit() {
  }

}
