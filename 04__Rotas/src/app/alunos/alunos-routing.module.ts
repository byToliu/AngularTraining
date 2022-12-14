import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

const routes: Routes = [
    {
      path: 'alunos', component: AlunosComponent
    },
    {
      path: 'alunos/novo', component: AlunoFormComponent
    },
    {
      path: 'alunos/:id', component: AlunoDetalheComponent
    },
    {
      path: 'alunos/:id/editar', component: AlunoFormComponent
    },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
