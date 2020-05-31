import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes:any[] = [];
  constructor( private _heroService:HeroService ) { 
    
    this._heroService.getHeroes()
      .subscribe( (dataheroes:any) => {
        console.log(dataheroes); 
        this.heroes = dataheroes;
        console.log(this.heroes);  

        //se podria recorrer la data que llega de heroes
        // en este caso llega un objeto de objetos
        // al hacerlo de esta forma se pierde la referencia key
        // for (const key in dataheroes) {
        //   console.log(dataheroes[key]);
        //   this.heroes.push(dataheroes[key])      
        // }     
      
      })

  }

  ngOnInit() {

    // con el operador delete puedo borrar las propiedades del objeto
    // var array = ["Geeky", "Theory", ".com"];
    // delete array[1];
    // console.log(array);

    // con splice elimino el elmento de un array
    // var array2 = ["Geeky", "Theory", ".com"];
    //  array2.splice(1,1);
    // console.log(array2);
    

    // let numbers = ['1','2','20'];
    // console.log('este es un for-of');
    // for (const num of numbers) {
    //   console.log(num);
      
    // }  
    // let numbers2 = ['1','2','20'];
    // console.log('este es un for');
    // for (let i = 0; i < numbers2.length; i++) {
    //   const num = numbers2[i];
    //   console.log('index:',i ,''+ 'valor:', num);
      
    // }

  }

  deleteHero( key$:string ){
    this._heroService.deleteHeroe( key$ )
    .subscribe( (respuesta:any) => {
        console.log(respuesta);
        if (respuesta) {
          console.error(respuesta);          
        }else{
          delete this.heroes[key$]
        }      
    })

  }

}
