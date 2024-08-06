import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { IToDo } from '../to-do';
// import { DATA } from '../data';
import { ServiceTodoService } from '../service-todo.service';

@Component({
  selector: 'app-list-to-do',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-to-do.component.html',
  styleUrl: './list-to-do.component.css'
})

export class ListToDoComponent {

  data: IToDo[]; 

  // Внедрение HeroService
  constructor(private todoService: ServiceTodoService) { }

  // выбор элемента
  selectedElement: IToDo;
  onSelected(element: IToDo) {
    this.selectedElement = element 
  }

  // добавление
  addElement(description: string){
    // если нет
    if (!description) return;
    // добавляем
    this.data.unshift({
      id: Math.floor(Math.random() * 101),
      description,
      completed: true
    });
    // обновляем данные LocalStorage
    this.todoService.setData(this.data)
  }

  // удаление
  removeElement(element: IToDo){
    this.data.splice(this.data.indexOf(element), 1);
    // обновляем данные LocalStorage
    this.todoService.setData(this.data)
  }

  // получаем данные
  getData() {
    this.data = this.todoService.getData();
  }

  // метод жизненного цикла
  ngOnInit() {
    this.getData();
  }

  // при изменении записываем изменнный массив объектов LocalStoreg
  ngOnChanges() {
    this.todoService.setData(this.data);
  }

  filter: 'all' | 'done' | 'not done';

  filterTodo(){
    this.getData();
    switch(this.filter) {
      case 'all': break;
      case 'done': this.data = this.data.filter(item => item.completed); break;
      case 'not done':  this.data = this.data.filter(item => !item.completed); break;
    }
  }
  
}
