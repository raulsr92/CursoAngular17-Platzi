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

    this.tasks.update((tasks) => tasks.filter((task, posicion)=>posicion !== index

    ) );

  }

  updateTask(tarea: Task, state:boolean, index:number){
    const tareaActualizada = {
      id: Date.now(),
      title: tarea.title,
      completed: state
    }

    console.log('Lista de tareas antes de actualizar:',this.tasks())
    console.log('Tarea actualizada:',tareaActualizada)
    console.log('Tarea a actualizar',this.tasks()[index])

    //this.tasks()[index] = updateTask;
    this.tasks.update((tasks) => tasks.map((tareita, posicion) => posicion == index ? tareaActualizada:tareita ));

  }

  taskFinished(event:Event, index:number, task: Task){

    console.log(event)

    const input = event.target as HTMLInputElement;
    const checkedValue = input.checked

    console.log(input)
    console.log('Checkbox marcado:',checkedValue)
    console.log('Índice de la tarea:',index)
    console.log('Tarea antes de actualizar:',task)

    this.updateTask(task,checkedValue,index)

    console.log('Lista de tareas después de actualizar:',this.tasks())
  }

  // Método creado para la solución del profesor (clase 13)

  updateTask2(index:number){
    this.tasks.update((tasks) => {
      return tasks.map((tareita, posicion) => {
        if(posicion == index){
          return {
            ...tareita,
            completed: !tareita.completed // negando el estado actual de la tarea cambiamos de false a true o viceversa
          }
        }
        return tareita;
      })
    });
  }

}
