import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  constructor(private httpService: HttpClient) {}

  loadData() {
    return this.httpService.get<Array<ITodo>>(environment.url).pipe(
      map((todos) => {
        return todos;
      })
    );
  }
}
