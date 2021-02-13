import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimages'
})
export class NoimagesPipe implements PipeTransform {
//creacion de pipe para evitar que las imagenes salgan en error.

//transformamos el arreglo y regresamos un string
  transform(images: any[]): string {


    if(!images){ //si viene vacio regresamos la imagen predeterminada
      return 'assets/img/noimage.png';
    }

    if(images.length > 0){ //si en imagen viene mayo a cero se regresa la imagen en su posicion.
      return images[0].url;
    }else{
      return 'assets/img/noimage.png';
    }
    return null;
  }

}
