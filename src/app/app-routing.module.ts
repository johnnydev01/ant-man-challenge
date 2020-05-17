import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { ComicsComponent } from './components/comics/comics.component';
import { SeriesComponent } from './components/series/series.component';


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
  },
  {
    path: 'series',
    component: SeriesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
