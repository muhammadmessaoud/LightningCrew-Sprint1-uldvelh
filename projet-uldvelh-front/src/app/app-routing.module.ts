import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorListComponent } from './editor/editor-list/editor-list.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { OhFourComponent } from './oh-four/oh-four.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: '', component: LayoutComponent },
  // { path: '**', redirectTo: '/not-found' },
  { path: 'editor-list', component: EditorListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
