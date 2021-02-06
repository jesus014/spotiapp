import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //constructor llamando  a las peticiones con las apis  http 

  paises: any []=[];

  constructor(private http: HttpClient) { 

    this.http.get('https://api.covid19api.com/country/Argentina/status/confirmed?from=2020-12-01T00:00:00Z&to=2021-02-01T00:00:00Z')
    .subscribe((res:any) =>{
        this.paises=res;
       console.log(res);
    })
    
  }

  ngOnInit(): void {
  }

}
