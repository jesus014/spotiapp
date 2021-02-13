import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {


  //configuracion e importacion de input para implementar los items en los html para poder ahorrar codigo en el desarrollo recibiendo
  //un arreglo vacio de los componentes que se reciben en cada uno de ellos

  @Input() items: any[]=[];

  constructor() { }


}
