import {Component, OnInit} from '@angular/core';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private todoService: TodoService) {
  }

  todos = [];
  loading = true;

  getTodos(): void {
    setTimeout(() => {
      this.todoService.getTodos().then(resp => {
        this.todos = resp;
        this.loading = false;
      });
    }, 500);
  }

  createTodo(value: string) {
    this.loading = true;
    this.todoService.createTodo(value).then(
      res => {
        this.getTodos();
      });
  }

  updateTodo(id: number) {
    this.loading = true;
    this.todoService.updateTodo(id).then(
      res => {
        this.loading = false;
      }
    );
  }

  ngOnInit(): void {
    this.getTodos();
  }

}
