import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'todoapp';
  welcome = 'Hola a todos compañeros!';
  tasks = [
    "Instalar Angular CLI",
    "Crear proyecto",
    "Crear componentes"
  ];
  name = 'Raul';
  lastname = 'Sánchez';
  age = 33;
}
