import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import{ActivatedRoute}from '@angular/router';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent  {


  artista:any = {};
  topTracks: any[]=[];
  loadinArtist: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {


    this.loadinArtist= true;

    this.router.params.subscribe(params=>{
      //console.log(params['id']);
      this.getArtista(params['id']);
      //uso de gettoptracks porque ya se cuenta con el id
      this.getTopTracks(params['id']);
    })
  }
  getArtista(id:string){
    this.loadinArtist= true;

    this.spotify.getArtistaa(id).subscribe(artista=>{
      console.log(artista);
      this.artista=artista;
      this.loadinArtist= false;

    })
  }

  getTopTracks(id:string){

      this.spotify.getTopTracks(id).subscribe(topTracks=>{
        console.log(topTracks);
        this.topTracks=topTracks;
      })
  }


}
