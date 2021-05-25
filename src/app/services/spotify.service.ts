import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//creacion de un servicio para consumir api de spotify creacion de servicio
// ng g s services/spotify
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query:string){

    const url =`https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCtg9VML_XYvFlDoBBUb1wcI_bmVI-FJgMUr53IduK6YFKeYrQAtSkRO08at-4Hx1Y9yYgUkyCrRoN9u2k'
    });

    return this.http.get(url,{headers});

  }

      //se hace una peticion a una api



  getNewReleases(){

  //se utilizan propiedades headers ya que se debe de necesitar un token de autorizacion
             //   const headers = new HttpHeaders({
             //   'Authorization': 'Bearer BQAevXwAFmgvr9AIsUKYfxmuOmobMXf6UOwACpO7jETirLZRP437Nw3t2gEfNiSKZezFAVl_yw1gWXwLaQg'
            //});

      return this.getQuery('browse/new-releases')
      .pipe(map(data =>data['albums'].items));
 //peticicion ya realizada  siendo headers un parametro de autorizacion para el uso
         //return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
         //.pipe(map(data =>data['albums'].items));
    }


    getArtistas(termino:string){

      return this.getQuery(`search?q=${termino}&type=track%2Cartist&market=US&limit=15&offset=5`)
      .pipe(map(data=> data['artists'].items));

                 // const headers = new HttpHeaders({
                //  'Authorization': 'Bearer BQAevXwAFmgvr9AIsUKYfxmuOmobMXf6UOwACpO7jETirLZRP437Nw3t2gEfNiSKZezFAVl_yw1gWXwLaQg'
                //});
         //peticicion ya realizada  siendo headers un parametro de autorizacion para el uso
                 //return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=track%2Cartist&market=US&limit=15&offset=5`,{headers})
                 //.pipe(map(data=> data['artists'].items));
    }

    getArtistaa(id:string){

      return this.getQuery(`artists/${id}`)
     // .pipe(map(data=> data['artists'].items));

                 // const headers = new HttpHeaders({
                //  'Authorization': 'Bearer BQAevXwAFmgvr9AIsUKYfxmuOmobMXf6UOwACpO7jETirLZRP437Nw3t2gEfNiSKZezFAVl_yw1gWXwLaQg'
                //});
         //peticicion ya realizada  siendo headers un parametro de autorizacion para el uso
                 //return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=track%2Cartist&market=US&limit=15&offset=5`,{headers})
                 //.pipe(map(data=> data['artists'].items));
    }

}
