import { Component } from '@angular/core';
import {
  Calle,
  GrafcanApiResponse,
  GrafcanApiService,
} from '../Servicios/grafcan-api.service';
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
@Component({
  selector: 'app-grafcan',
  templateUrl: './grafcan.component.html',
  styleUrls: ['./grafcan.component.css'],
})
export class GrafcanComponent {
  constructor(private api: GrafcanApiService) {}

  suggestions: any[] = [];

  visible: boolean = false;

  response!: GrafcanApiResponse;

  calleSeleccionada: any ;

  coordenadas: [number, number] | null = null;
  nombre: string | null = null;

  showDialog() {
    if (this.calleSeleccionada) {
      this.visible = true;
    }
  }

  search(event: AutoCompleteCompleteEvent) {
    console.log(event);
  }

  buscar(event: AutoCompleteCompleteEvent) {
    this.visible = false;
    this.api.getCalle(event.query).subscribe(
      (res) => {
        this.response = res as GrafcanApiResponse;
        this.suggestions = this.response.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  seleccionarCalle(event: Calle) {
    this.calleSeleccionada = this.response.data.find(
      (calle) => (calle.id = event.id)
    );

    this.coordenadas = [
      this.calleSeleccionada.latitud,
      this.calleSeleccionada.longitud,
    ];

    this.nombre =  this.calleSeleccionada.nombre
  }
}
