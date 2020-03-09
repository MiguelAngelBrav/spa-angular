import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HeroesService, Heroe } from '../../services/heroes.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  mHeroes: Heroe[] = []

  constructor(private mRouter: Router, private mHeroesService: HeroesService) { }

  ngOnInit(): void {
    this.mHeroes = this.mHeroesService.getHeroes()
  }  
  
  verHeroe(mIndex: number ) {
    this.mRouter.navigate(['/heroe', mIndex])
  }


}
