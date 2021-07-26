import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
  { path:'section', component: SectionComponent },
  { path:'formulaire', component: FormulaireComponent },
  { path:'', redirectTo:'section',pathMatch:'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
