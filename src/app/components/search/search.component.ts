import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HeroesService, Heroe } from '../../services/heroes.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  mSearch: string = ''
  mHeroes: Heroe[] = []

  @Input() mHeroe: any = {}
  @Input() mIndex: number 

  constructor( private mHeroesService: HeroesService, private mRouter: Router, private mActivatedRoute: ActivatedRoute ) { 
    this.mActivatedRoute.params.subscribe(params => {
      this.mSearch = params['name']
      this.mHeroes = this.mHeroesService.searchHeroes(this.mSearch)
    })
  }

  ngOnInit(): void {  }

  verHeroe(mIndex: number ) {
    this.mRouter.navigate(['/heroe', mIndex])
  }

}
