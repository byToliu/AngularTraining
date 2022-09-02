import { RegistrosService } from './registros.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrosComponent } from './registros/registros.component';
import { LoginComponent } from './login/login.component';
import { MenuNavComponent } from './shared/menu-nav/menu-nav.component';
import { HistoricoGeralComponent } from './historico-geral/historico-geral.component';
import { HistoricoRegistroComponent } from './shared/historico-registro/historico-registro.component';
import { UserConfigComponent } from './user-config/user-config.component';




@NgModule({
  declarations: [
    AppComponent,
    RegistrosComponent,
    LoginComponent,
    MenuNavComponent,
    HistoricoGeralComponent,
    HistoricoRegistroComponent,
    UserConfigComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RegistrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
