import { Component } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, TodoFormComponent, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: Todo[] = [];
  nextId = 1;

  addNewTodo(title: string) {
    this.todos.push({ id: this.nextId++, title });
  }

  removeTodoItem(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
}
