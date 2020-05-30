import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from 'src/app/interfaces/heroe.interface';
import { HeroService } from '../../services/hero.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {
  id:string;
  nuevo:boolean = false;
  hero:Hero = {
   name:"",
   home:"Marvel",
   bio:"",
  }
  constructor( private _heroService:HeroService,
               private router:Router,
               private route:ActivatedRoute ) { 

    this.route.params.subscribe( params =>{
      console.log(params); 
      this.id = params['id'];     
    })            
  }
 
  save() {
    if (this.id == "new") {
      // creation
      console.log(this.hero);     
      this._heroService.newHeroe(this.hero)
          .subscribe( (data:any) => {
            this.router.navigate(['/hero', data.name])         
            console.log(data); 
          },
          error => console.error(error));
    } else {
      // update
      console.log(this.hero);     
      this._heroService.updateHeroe(this.hero, this.id)
          .subscribe( (data:any) => {         
            console.log(data); 
          },
          error => console.error(error));
    }
  }

  addHero(forma:NgForm){

    this.router.navigate(['/hero', 'new']);
    forma.reset({
      'home':'Marvel'
    })

    // this._heroService.getHero( this.id )
    //     .subscribe( (hero:any) => {
    //       this.heroe = hero;
    //     })
  }

}
