import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { PrimeiroModuloModule } from './itens/primeiro-modulo.module';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeiroModuloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
