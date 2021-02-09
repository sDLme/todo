import { Component, OnInit } from '@angular/core';
import { ITodo } from './models/todo.interface';
import { ToDoService } from './services/to-do.service';
import { itemAnimation } from './app.animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [itemAnimation]
})
export class AppComponent implements OnInit {

  public todoList: ITodo[];

  constructor(private _todoService: ToDoService) {}

  ngOnInit() {
    this._todoService.loadData().subscribe((todos) => {
      todos.map((x: any) => {
        return x.state = 'start'
      })
      this.todoList = todos
    })
  }

  toggleTask(task) {
    task.completed = !task.completed
    task.state = 'end'
    setTimeout( () => {
      task.state = 'start'
    }, 200)
  }
}
