import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  tasks = signal([
    "Instalar Angular CLI",
    "Crear proyecto",
    "Crear componentes"
  ]);

  changeHandler(event:Event){

    console.log(event)

    const input = event.target as HTMLInputElement;

    console.log(input.value)

    const newTask = input.value;

    this.tasks.update((tasks) => [...tasks,newTask]);

    // Limpiar input

    input.value = "";
  }

  deleteTask(index: number){

    this.tasks.update((tasks) => tasks.filter((task, posicion)=> task[posicion]!=task[index] ) );

  }
}
