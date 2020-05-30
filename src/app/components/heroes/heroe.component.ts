import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {
  heroe:Heroe = {
   nombre:"",
   casa:"Marvel",
   bio:"",
  }
  constructor( private _heroService:HeroService,
               private router:Router ) { }
 
  guardar()
  {
    console.log(this.heroe);     
    this._heroService.nuevoHeroe(this.heroe)
        .subscribe( (data:any) => {
          this.router.navigate(['/heroe', data.name])         
          console.log(data); 
        },
        error => console.error(error));
  }

}
