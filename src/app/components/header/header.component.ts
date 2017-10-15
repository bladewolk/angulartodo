import {Component, Input} from "@angular/core";
import {TodoService} from "../../todo.service";

@Component({
  selector: 'header-component',
  templateUrl: 'header.template.html',
  styleUrls: ['header.style.css']
})

export class HeaderComponent {
  newTodo = '';
  @Input() createCallback: Function;
  @Input() loading;

  validate() {
    if (this.newTodo.length != 0) {
      this.createCallback(this.newTodo);
      this.newTodo = '';
    }
    return false;
  }

}
