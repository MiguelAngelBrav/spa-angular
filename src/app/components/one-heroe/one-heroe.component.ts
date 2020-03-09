import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';



@Component({
  selector: 'app-one-heroe',
  templateUrl: './one-heroe.component.html'
})
export class OneHeroeComponent implements OnInit {

  mHeroe: any = {}

  constructor(private mActivatedRoute: ActivatedRoute, private mHeroesService: HeroesService, private mRouter: Router) {
    this.mActivatedRoute.params.subscribe(params => {
      this.mHeroe = this.mHeroesService.getOneHeroe(params['id'])
    })
  }

  ngOnInit(): void {
  }

  goBack() {
    this.mRouter.navigate(['/heroes'])
  }

}
