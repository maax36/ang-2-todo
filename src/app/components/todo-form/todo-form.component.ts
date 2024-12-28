import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  @Output() addTodo = new EventEmitter<string>();
  title: string = '';

  onSubmit() {
    if (this.title) {
      this.addTodo.emit(this.title);
      this.title = '';
    }
  }
}
