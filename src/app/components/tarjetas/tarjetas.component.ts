import { Component, Input } from '@angular/core';
import{Router}from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {


  //configuracion e importacion de input para implementar los items en los html para poder ahorrar codigo en el desarrollo recibiendo
  //un arreglo vacio de los componentes que se reciben en cada uno de ellos

  @Input() items: any[]=[];

  constructor(private router : Router) { }
  verArtista(item :any){
    let artistaId;
    if(item.type ==='artist'){
      artistaId=item.id;
    }
    else{
      artistaId =item.artists[0].id;
    }

    this.router.navigate(['/artist', artistaId]);
  }

}
