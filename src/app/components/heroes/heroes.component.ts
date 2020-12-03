import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes:any[] = [];
  loading:boolean = true;
  
  constructor( private _heroService:HeroService ) { 
    
    this._heroService.getHeroes()
      .subscribe( (dataheroes:any) => {
        console.log(dataheroes); 
        setTimeout( ()=> {
          this.loading = false
          this.heroes = dataheroes;
        }, 2000);
        
        // console.log(this.heroes);  

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
   let productos=[
      {
        nombre: 'valor1',
        valor:100,
      },
      {
        nombre: 'valor2',
        valor:200,
      },
      {
        nombre: 'valor3',
        valor:150,
      }
    ]
    productos.sort(function(a,b){
      return (b.valor - a.valor)
    })
   
    console.log(productos);
    
    let items = [ {id:1, value:3, perc:0.5}, {id:2, value:2, perc:0.1}, {id:3, value:1, perc:0.2} ]
    items.sort(function (a, b){
        return (b.value - a.value)
    })
    console.log(items);
    console.log(items.sort(function (a, b){
      return (b.value - a.value)
  }));
    console.log(items.sort(function (a, b) {
      return (a.perc - b.perc)
  }));
    
    
   
    
   
    
    

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
