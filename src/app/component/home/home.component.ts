import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  text!: string;
  data: any = {
    pending: ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'],
    inProgress: [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog',
    ],
    done: ['Get up', 'Brush teeth', 'Take a shower'],
  };

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  AddToDo(todo: any) {
    const obj = { todo: todo.value };
    this.todoService.addTodo(obj).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
