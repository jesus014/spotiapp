import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//creacion de un servicio para consumir api de spotify creacion de servicio
// ng g s services/spotify

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  //se hace una peticion a una api


  getNewReleases(){
  //se utilizan propiedades headers ya que se debe de necesitar un token de autorizacion
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDRPonArrFYnl2cPLExjYOFOSYMuILcVYDIt9tZxaDSIGkRxf_CSsekMAfUX3dHq6-Uoe4-jsP7HdT-nJY'
    });

 //peticicion ya realizada  siendo headers un parametro de autorizacion para el uso
   return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});


    }
}
