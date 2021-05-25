import{Routes}from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';



export const ROUTES:Routes=[
//configuracion de las rutas para el uso de las mismas en el proyecto
  {path: 'home', component: HomeComponent}, //ruta para el home
  {path: 'search', component: SearchComponent},
  {path: 'artist/:id', component: ArtistaComponent},
  {path: '', pathMatch:'full', redirectTo:'home'},
  {path: '**', pathMatch:'full', redirectTo:'home'},


];

