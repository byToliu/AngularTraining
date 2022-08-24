import { ServicoService } from './servico.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItensComponent } from '../itens/itens.component';
import { ItensDetalhesComponent } from './itens-detalhes/itens-detalhes.component';


@NgModule({
  declarations: [
    ItensComponent,
    ItensDetalhesComponent
  ],
  imports: [
    CommonModule
    
  ],
  exports:[
    ItensComponent
  ],
  providers: [
    ServicoService,
  ]
})
export class PrimeiroModuloModule { }
