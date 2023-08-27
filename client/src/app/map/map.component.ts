import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  Input,
  OnDestroy,
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
      console.log(this.map);
      this.initMap();
    }, 100);
  }
  layerSatelite =
    'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
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
        this.track = new L.KML(this.kml);

        this.map.addLayer(this.track);

        // Adjust map to show the kml
        const bounds = this.track.getBounds();
        this.map.fitBounds(bounds);
      }
    }
  }
  track: any;
}
//https://gist.github.com/Yago/05d479de169a21ba9fff
// Nokia :

// http://{s}.maptile.maps.svc.ovi.com/maptiler/v2/maptile/newest/normal.day/{z}/{x}/{y}/256/png8

// MapQuest :

// http://a.tile.openstreetmap.org/{z}/{x}/{y}.jpg
// http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg
// http://otile1.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg


// http://www.osm-wms.de



// http://www.thunderforest.com/ :

// http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png
// http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png
// http://{s}.tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png


// http://maps.stamen.com :

// http://tile.stamen.com/toner/{z}/{x}/{y}.png
// http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg
// http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg


// LandShaded :

// http://tiles2.openpistemap.org/landshaded/{z}/{x}/{y}.png


// Autres :

// http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}
// http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}
// http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}

// http://server.arcgisonline.com/ArcGIS/rest/services/NGS_Topo_US_2D/MapServer/tile/{z}/{y}/{x} // US
// http://server.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x} // US
// http://server.arcgisonline.com/ArcGIS/rest/services/ESRI_Imagery_World_2D/MapServer/tile/{z}/{y}/{x} // SAT US
// http://server.arcgisonline.com/ArcGIS/rest/services/ESRI_StreetMap_World_2D/MapServer/tile/{z}/{y}/{x} // US

// http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}
// http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x} // SAT
// http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}