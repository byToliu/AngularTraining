import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoGeralComponent } from './historico-geral/historico-geral.component';
import { RegistrosComponent } from './registros/registros.component';
import { CriarRegistroComponent } from './shared/criar-registro/criar-registro.component';
import { UserConfigComponent } from './user-config/user-config.component';

const routes: Routes = [
  { path: '', component: RegistrosComponent},
  { path: 'historico', component: HistoricoGeralComponent},
  { path: 'config', component: UserConfigComponent},
  { path: 'criar', component: CriarRegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
