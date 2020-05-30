import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from "rxjs/operators";
import { pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroesUrl:string = "https://heroesapp-4a3a7.firebaseio.com/heroes.json";

  constructor(private http:HttpClient) { }

  nuevoHeroe(heroe:Heroe)
  {
    let body = JSON.stringify( heroe );
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.http.post( this.heroesUrl, body, { headers } )
        .pipe ( map ( res => {
          console.log( res );
          return res;
          })       
        )   
  }
}
