import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  artistas:any []=[];
  //se declara el loading para que se muestre con un ngif si o no.
  loading:boolean;
  constructor(private spotify:SpotifyService) { }

buscar(termino:string){
  this.loading=true;
  console.log(termino);

  this.spotify.getArtista(termino).subscribe((data:any)=>{
    console.log(data);
    this.artistas=data;
    this.loading=false;
  })
};

}
