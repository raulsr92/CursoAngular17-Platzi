import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task} from './../../models/task.model';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Instalar Angular CLI',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false
    },

    {
      id: Date.now(),
      title: 'Crear componentes',
      completed: false
    },

  ]);


  changeHandler(event:Event){

    console.log(event)

    const input = event.target as HTMLInputElement;
    console.log(input.value)

    const newTaskTitle = input.value;

    this.addTask(newTaskTitle)

    // Limpiar input

    input.value = "";
    console.log(this.tasks())
  }


  addTask(title: string){
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    }

    this.tasks.update((tasks) => [...tasks,newTask]);
  }


  deleteTask(index: number){
1
    this.tasks.update((tasks) => tasks.filter((task, posicion)=>posicion !== index

    ) );

  }
}
