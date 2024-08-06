import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { IToDo } from '../to-do';
import { DATA } from '../data';

@Component({
  selector: 'app-list-to-do',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-to-do.component.html',
  styleUrl: './list-to-do.component.css'
})

export class ListToDoComponent {
  // тестовые данные
  data = DATA;

  // выбор элемента
  selectedElement: IToDo;
  onSelected(element: IToDo) {
    this.selectedElement = element 
  }

  // добавление
  addElement(description: string){
  // елсли нет
    if (!description) return;
    this.data.unshift({
      id: Math.floor(Math.random() * 101),
      description
    });
  }
  // удаление
  removeElement(element: IToDo){
    this.data.splice(this.data.indexOf(element), 1);
  }
}
