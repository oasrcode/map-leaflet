import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-kml';
import { Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewChecked {
  ngAfterViewChecked(): void {}
  @Input() nombre: string | null = null;
  @Input() coordenadas: [number, number] | null = null;
  @Input() kml: any;
  map: any;

  ngOnInit() {
    setTimeout(() => {
      this.initMap();
    }, 100);
  }

  private initMap() {
    if (this.coordenadas != null && this.nombre != null) {
      this.map = new Map('leafletMap').setView(this.coordenadas, 20);

      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);

      const marca = marker(this.coordenadas, { title: this.nombre }).addTo(
        this.map
      );
      marca.bindPopup('Calle : ' + this.nombre);

      if (this.kml != null) {
        const track = new L.KML(this.kml);
        this.map.addLayer(track);

        // Adjust map to show the kml
        const bounds = track.getBounds();
        this.map.fitBounds(bounds);
      }
    }
  }
}
