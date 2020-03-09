import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

  @Input() mHeroe: any = {}
  @Input() mIndex: number 

  @Output() heroeSelect: EventEmitter<number>
 
  constructor() {
    this.heroeSelect = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe() {
    // this.mRouter.navigate(['/heroe', this.mIndex])
    this.heroeSelect.emit(this.mIndex)
  }

}
