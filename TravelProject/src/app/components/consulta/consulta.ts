import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta.html',
  styleUrl: './consulta.css'
})




export class Consulta implements OnInit {

  private http = inject(HttpClient);
  private baseUrl = 'https://f09ef1e271d6.ngrok-free.app'; // Reemplazar si cambia 

  destinos: any[] = [];
  municipios: string[] = [];
  categorias: string[] = [];
  topMunicipios: { [key: string]: number } = {};
  destinosPorMunicipio: any[] = [];
  destinosPorCategoria: any[] = [];

  ngOnInit(): void {
    this.cargarDestinos();
    this.cargarMunicipios();
    this.cargarCategorias();
    this.cargarTopMunicipios();

    // También puedes cargar filtros directamente si deseas:
    // this.filtrarPorMunicipio('Tunja');
    // this.filtrarPorCategoria('Hotel');
  }

  cargarDestinos() {
    this.http.get<any[]>(`${this.baseUrl}/api/destinos`)
      .subscribe(data => this.destinos = data);
  }

  cargarMunicipios() {
    this.http.get<string[]>(`${this.baseUrl}/api/municipios`)
      .subscribe(data => this.municipios = data);
  }

  cargarCategorias() {
    this.http.get<string[]>(`${this.baseUrl}/api/categorias`)
      .subscribe(data => this.categorias = data);
  }

  cargarTopMunicipios() {
    this.http.get<{ [key: string]: number }>(`${this.baseUrl}/api/top-municipios`)
      .subscribe(data => this.topMunicipios = data);
  }

  filtrarPorMunicipio(nombre: string) {
    this.http.get<any[]>(`${this.baseUrl}/api/destinos/${encodeURIComponent(nombre)}`)
      .subscribe(data => this.destinosPorMunicipio = data);
  }

  filtrarPorCategoria(nombre: string) {
    this.http.get<any[]>(`${this.baseUrl}/api/categoria/${encodeURIComponent(nombre)}`)
      .subscribe(data => this.destinosPorCategoria = data);
  }
}
