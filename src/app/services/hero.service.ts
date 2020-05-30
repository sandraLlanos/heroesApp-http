import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from '../interfaces/heroe.interface';
import { map } from "rxjs/operators";
import { pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroesUrl:string = "https://heroesapp-4a3a7.firebaseio.com/heroes.json";
  heroUrl:string = "https://heroesapp-4a3a7.firebaseio.com/heroes";

  constructor(private http:HttpClient) { }

  newHeroe(hero:Hero)
  {
    let body = JSON.stringify( hero );
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
  updateHeroe(hero:Hero, key$:string) {
    let body = JSON.stringify( hero );
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });

    let url:string = `${ this.heroUrl }/${ key$ }.json`;
    return this.http.put( url, body, { headers } )
        .pipe ( map ( res => {
          console.log( res );
          return res;
          })       
        )   
  }
  getHero( key$:string ){
    let url:string = `${ this.heroUrl }/${ key$ }.json`
    return this.http.get( url );
  }
}
