import { Component, OnInit } from '@angular/core';
import { ITodo } from './models/todo.interface';
import { ToDoService } from './services/to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'to-do';

  public todoList: ITodo[];
  constructor(private _todoService: ToDoService) {
  }

  ngOnInit() {
    this._todoService.loadData().subscribe((todos) => {
      this.todoList = todos
    })
  }

  toggleTask(task) {
      task.completed = !task.completed
  }
}
