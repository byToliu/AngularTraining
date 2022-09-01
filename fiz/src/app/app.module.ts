import { RegistrosService } from './registros.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrosComponent } from './registros/registros.component';
import { LoginComponent } from './login/login.component';
import { HistoricoComponent } from './historico/historico.component';




@NgModule({
  declarations: [
    AppComponent,
    RegistrosComponent,
    LoginComponent,
    HistoricoComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RegistrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
