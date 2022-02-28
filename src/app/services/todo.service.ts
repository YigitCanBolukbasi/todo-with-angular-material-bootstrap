import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  addTodo(obj: any) {
    return this.http.post(`https://api.limantech.com/todo/todo`, obj);
  }

  getAllTodos() {
    return this.http.get(`https://api.limantech.com/todo/todo`);
  }

  updateTodo(obj: any) {
    return this.http.put(`https://api.limantech.com/todo/todo`, obj);
  }

  removeTodo(id: number) {
    return this.http.post(`https://api.limantech.com/todo/todo`, id);
  }
}
