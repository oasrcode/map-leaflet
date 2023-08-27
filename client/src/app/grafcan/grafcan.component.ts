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

  calleSeleccionada: any;

  coordenadas: [number, number] | null = null;
  nombre: string | null = null;

  kml: any;

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

  datosMarca: any;
  seleccionarCalle(event: Calle) {
    this.calleSeleccionada = this.response.data.find(
      (calle) => (calle.id = event.id)
    );

    this.coordenadas = [
      this.calleSeleccionada.latitud,
      this.calleSeleccionada.longitud,
    ];

    this.nombre = this.calleSeleccionada.nombre;

    if (this.calleSeleccionada != null) {
      console.log(this.calleSeleccionada);
      if (this.calleSeleccionada.clasificacion == 'GRF Callejero - Viales') {
        this.getMarca();
      }
    }
  }

  getMarca() {
    this.api.getMarca(this.calleSeleccionada.id).subscribe(
      (res) => {
        const parse = new DOMParser();
        this.kml = parse.parseFromString(res, 'text/xml');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
