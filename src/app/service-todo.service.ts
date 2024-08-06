import { Injectable } from '@angular/core';

import { IToDo } from './to-do';

// import { DATA } from './data';

@Injectable({
  providedIn: 'root'
})

export class ServiceTodoService {

  constructor() {}

  getData(): IToDo[]{
    const data = localStorage.getItem('task') ?? '';
    return JSON.parse(data);
  }

  setData(data:IToDo[]){
    localStorage.setItem('task', JSON.stringify(data));
  }
}
