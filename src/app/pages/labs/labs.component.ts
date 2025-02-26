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
  disabled = true;
  rutaImg  = 'https://www.w3schools.com/howto/img_snow.jpg';
  person = {
    name: 'Raul',
    age: 33,
    placeToTravel:'https://www.w3schools.com/howto/img_snow.jpg'
  };

  clickHandler(){
    alert("Se ha registrado su solicitud.")
  }

  btnMainClass = 'btn-main';

  inputHandler(event:Event){
    console.log(event)

    const inputElement = event.target as HTMLInputElement;

    alert(inputElement.value)

  }
}
