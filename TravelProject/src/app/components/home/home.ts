import { Component, OnDestroy, OnInit } from '@angular/core';

//
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  imagenes = [
    'assets/Cocuy.png',
    'assets/Guatavita.png',
    'assets/Raquira.png',
    'assets/Zipaquira.png'
  ];

 imagenActual = 0;
  intervalo: any;

  ngOnInit() {
    this.intervalo = setInterval(() => {
      this.siguiente();
    }, 3000); // cambia cada 3 segundos
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }

  siguiente() {
    this.imagenActual = (this.imagenActual + 1) % this.imagenes.length;
  }

  anterior() {
    this.imagenActual = (this.imagenActual - 1 + this.imagenes.length) % this.imagenes.length;
  }
}
