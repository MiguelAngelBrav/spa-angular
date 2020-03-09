import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private mRouter: Router) { }

  ngOnInit(): void {
  }

  buscar(mBusqueda: string) {
    console.log('==> buscar: ' + mBusqueda)
    this.mRouter.navigate(['/search', mBusqueda])
  }
}
