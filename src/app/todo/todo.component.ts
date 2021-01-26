import { Component, OnInit } from '@angular/core';
import {ITodo} from '../interface/itodo';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoForm!: FormGroup;
  todos: Array<ITodo> = [];
  id = 0;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      todo: ['', Validators.required]
    })
  }

  onSubmit() {
    let todo = {
      id: ++this.id,
      content: this.todoForm.get('todo')!.value,
      complete: false
    };
    this.todoForm.setValue({todo: ['']});
    console.log(todo);

    this.todos.push(todo);
  }

  done(t: ITodo) {


    for(let i = 0;i<this.todos.length;i++){
      if(this.todos[i].id == t.id){
        t.complete = true;
        this.todos[i].complete = true;
      }
    }
    console.log(t);
  }
}
