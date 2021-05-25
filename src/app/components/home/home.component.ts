import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //constructor llamando  a las peticiones con las apis  http

  paises: any []=[];

  nuevasCanciones: any []=[];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {

    this.loading= true;
    this.error= false;
    //this.http.get('https://api.covid19api.com/country/Argentina/status/confirmed?from=2020-12-01T00:00:00Z&to=2021-02-01T00:00:00Z')
    //.subscribe((res:any) =>{
      //  this.paises=res;
       //console.log(res);
    //})
   //se pasan como parametros los servicios del api get para que pueda ser utilizado e importado
   //dicho archivo
    this.spotify.getNewReleases()
      .subscribe((data:any) => {
        this.nuevasCanciones=data;
        this.loading=false;
      },(errorServicio)=>{

        this.loading=false;
        this.error=true;
        console.log(errorServicio);
            this.mensajeError= errorServicio.error.message;
            

      });

  }




  ngOnInit(): void {
  }

}
