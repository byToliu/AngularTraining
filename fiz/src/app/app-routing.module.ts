import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoGeralComponent } from './historico-geral/historico-geral.component';
import { RegistrosComponent } from './registros/registros.component';
import { UserConfigComponent } from './user-config/user-config.component';

const routes: Routes = [
  { path: '', component: RegistrosComponent},
  { path: 'historico', component: HistoricoGeralComponent},
  { path: 'config', component: UserConfigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
