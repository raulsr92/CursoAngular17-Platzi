import { Component, signal } from '@angular/core';
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

  name2 = signal('Raul Adolfo');

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

  keyDownHandler(event:KeyboardEvent){
    console.log(event)

    const input = event.target as HTMLInputElement;


    alert(`Usted ha presionado ${event.key}`)

  }


  keyDownHandler2(event:Event){
    console.log(event)

    alert(`Usted ha presionado la tecla ENTER`)

  }


  actualizarInputValue(event:Event){

    console.log(event)

    const input = event.target as HTMLInputElement;

    console.log(input.value)

    const newValue = input.value;

    this.name2.set(newValue);

  }

}
