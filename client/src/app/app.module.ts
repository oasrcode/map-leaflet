import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GrafcanComponent } from './grafcan/grafcan.component';
import { MapComponent } from './map/map.component';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import {DialogModule} from 'primeng/dialog'
import { GrafcanApiService } from './Servicios/grafcan-api.service';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [		
    AppComponent,
    HomeComponent,
    GrafcanComponent,
    MapComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    DialogModule,
    AutoCompleteModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GrafcanApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
