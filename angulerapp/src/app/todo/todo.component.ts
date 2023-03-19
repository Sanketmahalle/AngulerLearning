import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: any = [];
  selectedTodo: any = null;
  editTodoTitle: string = '';
  newTodoTitle: string = '';
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.listToDos();
  }

  createTodo() {
    let todo = {
      id: new Date().getTime(),
      title: this.newTodoTitle,

    }

    this.todoService.create(todo).subscribe((response) => {
      console.log('todo create', response);
      this.listToDos();
      this.newTodoTitle = ''; // clear the input box

    }, (error => {
      console.log(error)
    }))
  }

  listToDos() {
    this.todoService.list().subscribe((res) => {
      console.log(res)
      this.todoList = res;
    }, (error=> {
      console.log(error);
    }))
  }

  editTodoStart(todo: any) {
    this.selectedTodo = todo;
    this.editTodoTitle = todo.title;
  }

  editTodoSave() {
    if (this.selectedTodo) {
      let editData = {
        id: this.selectedTodo.id,
        title: this.editTodoTitle
      }

      this.todoService.update(this.selectedTodo.id, editData).subscribe(res=> {
        this.selectedTodo = null;
        this.editTodoTitle = '';
        this.listToDos();
      })
    }
  }

  deleteTodo(id: any) {
    this.todoService.delete(id).subscribe(res => {
      console.log('Record has been deleted');
      this.listToDos();
    })
  }
}