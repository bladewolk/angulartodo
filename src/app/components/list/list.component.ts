import {Component, Input} from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: 'list.template.html',
  styleUrls: ['list.styles.css']
})

export class TodoListComponent {
  @Input() todos;
  @Input() loading;
  @Input() updateCallback: Function;

  updateTodo(id: number) {
    this.updateCallback(id);
  }
}
