import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  toDo;

  constructor(
    private httpService: HttpClient
  ){}

  loadData() {
    this.httpService.get<any>(environment.url).subscribe( respons => {
      this.toDo = respons;

    })
  }




}
