import { Component, OnInit } from '@angular/core';
import { ToDoService } from './services/to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'to-do';
  constructor(private _todoService: ToDoService) {

  }

  ngOnInit() {
    this._todoService.loadData().subscribe((todos) => {
      
    })
  }
}
