import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryExpensesComponent } from './salary-expenses/salary-expenses.component';

// Defina suas rotas aqui
const routes: Routes = [
  { path: 'cadastrar', component: SalaryExpensesComponent },
  { path: '', redirectTo: '/cadastrar', pathMatch: 'full' }, // Redirecionamento padrão para a página de cadastro
  { path: '**', redirectTo: '/cadastrar' } // Redirecionamento para rotas desconhecidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
