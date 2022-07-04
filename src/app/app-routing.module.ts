import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditoComponent } from './pages/credito/credito.component';

const routes: Routes = [
	{ path: 'inicio', component: CreditoComponent},
	{ path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
