import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface GrafcanApiResponse {
  page: string;
  numpage: string;
  total: number;
  time: number;
  urlprev: string;
  urlnext: string;
  urlfirst: string;
  urllast: string;
  data: Calle[];
}

export interface Calle {
  id: number;
  puntuacion: string;
  nombre: string;
  localizacion: string;
  clasificacion: string;
  codigo: string;
  origen: number;
  longitud: string;
  latitud: string;
  imagen: any;
  hits: number;
  peso: number;
}

@Injectable({
  providedIn: 'root',
})
export class GrafcanApiService {
  constructor(private httpClient: HttpClient) {}

  urlCalle = 'https://visor.grafcan.es/busquedas/toponimo/1/50/?&texto=';

  urlMarca = 'https://visor.grafcan.es/busquedas/toponimiakml/1/10/idecanarias/1/';

  getCalle(nombre: string) {
    return this.httpClient.get(this.urlCalle + nombre, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  getMarca(id: number) {
    return this.httpClient.get(this.urlMarca + id + '/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/xml',
      }),
      responseType: 'text'
    });
  }
}
