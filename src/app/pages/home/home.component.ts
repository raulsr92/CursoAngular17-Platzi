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
}
