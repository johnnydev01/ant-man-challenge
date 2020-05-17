import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { ComicsComponent } from './components/comics/comics.component';


const routes: Routes = [
  {
    path: '',
    component: CharacterComponent
  },
  {
    path: 'character',
    component: CharacterComponent
  },
  {
    path: 'comics',
    component: ComicsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
