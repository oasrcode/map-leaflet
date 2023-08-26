import { Component } from '@angular/core';
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
  items: any[] | undefined;

  selectedItem: string="";

  suggestions: any[]=[];

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  search(event:any){
    console.log(event)
  }
}
